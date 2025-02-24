import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, email, mobile } = req.body;

  // Validate input
  if (!firstName || !lastName || !email || !mobile) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const db = req.env.DB; // D1 binding from Cloudflare Workers

    // Check current registration count
    const countQuery = await db.prepare('SELECT COUNT(*) as count FROM registrations').first();
    const count = countQuery.count;
    if (count >= 5000) {
      return res.status(400).json({ error: 'Registration is full (5000 limit reached)' });
    }

    // Generate unique ticket number
    const ticketNumber = `TICKET-${uuidv4().slice(0, 8).toUpperCase()}`;

    // Insert registration
    await db
      .prepare(
        'INSERT INTO registrations (first_name, last_name, email, mobile, ticket_number) VALUES (?, ?, ?, ?, ?)'
      )
      .bind(firstName, lastName, email, mobile, ticketNumber)
      .run();

    // Fetch the newly created ticket
    const ticket = await db
      .prepare('SELECT * FROM registrations WHERE ticket_number = ?')
      .bind(ticketNumber)
      .first();

    return res.status(200).json({ ticket });
  } catch (error) {
    console.error(error);
    if (error.message.includes('UNIQUE constraint')) {
      return res.status(400).json({ error: 'Email or mobile number already registered' });
    }
    return res.status(500).json({ error: 'Something went wrong' });
  }
}

// Bind D1 database to the request environment
export const config = {
  runtime: 'edge',
  async fetch(request, env, ctx) {
    request.env = env; // Attach environment (D1 binding) to request
    return handler(request);
  },
};