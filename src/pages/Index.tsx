import { useState } from "react";
import AnimeBackground from "@/components/AnimeBackground";
import SakuraPetals from "@/components/SakuraPetals";
import AnimeMusicPlayer from "@/components/AnimeMusicPlayer";
import StartScreen from "@/components/StartScreen";
import MessageSequence from "@/components/MessageSequence";
import OutroScene from "@/components/OutroScene";

type Stage = "start" | "sequence" | "outro";

const Index = () => {
  const [stage, setStage] = useState<Stage>("start");

  const messages = [
    {
      text: "Happy Birthday, Nivvi — the multitasking legend who tries everything at least once!",
      icon: "✨",
    },
    {
      text: "Aged like fine wine 🍷 but still behaves like a toddler with extra sugar!",
      icon: "🌸",
    },
    {
      text: "The perfect mix of daring and timid — a paradox wrapped in chaos 🤭.",
      icon: "⚡",
    },
    {
      text: "Nervous like me sometimes… but still slaying it in style 😎.",
      icon: "💫",
    },
    {
      text: "You've got a character so strong even AI models would admire your personality 😌.",
      icon: "🌟",
    },
    {
      text: "So friendly that introverts might actually consider socializing 👀.",
      icon: "🎋",
    },
    {
      text: "Laser focus when needed — but only after ten distractions 😆.",
      icon: "🎌",
    },
    {
      text: "You're basically a walking talent show, just waiting for a commercial break.",
      icon: "🌺",
    },
  ];

  const handleStart = () => {
    setStage("sequence");
  };

  const handleSequenceComplete = () => {
    setStage("outro");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Anime Background - always visible */}
      <AnimeBackground />
      
      {/* Sakura Petals - always falling */}
      <SakuraPetals />
      
      {/* Music Player - always accessible */}
      <AnimeMusicPlayer />

      {/* Stage-based rendering */}
      {stage === "start" && <StartScreen onStart={handleStart} />}
      
      {stage === "sequence" && (
        <MessageSequence messages={messages} onComplete={handleSequenceComplete} />
      )}
      
      {stage === "outro" && <OutroScene />}
    </div>
  );
};

export default Index;
