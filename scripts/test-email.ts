require('dotenv').config();

const { RegisterEmailNeedsConfirmation, SendEmail } = require('../src/app/services/EmailService');

console.log("RUNNING REGISTRATION EMAILS......\n\n");

async function run() {
  try {
    const body = RegisterEmailNeedsConfirmation("Denver", "B7hcKt9t", "Mesa");
   const result = await SendEmail("dglambson@gmail.com", "Test StriveToBe", body);
   if (result == "success") {
    console.log('yeah boi we winnin');
   }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching registrations:", error.message);
      console.error("Error stack:", error.stack);
    } else {
      console.error("Error fetching registrations:", JSON.stringify(error));
    }
  }
}

run();