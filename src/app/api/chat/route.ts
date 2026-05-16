import { NextRequest, NextResponse } from "next/server";
import { ChatRequest } from "@/types";

const SYSTEM_PROMPTS: Record<string, string> = {
  chat: "You are a helpful, friendly student tutor. Answer academic questions clearly and concisely.",
  summarize: "Summarize the given text in clear bullet points. Highlight key concepts.",
  quiz: "Create 5 multiple choice questions (A, B, C, D) with the correct answer marked at the end.",
};

// Tries each model in order if previous one is rate limited
const FREE_MODELS = [
  "openrouter/free",
  "meta-llama/llama-3.3-8b-instruct:free",   // smaller = less rate limited
  "mistralai/mistral-7b-instruct:free",
  "google/gemma-3-12b-it:free",
];

export async function POST(request: NextRequest) {
  try {
    // ✅ Check API key first
    if (!process.env.OPENROUTER_API_KEY) {
      return NextResponse.json(
        { error: "API key missing. Check your .env.local file." },
        { status: 500 }
      );
    }

    const body: ChatRequest = await request.json();
    const { messages, feature, subject } = body;

    const systemPrompt = subject
      ? `${SYSTEM_PROMPTS[feature]} The subject is: ${subject}.`
      : SYSTEM_PROMPTS[feature];

    const formattedMessages = [
      { role: "system", content: systemPrompt },
      ...messages,
    ];

    // ✅ Try each model until one works
    for (const model of FREE_MODELS) {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "AI Student Assistant",
        },
        body: JSON.stringify({
          model,
          max_tokens: 1024,
          messages: formattedMessages,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const text = data.choices[0].message.content;
        console.log(`✅ Response from model: ${model}`);
        return NextResponse.json({ response: text });
      }

      if (response.status === 429) {
        console.warn(`⚠️ Rate limited on ${model}, trying next model...`);
        await new Promise((resolve) => setTimeout(resolve, 500)); // wait 500ms
        continue;
      }

      // Any other error — log and break
      const errorBody = await response.json().catch(() => ({}));
      console.error(`❌ Error from ${model}:`, errorBody);
      break;
    }

    return NextResponse.json(
      { error: "All free models are busy. Please wait a moment and try again." },
      { status: 429 }
    );

  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}