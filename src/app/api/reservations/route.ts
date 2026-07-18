import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { reservations } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { resend } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { name, email, phone, date, time, guests, occasion, notes } = body;

    const [reservation] = await db.insert(reservations).values({
      userId: userId ?? null,
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
      subject: "Reservation Confirmed — Savory Bistro & Grill",
      html: `<p>Hi ${name},</p><p>Your reservation for ${guests} guests on ${date} at ${time} is confirmed.</p><p>See you soon!<br/>Savory Bistro & Grill</p>`,
    });

    return NextResponse.json(reservation, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Reservation failed" }, { status: 500 });
  }
}
