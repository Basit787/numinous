import ENV from "@/lib/env";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstName, lastName, email, message } = body.data;

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: ENV.EUser,
      pass: ENV.EPass,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${email}>`,
      to: ENV.EUser,
      subject: "New Contact Form Submission",
      text: message,
      html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #0056b3;">📩 New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Message:</strong></p>
      <div style="padding: 10px; background-color: #f4f4f4; border-left: 4px solid #0056b3;">
        <p style="margin: 0;">${message.replace(/\n/g, "<br/>")}</p>
      </div>
    </div>
            `,
    });
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send the email", error },
      { status: 400 }
    );
  }
}
