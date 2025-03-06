require('dotenv').config();

const { getRegistrationsNoUniqueId, updateRegistrationUniqueid, makeUniqueId } = require('../src/app/services/RegisterService');

console.log("RUNNING REGISTRATION UNIQUE ID SCRIPT......\n\n");

async function run() {
  try {
    const registrations = await getRegistrationsNoUniqueId();

    console.log("Registrations retrieved successfully");

    console.log(JSON.stringify(registrations));

    for (const registration of registrations) {
      console.log("\nUpdating registration for: " + registration.last_name + ", " + registration.first_name);
      
      const newId = await makeUniqueId();

      const response = await updateRegistrationUniqueid(newId, registration.id);
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