import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { contacts } from "@/db/schema";
import { resend } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    const [contact] = await db.insert(contacts).values({ name, email, subject, message }).returning();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "We received your message — Savory Bistro & Grill",
      html: `<p>Hi ${name},</p><p>Thanks for reaching out! We'll get back to you within 24 hours.</p><p>Your message: "${message}"</p>`,
    });

    return NextResponse.json(contact, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
