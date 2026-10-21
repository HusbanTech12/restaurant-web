import { NextResponse } from "next/server";

/**
 * Stub chat endpoint for demo deploys.
 * Intentionally does not import OpenAI/Groq so production builds succeed
 * without OPENAI_API_KEY. Wire real AI later behind env checks if needed.
 */
export async function POST() {
  return NextResponse.json(
    { error: "Chat is disabled on this demo deploy." },
    { status: 503 },
  );
}

export async function GET() {
  return NextResponse.json(
    { status: "disabled", message: "Chat is disabled on this demo deploy." },
    { status: 503 },
  );
}
