import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { reservations } from "@/db/schema";
import { resend } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, date, time, guests, occasion, notes } = body;

    const [reservation] = await db.insert(reservations).values({
      userId: null,
      name,
      email,
      phone,
      date,
      time,
      guests,
      occasion,
      notes,
    }).returning();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Reservation request — Saffron Karachi Grill",
      html: `<p>Hi ${name},</p><p>Your reservation request for ${guests} guests on ${date} at ${time} has been received.</p><p>See you in Clifton.<br/>Saffron Karachi Grill</p>`,
    });

    return NextResponse.json(reservation, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Reservation failed" }, { status: 500 });
  }
}
