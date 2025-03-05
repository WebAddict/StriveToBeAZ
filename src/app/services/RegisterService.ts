/*
* This is the backend services for register. Any backend functions or code should go here and then be called by the api
*/

import { D1Database } from "@cloudflare/workers-types";
const API_TOKEN = process.env.D1_API_TOKEN;
const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const DB = process.env.DATABASE_ID;

export interface RegisterData {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    religion: string;
    age: string;
    stake: string;
    event: string;
    childName?: string;
    uniqueId?: string;
}

export function validateEmailInput(email: string) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

export function validatePhoneInput(number: string) {
const phonePattern = /^(?:\(\d{3}\)|\d{3})(?:[-\s]?)\d{3}(?:[-\s]?)\d{4}$/;
  const minLength = 7;
  const maxLength = 15;
  // Remove all non-numeric characters (except for parentheses and dashes)
  const cleanedInput = number.replace(/[^\d\(\)\-\s]/g, '');
  // Check if the cleaned input matches the phone number pattern and has valid length
  return phonePattern.test(cleanedInput) && cleanedInput.length >= minLength && cleanedInput.length <= maxLength;
}

export function cleanPhoneNumber(number: string) {
      return number.replace(/[^\d\(\)\-\s]/g, '');
}

export function addRegistration(
    db: D1Database, 
    firstName: string, 
    lastName: string, 
    email: string, 
    mobile: string, 
    age: string, 
    event: string, 
    religion: string,
) {
    let sql = `
        INSERT INTO registrations (first_name, last_name, email, mobile, age, event, religion, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
    `;
    // Prepare the statement with the provided values

    try {
        // Prepare the statement with the provided values
        return db.prepare(sql)
            .bind(firstName, lastName, email, mobile, age, event, religion)
            .run();
    } catch (error) {
        // Log the error if database insertion fails
        console.error("Database error:", error);
        throw new Error('Database insertion failed');
    }
}

function generateRandomString(length: number): string {
    const chars = "0123456789abcdefghjkmnpqrtuvwxyABCDEFGHJKMNPQRTUVWXY";
    let result = "";
    const charCount = chars.length;
  
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * charCount));
    }
  
    return result;
  }

export async function makeUniqueId(length = 8) {
    // Length 8 = 53,459,728,531,456 possible combinations (52^8)
    let uniqueId = '';
    let valid = false;
  
    // check if this uniqueId already exists
    while (!valid) {
        uniqueId = generateRandomString(length);
        const resp = await existsUniqueId(uniqueId);
        if (!resp) {
            valid = true;
        }
    }
  
    return uniqueId;
  }

/*-----------------------------------------------
*           DATABASE FUNCTIONS
------------------------------------------------*/

  export async function getRegistrations() {
    try {
        const sql = `SELECT * FROM REGISTRATIONS WHERE first_name != 'Delete' AND last_name != 'Me'`;
        const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/d1/database/${DB}/query`, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({sql})
        });
    
        const data = await response.json();
        if (!response.ok) {
          throw new Error('Could not fetch registrations');
        }
    
        return data.result;
      } catch (error) {
        throw new Error(JSON.stringify(error));
      }
  }

  export async function existsUniqueId(uniqueId: string) {
    try {
      const sql = `SELECT COUNT(*) as count FROM REGISTRATIONS WHERE uniqueid = ?`;
  
      const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/d1/database/${DB}/query`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sql,
          params: [uniqueId]
        })
      });
  
      const data = await response.json();
      if (!response.ok) {
        throw new Error(JSON.stringify("Error getting registration"));
      }

      if (data.result && data.result[0].results && data.result[0].results[0].count > 0) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  }



  