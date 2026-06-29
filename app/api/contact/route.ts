import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// In-memory rate limiter: 3 submissions per IP per 10 minutes
const rateMap = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQS = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (rateMap.get(ip) ?? []).filter(t => now - t < WINDOW_MS);
  if (hits.length >= MAX_REQS) return true;
  rateMap.set(ip, [...hits, now]);
  return false;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests.' }, { status: 429 });
  }

  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  const appName = process.env.APP_NAME ?? 'Portfolio';

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"${appName}" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO,
    replyTo: email,
    subject: `[${appName}] New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <div style="font-family:sans-serif;max-width:520px">
        <h2 style="color:#6366F1;margin-bottom:4px">New message via ${appName}</h2>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:12px 0"/>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <p style="background:#f9fafb;padding:12px;border-radius:8px;white-space:pre-wrap">${message}</p>
      </div>
    `,
  });

  return NextResponse.json({ success: true });
}
