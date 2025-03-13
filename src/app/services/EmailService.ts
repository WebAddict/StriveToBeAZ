var mailgun = require('mailgun-js');
require('dotenv').config();

// This is the first email we will send out
export const RegisterEmailNeedsConfirmation = (first_name : string, uniqueid: string, event: string) => {
    const link = `https://strivetobeaz.org/register/${uniqueid}`;
    return `<div style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #1e1e1e; padding: 20px; border-radius: 10px; font-family: 'Arial', sans-serif; color: #f5f5f5;">
        <img src="https://imagedelivery.net/t4tWTFbtcosKvDi5rJCaNw/afbf2e0b-67fe-4b4e-42e3-3947218efe00/public" alt="Event Image" style="display: block; margin: 0 auto; width: 200px; height: auto; border-radius: 8px;">
        <div style="text-align: center; padding-bottom: 20px;">
            <h1 style="font-size: 36px; color: #FFA500;">Your registration is almost complete!</h1>
        </div>
        <div style="text-align: left; font-size: 16px; margin-bottom: 20px;">
            ${first_name},
        </div>
        <div style="text-align: left; font-size: 16px; margin-bottom: 20px;">
            <p>Thank you for registering for Strive to Be in ${event}! We’re excited to have you join us! Before you receive your entry pass, we need some additional confirmations from you. Please click on the button below to fully complete your registration.</p>
        </div>
        <div style="font-size: 16px; margin-bottom: 10px;">
        </div>
        <div style="display: block; width: 200px; margin: 20px auto; padding: 10px; background-color: #FFA500; color: #ffffff; text-align: center; font-size: 18px; text-decoration: none; border-radius: 5px;">
            <a href=${link} target="_blank" style="color: #ffffff; text-decoration: none;">Complete Registration</a>
        </div>
    </div>`;
}

export const SendEmail = async (to: string, subject: string, html: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const mg = mailgun({
      apiKey: process.env.MG_API_KEY!,
      domain: process.env.MG_DOMAIN!,
    });

    const data = {
      from: 'no-reply@strivetobeaz.org', // Ensure this email is authorized in Mailgun
      to,
      subject,
      html
    };

    mg.messages().send(data, (error: any, body: any) => {
      if (error) {
        console.error('Error sending email:', error);
        reject(error); 
      } else {
        console.log('Email sent successfully:', body);
        resolve("success");
      }
    });
  });
};