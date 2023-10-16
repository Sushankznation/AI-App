import { NextResponse } from "next/server";
import OpenAI, { Configuration, OpenAIApi } from "openai";
import { auth } from "@clerk/nextjs";
// import {createChatCompletion} from 'openai'
const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});
const openai = new OpenAI(configuration);
export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!configuration.apiKey) {
      return new NextResponse("Open API KEY not configured", { status: 500 });
    }
    if (!messages) {
      return new NextResponse("Messages  are required", { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
    });
    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log("{Conversation_Error", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
