import { NextResponse } from "next/server";
import type { ContactFormData } from "@/lib/types";

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, message } = body;

    // Validate the data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Here you would typically send an email using a service like:
    // - Resend (resend.com)
    // - SendGrid
    // - AWS SES
    // - Nodemailer with SMTP

    // For now, we'll just log it and return success
    // In production, integrate with your preferred email service
    console.log("Contact form submission:", { name, email, message });

    // Example with Resend (uncomment and configure when ready):
    /*
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Portfolio <noreply@yourdomain.com>',
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    */

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
