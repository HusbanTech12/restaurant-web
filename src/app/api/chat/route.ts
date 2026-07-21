import { NextResponse } from "next/server";
import { openai, tools, getMenu, checkAvailability } from "@/lib/ai";

const systemPrompt = `You are a helpful restaurant concierge for Savory Bistro & Grill.
Help users with: menu recommendations (dietary, price, taste), reservation availability, and general questions about the restaurant.
Be friendly and concise. If asked about the menu, use the get_menu tool. If asked about reservations, use the check_availability tool.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "system", content: systemPrompt }, ...messages],
      tools,
      tool_choice: "auto",
    });

    const msg = completion.choices[0].message;

    if (msg.tool_calls) {
      for (const call of msg.tool_calls) {
        if (call.type !== "function") continue;
        const args = JSON.parse(call.function.arguments);
        let result;

        switch (call.function.name) {
          case "get_menu":
            result = await getMenu(args);
            break;
          case "check_availability":
            result = await checkAvailability(args);
            break;
        }

        messages.push(msg, {
          role: "tool",
          tool_call_id: call.id,
          content: JSON.stringify(result),
        });
      }

      const second = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{ role: "system", content: systemPrompt }, ...messages],
      });

      return NextResponse.json(second.choices[0].message);
    }

    return NextResponse.json(msg);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Chat failed" }, { status: 500 });
  }
}
