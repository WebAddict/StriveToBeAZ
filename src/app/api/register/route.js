
/*-------------------------------------
*             POST REQUEST
--------------------------------------*/
export async function POST(req) {
  const { firstName, lastName, email, mobile, age, event, religion } = await req.json();

  try {
      if (!firstName || !lastName || !email || !mobile || !age) {
        return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
      }

      const sql = `
        INSERT INTO registrations (first_name, last_name, email, mobile, age, event, religion, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
      `;
      await process.env.DB.prepare(sql).bind(firstName, lastName, email, mobile, age, event, religion).run();

      return new Response(JSON.stringify({ message: "Registration successful" }), { status: 201 });
  } catch (error) {
    return new Response(
      JSON.stringify({
          error: 'Something went wrong.',
          details: error?.toString(),
      }),
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
