/*
* This is the backend services for register. Any backend functions or code should go here and then be called by the api
*/


import { fetchDb, qstr } from "./DbService";


export interface RegisterData {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    religion: string;
    age: string;
    stake: string;
    event: string;
    childName: string;
    uniqueId?: string;
}

export interface RegisterConfirm {
    confirmFSY: boolean;
    confirmAdult: boolean;
    confirmPhotos: boolean;
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
export async function getRegistrationsNoUniqueId() {
    try {
        let sql = "SELECT * FROM REGISTRATIONS where uniqueid IS NULL OR uniqueid = ''";
        const data = await fetchDb(sql);
        return data;
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
}

export async function getRegistrations(event=false) {
    try {
        let sql = "SELECT * FROM REGISTRATIONS";
        if (event) {
            const escapedEvent = qstr(event);
            sql += ` WHERE event = ${escapedEvent} COLLATE NOCASE`;
        }
        const data = await fetchDb(sql);
        return data;
    } catch (error) {
        throw new Error('Error fetching registrations: ' +  JSON.stringify(error))
    }
}

export async function getStakesRegistrations(event: string | false = false, sort: 'count' | 'stake' | false = false) {
    try {
        let sql = "SELECT COUNT(*) as count, stake FROM registrations";
        if (event) {
            const escapedEvent = qstr(event);
            sql += ` WHERE event = ${escapedEvent} COLLATE NOCASE GROUP BY stake COLLATE NOCASE`;
        } else {
            sql += ` GROUP BY stake COLLATE NOCASE`;
        }
        let sortSql = " ORDER BY count DESC";
        if (!sort || sort === 'count') {
            sql += sortSql;
        } else if (sort === 'stake') {
            sortSql = " ORDER BY stake ASC";
            sql += sortSql;
        }
        const data = await fetchDb(sql);
        return data;
    } catch (error) {
        throw new Error('Error fetching registrations: ' +  JSON.stringify(error))
    }
}

export async function getRegistrationByUniqueId(uniqueId : string) {
    try {
        const id = qstr(uniqueId);
        const sql = `SELECT * FROM REGISTRATIONS WHERE uniqueid = ${id}`;
        const data = await fetchDb(sql);
        return data[0];
    } catch (error) {
        throw new Error('Error fetching registrations: ' +  JSON.stringify(error))
    }
}


export async function existsUniqueId(uniqueId: string) {
    try {
        const id = qstr(uniqueId);
        const sql = `SELECT COUNT(*) as count FROM REGISTRATIONS WHERE uniqueid = ${id}`;
        const data = await fetchDb(sql);
        return data[0].count > 0;
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
}

export async function updateRegistrationUniqueid(uniqueId : string, registerId : string) {
    try {
        const escapedUniqueId = qstr(uniqueId);
        const escapedRegisterId = qstr(registerId);
        let sql = `UPDATE REGISTRATIONS SET uniqueid = ${escapedUniqueId} WHERE id = ${escapedRegisterId}`;
        const data = await fetchDb(sql);
        return true;
    } catch (error) {
        throw new Error(`Error: ${JSON.stringify(error)}`);
    }
}

export async function updateEmailSentDate(uniqueId : string, registerId : string) {
    try {
        const escapedUniqueId = qstr(uniqueId);
        const escapedRegisterId = qstr(registerId);
        let sql = `UPDATE REGISTRATIONS SET email_notification_date = CURRENT_TIMESTAMP WHERE id = ${escapedRegisterId} AND uniqueid = ${escapedUniqueId}`;
        const data = await fetchDb(sql);
        return true;
    } catch (error) {
        throw new Error(`Error: ${JSON.stringify(error)}`);
    }
}

export async function cancelRegistration( uniqueId: string, id: string,) {
    try {
        const escapedUniqueId = qstr(uniqueId);
        const escapedId = qstr(id);
        let sql = `DELETE FROM REGISTRATIONS WHERE uniqueid = ${escapedUniqueId} AND id = ${escapedId}`;
        const data = await fetchDb(sql);
        return { success: true, sql: sql };
    } catch (error) {
        throw new Error(`Error: ${JSON.stringify(error)}`);
    }
}

export async function getUnsentEmailRegistrations() {
    try {
        let sql = "SELECT * FROM REGISTRATIONS WHERE email_notification_date IS NULL OR email_notification_date = ''";
        const data = await fetchDb(sql);
        return data;
    } catch (error) {
        throw new Error('Error fetching registrations: ' +  JSON.stringify(error))
    }
}

export async function getRegistrationsEventCount(event : string) {
    try {
        const escapedEvent = qstr(event);
        let sql = `SELECT COUNT(*) FROM REGISTRATIONS' WHERE event = ${escapedEvent}`;
        const data = await fetchDb(sql);
        return data;
    } catch (error) {
        throw new Error('Error fetching registrations: ' +  JSON.stringify(error))
    }
}

export async function getRegistrationsStakeCount() {
    try {
        const escapedEvent = qstr(event);
        let sql = "SELECT COUNT(*), LOWER(stake) AS normalized_stake FROM REGISTRATIONS GROUP BY LOWER(stake)";
        const data = await fetchDb(sql);
        return data;
    } catch (error) {
        throw new Error('Error fetching registrations: ' +  JSON.stringify(error))
    }
}




  