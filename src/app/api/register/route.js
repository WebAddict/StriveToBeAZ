import { getRegistrationByUniqueId, getRegistrationsNoUniqueId, makeUniqueId} from "@/app/services/RegisterService";

const API_TOKEN = process.env.D1_API_TOKEN;
const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const DB = process.env.DATABASE_ID;
/*-------------------------------------
*             POST REQUEST
--------------------------------------*/
export async function POST(req) {
  try {
    const { firstName, lastName, email, mobile, age, event, religion, stake, childName, isConfirm, registerid } = await req.json();

    if (!firstName || !lastName || !email || !age || !religion) {
      return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
    }

    let uniqueid;
    if (isConfirm) {
       uniqueid = registerid;
    } else {
       uniqueid = await makeUniqueId();
    }

    let sql;
    if (isConfirm) {
       sql = `
        UPDATE registrations SET first_name = ?, last_name = ?, email = ?, mobile = ?, age = ?, event = ?, religion = ?, stake = ?, child_name = ?, uniqueid = ?, terms_date = CURRENT_TIMESTAMP
        WHERE uniqueid = ?;
      `;
    } else {
       sql = `
      INSERT INTO registrations (first_name, last_name, email, mobile, age, event, religion, stake, child_name, uniqueid, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
    `;
    }

    // Prepare the params for the query
    const params = [
      firstName, 
      lastName, 
      email, 
      mobile, 
      age, 
      event, 
      religion, 
      stake, 
      childName, 
      uniqueid
    ];

    if (isConfirm) {
      params.push(uniqueid); 
    }

    const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/d1/database/${DB}/query`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sql,
        params
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Database error", details: data }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: "Registration successful", data }), { status: 201 });
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
export async function GET(req) {
  try {
    const url = new URL(req.url);
    const uniqueid = url.searchParams.get('registerid');

    if (!uniqueid) {
      return new Response(
        JSON.stringify({ error: 'Missing uniqueid parameter' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    const registrations = await getRegistrationByUniqueId(uniqueid);
    return Response.json(registrations, { status: 200 });
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
