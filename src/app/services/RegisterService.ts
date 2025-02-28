/*
* This is the backend services for register. Any backend functions or code should go here and then be called by the api
*/

import { D1Database } from "@cloudflare/workers-types";

export interface RegisterData {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    religion: string;
    age: string;
    stake: string;
    event: string;
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



  