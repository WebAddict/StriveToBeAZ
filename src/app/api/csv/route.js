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
  // Check if security_token exists and matches "abcdefg"
  if (securityToken !== "ckAMT4oDrX34y8jIrMsU1cwn") {
    return new Response("Forbidden: Invalid or missing security token", {
      status: 403
    });
  }
  try {
      const registrations = await getRegistrations('mesa');
    // Convert results to CSV (or JSON if preferred)
    const headers = Object.keys(registrations[0]).join(",");
    const rows = registrations.map(row => Object.values(row).join(",")).join("\n");
    const csv = `${headers}\n${rows}`;
      return new Response(csv, {
        headers: {
          "Content-Type": "text/csv", // text/csv
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