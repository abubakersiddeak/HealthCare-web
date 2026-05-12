import { NextResponse } from "next/server";
import { transporter } from "@/lib/mailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();
    console.log({ name, email, message });
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Appointment Inquiry: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #2563eb;">New Message from Talukdar Clinic Site</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
       
          <p><strong>Message:</strong></p>
          <p style="background: #f9fafb; padding: 15px; border-radius: 8px;">${message}</p>
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
      { message: "Failed to send email." },
      { status: 500 },
    );
  }
}
