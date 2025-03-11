import { getRegistrations } from "@/app/services/RegisterService";
import { access } from "fs";

const API_TOKEN = process.env.D1_API_TOKEN;
const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const DB = process.env.DATABASE_ID;

/*-------------------------------------
*             GET REQUEST
--------------------------------------*/
export async function GET(request) {
  // Extract URL and search parameters
  const url = new URL(request.url);
  const securityToken = url.searchParams.get("security_token");
  const whichEvent = url.searchParams.get("event");
  const whichData = url.searchParams.get("data");

  // Define valid events
  const validEvents = ["mesa", "tucson"];
  const validData = ["registration", "stake"];

  // Check if event parameter exists and is one of the valid options
  if (!whichEvent || !validEvents.includes(whichEvent)) {
    return new Response("Not Found: Invalid or missing event. Must be 'mesa' or 'tucson'", {
      status: 404
    });
  }
  if (!whichData || !validData.includes(whichData)) {
    //whichData = 'registration';
  }

  // Check if security_token exists and matches "abcdefg"
  if (whichEvent == 'mesa' && securityToken !== "ckAMT4oDrX34y8jIrMsU1cwn") {
    return new Response("Forbidden: Invalid or missing security token", {
      status: 403
    });
  } else if (whichEvent == 'tucson' && securityToken !== "F1P8kHjZpUAguPhW7EkRQ8dw") {
    return new Response("Forbidden: Invalid or missing security token", {
      status: 403
    });
  }
  if (whichData === 'stake') {
    return new Response("This would be stake data", {
      status: 200
    });
  }
  try {
      const registrations = await getRegistrations(whichEvent);
    // Convert results to CSV (or JSON if preferred)
    const headers = Object.keys(registrations[0]).join(",");
    const rows = registrations.map(row => Object.values(row).join(",")).join("\n");
    const csv = `${headers}\n${rows}`;
      return new Response(csv, {
        headers: {
          "Content-Type": "text/plain", // text/csv or text/plain
          "Access-Control-Allow-Origin": "*" // Allow Google Sheets to access it
        }
      });
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