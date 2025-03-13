require('dotenv').config();

const { RegisterEmailNeedsConfirmation, SendEmail } = require('../src/app/services/EmailService');
const { getUnsentEmailRegistrations, updateEmailSentDate } = require('../src/app/services/RegisterService');

console.log("RUNNING REGISTRATION EMAILS......\n\n");

async function run() {
  try {
    const registrations = await getUnsentEmailRegistrations();

    console.log("Registrations retrieved successfully");


    for (const registration of registrations) {
        console.log("\nUpdating registration for: " + registration.last_name + ", " + registration.first_name);
      
        const email_to = registration.email;
        const body = RegisterEmailNeedsConfirmation(registration.first_name, registration.uniqueid, registration.event);
        const subject = "Your Strive To Be Registration is almost complete!";

        const emailResp = await SendEmail(email_to, subject, body);
        if (emailResp !== "success") {
          console.log(`Error sending email for: ${registration.first_name} ${registration.last_name} : ${registration.uniqueid}`);
          continue;
        }

        const response = await updateEmailSentDate(registration.uniqueid, registration.id);
        if (response) {
            console.log("\nUpdated registration uniqueid for:", registration.first_name, registration.last_name);
        } else {
            console.error("Error generating uniqueid for:", registration.first_name, registration.last_name);
        }
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