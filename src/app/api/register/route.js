import { v4 as uuidv4 } from 'uuid';

/*-------------------------------------
*             POST REQUEST
--------------------------------------*/
export async function POST(req) {
  const { firstName, lastName, email, mobile } = await req.json(); // Parse the incoming JSON body

  // Validate input
  if (!firstName || !lastName || !email || !mobile) {
    return new Response(
      JSON.stringify({ error: 'All fields are required' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const db = req.env.DB; // D1 binding from Cloudflare Workers

    // Check current registration count
    const countQuery = await db.prepare('SELECT COUNT(*) as count FROM registrations').first();
    const count = countQuery.count;
    if (count >= 5000) {
      return new Response(
        JSON.stringify({ error: 'Registration is full (5000 limit reached)' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
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

    return new Response(
      JSON.stringify({ ticket }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error(error);
    if (error.message.includes('UNIQUE constraint')) {
      return new Response(
        JSON.stringify({ error: 'Email or mobile number already registered' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    return new Response(
      JSON.stringify({ error: 'Something went wrong' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

/*-------------------------------------
*             GET REQUEST
--------------------------------------*/
export async function GET(request) {
  return new Response(JSON.stringify({ message: 'Registration!' }), {
    status: 200,
  });
}
