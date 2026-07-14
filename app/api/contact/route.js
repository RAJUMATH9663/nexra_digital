import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, phone, email, service, message } = data;

    // Configure the SMTP transport using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER || 'noreply@nexradigital.com',
      to: 'rajumthpt@gmail.com, nexradigital9@gmail.com',
      replyTo: email,
      subject: `New Lead from NEXRA DIGITAL: ${name} (${service})`,
      text: `
You have received a new contact form submission on NEXRA DIGITAL.

Name: ${name}
Phone: ${phone}
Email: ${email}
Service of Interest: ${service}

Message:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email.' }, { status: 500 });
  }
}
