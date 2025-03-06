const API_TOKEN = process.env.D1_API_TOKEN;
const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const DB = process.env.DATABASE_ID;

export async function fetchDb(sql: string, params: any[] = []) {
    try {
      const requestBody: any = { sql };
  
      if (params.length > 0) {
        requestBody.params = params;  // Include params if they are provided
      }
  
      const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/d1/database/${DB}/query`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody)
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error('Could not fetch data');
      }
  
      return data.result[0].results;
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  }

  // help prevent sql injection
  export function qstr(value : any) {
    if (typeof value === 'string') {
        // Escape single quotes for string values
        return `'${value.replace(/'/g, "''")}'`;
    }
    // For non-string values, just return as is (you can add more types here as needed)
    return value;
}