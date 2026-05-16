"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Loader2 } from "lucide-react";
import { Feature, Message } from "@/types";

const SUBJECTS = [
  "Mathematics", "Physics", "Chemistry", "Biology",
  "History", "Literature", "Computer Science", "Economics",
];

const PLACEHOLDERS: Record<Feature, string> = {
  chat: "Ask me anything... e.g. Explain Newton's 3rd law",
  summarize: "Paste your notes or text here to summarize...",
  quiz: "Enter a topic to generate quiz questions... e.g. World War II",
};

const FEATURE_LABELS: Record<Feature, string> = {
  chat: "Chat Tutor",
  summarize: "Note Summarizer",
  quiz: "Quiz Generator",
};

interface ChatWindowProps {
  feature: Feature;
}

export default function ChatWindow({ feature }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([]);
    setInput("");
  }, [feature]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages, feature, subject }),
      });

      const data = await res.json();
      const assistantMessage: Message = {
        role: "assistant",
        content: data.response || data.error || "Something went wrong.",
      };
      setMessages([...updatedMessages, assistantMessage]);
    } catch {
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: "Network error. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 h-full overflow-hidden">

      {/* Header */}
      <div className="p-3 md:p-4 border-b border-gray-200 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-12 md:mt-0">
        <div>
          <h2 className="font-semibold text-gray-800 text-base md:text-lg">
            {FEATURE_LABELS[feature]}
          </h2>
          <p className="text-xs text-gray-500 hidden sm:block">
            {PLACEHOLDERS[feature]}
          </p>
        </div>
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full sm:w-auto"
        >
          <option value="">All Subjects</option>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4 bg-gray-50">
        {messages.length === 0 && (
          <div className="flex items-center justify-center h-full text-gray-400 text-sm text-center px-4">
            Start a conversation above 👆
          </div>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] md:max-w-[75%] p-3 rounded-2xl text-sm whitespace-pre-wrap leading-relaxed ${
                msg.role === "user"
                  ? "bg-indigo-600 text-white rounded-tr-none"
                  : "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none p-3 shadow-sm">
              <Loader2 size={18} className="animate-spin text-indigo-500" />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="p-3 md:p-4 bg-white border-t border-gray-200">
        <div className="flex gap-2 items-end">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
            placeholder={PLACEHOLDERS[feature]}
            rows={2}
            className="flex-1 resize-none border border-gray-300 rounded-xl px-3 md:px-4 py-2 md:py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white p-2.5 md:p-3 rounded-xl transition-colors flex-shrink-0"
          >
            <Send size={18} />
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-1 hidden sm:block">
          Press Enter to send, Shift+Enter for new line
        </p>
      </div>
    </div>
  );
}