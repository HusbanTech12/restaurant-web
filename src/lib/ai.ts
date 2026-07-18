import OpenAI from "openai";
import Groq from "groq-sdk";
import { db } from "@/lib/db";
import { menuItems, reservations } from "@/db/schema";
import { eq, and, like, or, sql } from "drizzle-orm";

export const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const tools: OpenAI.Chat.Completions.ChatCompletionTool[] = [
  {
    type: "function",
    function: {
      name: "get_menu",
      description: "Search the restaurant menu by keyword, category, price range, or dietary preference",
      parameters: {
        type: "object",
        properties: {
          category: { type: "string", description: "Category filter: Appetizers, Mains, Desserts, Beverages" },
          query: { type: "string", description: "Search keyword in name or description" },
          maxPrice: { type: "number", description: "Maximum price in dollars" },
          dietary: { type: "string", description: "Dietary filter: v (vegetarian), gf (gluten-free)" },
        },
      },
    },
  },
  {
    type: "function",
    function: {
      name: "check_availability",
      description: "Check reservation availability for a given date and time",
      parameters: {
        type: "object",
        properties: {
          date: { type: "string", description: "Date (YYYY-MM-DD)" },
          time: { type: "string", description: "Time (HH:MM)" },
          guests: { type: "number", description: "Number of guests" },
        },
        required: ["date", "time", "guests"],
      },
    },
  },
];

export async function getMenu(args: { category?: string; query?: string; maxPrice?: number; dietary?: string }) {
  const conditions = [];

  if (args.category && args.category !== "All") {
    conditions.push(eq(menuItems.category, args.category));
  }
  if (args.query) {
    conditions.push(or(
      like(sql`LOWER(${menuItems.name})`, `%${args.query.toLowerCase()}%`),
      like(sql`LOWER(${menuItems.description})`, `%${args.query.toLowerCase()}%`),
    ));
  }
  if (args.maxPrice) {
    conditions.push(sql`${menuItems.price} <= ${args.maxPrice}`);
  }
  if (args.dietary) {
    conditions.push(sql`${args.dietary} = ANY(${menuItems.dietary})`);
  }

  const items = conditions.length
    ? await db.select().from(menuItems).where(and(...conditions))
    : await db.select().from(menuItems);

  return items;
}

export async function checkAvailability(args: { date: string; time: string; guests: number }) {
  const existing = await db.select().from(reservations)
    .where(and(
      eq(reservations.date, args.date),
      eq(reservations.time, args.time),
      sql`${reservations.status} != 'cancelled'`,
    ));

  const bookedGuests = existing.reduce((sum, r) => sum + r.guests, 0);
  const totalCapacity = 80;
  const available = totalCapacity - bookedGuests >= args.guests;

  return { available, bookedGuests, totalCapacity, existingReservations: existing.length };
}
