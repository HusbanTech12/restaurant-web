import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { orders, orderItems } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { resend } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    const body = await req.json();
    const { customerName, customerEmail, customerPhone, items } = body;

    if (!items?.length) {
      return NextResponse.json({ error: "Order must have items" }, { status: 400 });
    }

    const total = items.reduce((sum: number, i: { price: number; quantity: number }) => sum + i.price * i.quantity, 0);

    const [order] = await db.insert(orders).values({
      userId: userId ?? null,
      customerName,
      customerEmail,
      customerPhone,
      total: total.toFixed(2),
    }).returning();

    for (const item of items) {
      await db.insert(orderItems).values({
        orderId: order.id,
        menuItemId: item.menuItemId,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      });
    }

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: customerEmail,
      subject: "Order Confirmed — Savory Bistro & Grill",
      html: `<p>Hi ${customerName},</p><p>Your order ($${total.toFixed(2)}) has been received.</p><p>We'll notify you when it's ready.</p>`,
    });

    return NextResponse.json(order, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Order failed" }, { status: 500 });
  }
}
