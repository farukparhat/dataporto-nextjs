import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface WaitlistSignupData {
  name: string;
  email: string;
  company: string;
  title?: string | null;
  challenges?: string | null;
  clientCount?: string | null;
  source: string;
}

export async function sendWaitlistNotification(data: WaitlistSignupData) {
  try {
    const { data: emailData, error } = await resend.emails.send({
      from: "dataporto <notifications@dataporto.com>",
      to: ["hello@dataporto.com"],
      subject: `New Waitlist Signup: ${data.name} from ${data.company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #1a1a1a; border-bottom: 1px solid #e5e5e5; padding-bottom: 10px;">New Waitlist Signup</h2>
          
          <div style="border: 1px solid #e5e5e5; padding: 20px; border-radius: 4px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1a1a1a;">Contact Information</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company:</strong> ${data.company}</p>
            ${data.title ? `<p><strong>Title:</strong> ${data.title}</p>` : ""}
          </div>
          
          ${
            data.challenges
              ? `
          <div style="border: 1px solid #e5e5e5; padding: 20px; border-radius: 4px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1a1a1a;">Challenges</h3>
            <p>${data.challenges}</p>
          </div>
          `
              : ""
          }
          
          ${
            data.clientCount
              ? `
          <div style="border: 1px solid #e5e5e5; padding: 20px; border-radius: 4px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1a1a1a;">Client Information</h3>
            <p><strong>Number of Clients:</strong> ${data.clientCount}</p>
          </div>
          `
              : ""
          }
          
          <div style="border: 1px solid #e5e5e5; padding: 20px; border-radius: 4px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1a1a1a;">Signup Details</h3>
            <p><strong>Source:</strong> ${data.source}</p>
            <p><strong>Signup Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Failed to send email notification:", error);
      return { success: false, error };
    }

    return { success: true, data: emailData };
  } catch (error) {
    console.error("Error sending email notification:", error);
    return { success: false, error };
  }
}

export async function sendProspectConfirmation(data: WaitlistSignupData) {
  try {
    const { data: emailData, error } = await resend.emails.send({
      from: "dataporto <hello@dataporto.com>",
      to: [data.email],
      subject: "Welcome to Dataporto - We'll be in touch soon!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #1a1a1a; border-bottom: 1px solid #e5e5e5; padding-bottom: 10px;">Welcome to Dataporto!</h2>
          
          <p>Hi ${data.name},</p>
          
          <p>Thank you for your interest in Dataporto! We're excited to help you streamline your data sharing processes.</p>
          
          <div style="border: 1px solid #e5e5e5; padding: 20px; border-radius: 4px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1a1a1a;">What's Next?</h3>
            <p>Our team will review your information and reach out within 24 hours to schedule your personalized call.</p>
          </div>
          
          <div style="border: 1px solid #e5e5e5; padding: 20px; border-radius: 4px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1a1a1a;">Your Information</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Company:</strong> ${data.company}</p>
            ${data.title ? `<p><strong>Title:</strong> ${data.title}</p>` : ""}
            ${
              data.clientCount
                ? `<p><strong>Client Range:</strong> ${data.clientCount}</p>`
                : ""
            }
          </div>
          
          <p>If you have any questions in the meantime, feel free to reply to this email.</p>
          
          <p>Best regards,<br>The Dataporto Team</p>
          
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 30px 0;">
          <p style="font-size: 12px; color: #666;">
            You're receiving this email because you signed up to talk to our team. 
            If you didn't sign up, please ignore this email.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Failed to send prospect confirmation:", error);
      return { success: false, error };
    }

    return { success: true, data: emailData };
  } catch (error) {
    console.error("Error sending prospect confirmation:", error);
    return { success: false, error };
  }
}
