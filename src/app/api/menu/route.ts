import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { menuItems } from "@/db/schema";

export async function GET() {
  try {
    const items = await db.select().from(menuItems);
    const categories = [...new Set(items.map((i) => i.category))];
    return NextResponse.json({ items, categories: ["All", ...categories] });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch menu" }, { status: 500 });
  }
}
