"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import ChatWindow from "@/components/ChatWindow";
import { Feature } from "@/types";

export default function Home() {
  const [activeFeature, setActiveFeature] = useState<Feature>("chat");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleFeatureChange = (feature: Feature) => {
    setActiveFeature(feature);
    setSidebarOpen(false); // auto close on mobile
  };

  return (
    <main className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar
        activeFeature={activeFeature}
        onFeatureChange={handleFeatureChange}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen((prev) => !prev)}
      />
      <ChatWindow feature={activeFeature} />
    </main>
  );
}