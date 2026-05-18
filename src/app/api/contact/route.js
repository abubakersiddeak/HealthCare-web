import { NextResponse } from "next/server";
import { transporter } from "@/lib/mailer";

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, date, department, message, type } = data;

    const isAppointment = type === "appointment";
    const subject = isAppointment
      ? `📅 New Appointment Request: ${name}`
      : `✉️ New Contact Message: ${name}`;

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: subject,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; color: #1a202c;">
          <div style="background-color: #2563eb; padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Talukder Clinic & Nursing Home</h1>
            <p style="color: #bfdbfe; margin-top: 10px; font-size: 16px;">New ${isAppointment ? "Appointment Request" : "Contact Inquiry"}</p>
          </div>
          
          <div style="padding: 30px; background-color: #ffffff;">
            <div style="margin-bottom: 25px; padding-bottom: 15px; border-bottom: 1px dashed #e2e8f0;">
              <h2 style="color: #2d3748; font-size: 18px; margin-bottom: 15px;">Sender Details</h2>
              <p style="margin: 8px 0;"><strong style="color: #4a5568;">Name:</strong> ${name}</p>
              <p style="margin: 8px 0;"><strong style="color: #4a5568;">Email:</strong> ${email}</p>
              ${phone ? `<p style="margin: 8px 0;"><strong style="color: #4a5568;">Phone:</strong> ${phone}</p>` : ""}
            </div>

            ${
              isAppointment
                ? `
            <div style="margin-bottom: 25px; padding: 20px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #10b981;">
              <h2 style="color: #2d3748; font-size: 18px; margin-top: 0; margin-bottom: 15px;">Appointment Information</h2>
              <p style="margin: 8px 0;"><strong style="color: #4a5568;">Department:</strong> ${department}</p>
              <p style="margin: 8px 0;"><strong style="color: #4a5568;">Preferred Date:</strong> ${new Date(date).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
            </div>
            `
                : ""
            }

            <div style="margin-bottom: 20px;">
              <h2 style="color: #2d3748; font-size: 18px; margin-bottom: 15px;">Message</h2>
              <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; color: #4a5568; line-height: 1.6; border: 1px solid #f3f4f6;">
                ${message ? message.replace(/\n/g, "<br>") : "No message provided."}
              </div>
            </div>
          </div>

          <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0; font-size: 14px; color: #718096;">
              This inquiry was sent from the Talukder Clinic website contact form.
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json(
      { message: "Failed to send email. " + error.message },
      { status: 500 },
    );
  }
}
