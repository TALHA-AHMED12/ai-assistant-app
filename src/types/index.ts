export type Feature = "chat" | "summarize" | "quiz";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

export interface ChatRequest {
  messages: Message[];
  feature: Feature;
  subject?: string;
}