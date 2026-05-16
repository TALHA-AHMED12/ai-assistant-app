"use client";

import { BookOpen, MessageCircle, FileText, HelpCircle, X, Menu } from "lucide-react";
import { Feature } from "@/types";

interface SidebarProps {
  activeFeature: Feature;
  onFeatureChange: (feature: Feature) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const features: {
  id: Feature;
  label: string;
  icon: React.ReactNode;
  description: string;
}[] = [
  { id: "chat", label: "Chat Tutor", icon: <MessageCircle size={20} />, description: "Ask any question" },
  { id: "summarize", label: "Summarizer", icon: <FileText size={20} />, description: "Summarize your notes" },
  { id: "quiz", label: "Quiz Generator", icon: <HelpCircle size={20} />, description: "Generate practice quizzes" },
];

export default function Sidebar({ activeFeature, onFeatureChange, isOpen, onToggle }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay background */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-indigo-900 text-white flex flex-col p-4 gap-2 z-30
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0 md:z-auto
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6 mt-2">
          <div className="flex items-center gap-2">
            <BookOpen size={28} className="text-indigo-300" />
            <span className="text-xl font-bold">StudyAI</span>
          </div>
          {/* Close button - mobile only */}
          <button onClick={onToggle} className="md:hidden text-indigo-300 hover:text-white">
            <X size={22} />
          </button>
        </div>

        <p className="text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-2">
          Features
        </p>

        {features.map((f) => (
          <button
            key={f.id}
            onClick={() => {
              onFeatureChange(f.id);
              onToggle(); // close on mobile after selecting
            }}
            className={`flex items-center gap-3 p-3 rounded-lg text-left transition-all ${
              activeFeature === f.id
                ? "bg-indigo-600 text-white"
                : "text-indigo-200 hover:bg-indigo-800"
            }`}
          >
            {f.icon}
            <div>
              <p className="text-sm font-medium">{f.label}</p>
              <p className="text-xs opacity-70">{f.description}</p>
            </div>
          </button>
        ))}
      </aside>

      {/* Mobile top navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-10 bg-indigo-900 text-white flex items-center gap-3 px-4 py-3 shadow-md">
        <button onClick={onToggle} className="text-indigo-300 hover:text-white">
          <Menu size={24} />
        </button>
        <div className="flex items-center gap-2">
          <BookOpen size={22} className="text-indigo-300" />
          <span className="text-lg font-bold">StudyAI</span>
        </div>
      </div>
    </>
  );
}