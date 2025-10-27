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
      text: "🎂 Happy Birthday to the multi-talented legend who wants to try everything except relaxing for 5 minutes 😆",
      icon: "✨",
    },
    {
      text: "Wishing a chaotic genius a birthday full of new experiments and half-finished projects 🧠✨",
      icon: "🌸",
    },
    {
      text: "May your birthday be as packed as your Google search history — \"how to learn everything in one day\" 😂",
      icon: "⚡",
    },
    {
      text: "Cheers to the only person who can start ten things at once and still find time to make memes about it 😎",
      icon: "💫",
    },
    {
      text: "Happy Birthday to the eternal child trapped in an adult's calendar 🎂🍼",
      icon: "🌟",
    },
    {
      text: "Hope your birthday goes smoother than your nervous laughter during serious talks 🫠",
      icon: "🎋",
    },
    {
      text: "May your birthday shine as bright as your kindness (and as loud as your sarcasm) 🌟",
      icon: "🎌",
    },
    {
      text: "Happy Birthday to a masterpiece still under creative editing 😝✨",
      icon: "🌺",
    },
    {
      text: "You're open-source goodness with a pinch of sass — perfect combo 💻🎂",
      icon: "💖",
    },
    {
      text: "Wishing the friendliest human Wi-Fi router a very happy birthday 🛜💞",
      icon: "🎪",
    },
    {
      text: "You could befriend a stone and make it smile — that's your superpower 🪨😆",
      icon: "🎨",
    },
    {
      text: "May your DMs stay full, your group chats stay active, and your friends never stop roasting you 🎈😂",
      icon: "🎭",
    },
    {
      text: "Birthday girl who turns strangers into besties — keep spreading that chaotic kindness 💫",
      icon: "🌈",
    },
    {
      text: "Even Siri would say \"Happy Birthday, bestie!\" today 🤖🎉",
      icon: "🎪",
    },
    {
      text: "Wishing you a birthday filled with love, laughter, and fewer \"what-am-I-doing-with-my-life\" moments 😅",
      icon: "🎯",
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
