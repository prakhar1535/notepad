import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPEN_AI || "",
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages) {
      return NextResponse.json(
        { error: "Messages are required" },
        { status: 400 }
      );
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a chatbot for a note-making application. The user will search regarding the specific content they want to add in their notes, and you have to answer them accurately.",
        },
        ...messages,
      ],
      stream: false,
      temperature: 1,
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching OpenAI response:", error);
    return NextResponse.json(
      { error: "Failed to fetch response from OpenAI" },
      { status: 500 }
    );
  }
}
