import { NextResponse } from "next/server";
import OpenAI from "openai";
import { auth } from "@clerk/nextjs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!openai.apiKey) {
      return new NextResponse("Open API KEY not configured", { status: 500 });
    }
    if (!messages) {
      console.log("Message Empty");
      return new NextResponse("Messages  are required", { status: 400 });
    }

      const response =  await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        prompt: messages.join("\n"),
        response_format: "conversation",
      });

      return NextResponse.json(response.choices[0].text);
    } catch (error) {
      console.log("{Conversation_Error", error);
      return new NextResponse("Internal Error", { status: 500 });
    }
}
