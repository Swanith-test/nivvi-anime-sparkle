import { useEffect, useState } from "react";
import AnimeBackground from "@/components/AnimeBackground";
import SakuraPetals from "@/components/SakuraPetals";
import MessageCard from "@/components/MessageCard";
import AnimeMusicPlayer from "@/components/AnimeMusicPlayer";
import { Sparkles, Heart } from "lucide-react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const messages = [
    {
      text: "Happy Birthday, Nivvi — the multitasking legend who tries everything at least once!",
      icon: "✨",
      delay: 0.5,
      direction: "up" as const,
    },
    {
      text: "Aged like fine wine 🍷 but still behaves like a toddler with extra sugar!",
      icon: "🌸",
      delay: 1,
      direction: "left" as const,
    },
    {
      text: "The perfect mix of daring and timid — a paradox wrapped in chaos 🤭.",
      icon: "⚡",
      delay: 1.5,
      direction: "right" as const,
    },
    {
      text: "Nervous like me sometimes… but still slaying it in style 😎.",
      icon: "💫",
      delay: 2,
      direction: "up" as const,
    },
    {
      text: "You've got a character so strong even AI models would admire your personality 😌.",
      icon: "🌟",
      delay: 2.5,
      direction: "left" as const,
    },
    {
      text: "So friendly that introverts might actually consider socializing 👀.",
      icon: "🎋",
      delay: 3,
      direction: "right" as const,
    },
    {
      text: "Laser focus when needed — but only after ten distractions 😆.",
      icon: "🎌",
      delay: 3.5,
      direction: "up" as const,
    },
    {
      text: "You're basically a walking talent show, just waiting for a commercial break.",
      icon: "🌺",
      delay: 4,
      direction: "up" as const,
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Anime Background */}
      <AnimeBackground />
      
      {/* Sakura Petals */}
      <SakuraPetals />
      
      {/* Music Player */}
      <AnimeMusicPlayer />

      {/* Main Content */}
      <main className="relative z-20 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"
          }`}
        >
          <div className="inline-block mb-6">
            <div className="relative">
              <h1 className="font-display text-7xl md:text-9xl font-bold text-transparent bg-clip-text anime-gradient anime-text-glow">
                NIVVI
              </h1>
              <div className="absolute -top-6 -right-6 animate-rotate-float">
                <Sparkles className="w-12 h-12 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-8 animate-rotate-float" style={{ animationDelay: "2s" }}>
                <Heart className="w-10 h-10 text-accent" fill="currentColor" />
              </div>
            </div>
          </div>

          <h2 className="font-body text-3xl md:text-5xl font-semibold text-foreground mb-4 animate-slide-in-up" style={{ animationDelay: "0.3s" }}>
            A Cinematic Birthday Tribute
          </h2>
          
          <p className="font-body text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto animate-slide-in-up" style={{ animationDelay: "0.6s" }}>
            To an incredible friend who makes life feel like an anime adventure! 🎉
          </p>

          {/* Speed lines effect */}
          <div className="absolute left-0 top-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 animate-speed-line" style={{ animationDelay: "1s" }} />
        </div>

        {/* Messages Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {messages.map((message, index) => (
            <MessageCard
              key={index}
              delay={message.delay}
              direction={message.direction}
            >
              <div className="flex items-start gap-4">
                <span className="text-5xl flex-shrink-0 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                  {message.icon}
                </span>
                <p className="font-body text-lg md:text-xl text-foreground leading-relaxed">
                  {message.text}
                </p>
              </div>
            </MessageCard>
          ))}
        </div>

        {/* Outro Section */}
        <div
          className="text-center animate-slide-in-up"
          style={{ animationDelay: "5s" }}
        >
          <div className="glass-anime rounded-3xl p-12 inline-block relative group">
            <div className="absolute -inset-2 anime-gradient-sunset opacity-30 rounded-3xl blur-2xl group-hover:opacity-50 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <p className="font-display text-3xl md:text-4xl text-foreground mb-4 anime-text-glow">
                To the incredible Nivvi
              </p>
              <p className="font-body text-xl md:text-2xl text-foreground/80">
                A friend who makes everything more kawaii and fun! 🎉💖✨
              </p>
            </div>

            {/* Floating sparkles around outro */}
            <div className="absolute -top-4 left-1/4 w-3 h-3 bg-primary rounded-full animate-sparkle" style={{ animationDelay: "0s" }} />
            <div className="absolute -top-2 right-1/4 w-2 h-2 bg-secondary rounded-full animate-sparkle" style={{ animationDelay: "0.5s" }} />
            <div className="absolute -bottom-4 left-1/3 w-3 h-3 bg-accent rounded-full animate-sparkle" style={{ animationDelay: "1s" }} />
            <div className="absolute -bottom-2 right-1/3 w-2 h-2 bg-purple rounded-full animate-sparkle" style={{ animationDelay: "1.5s" }} />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-12 animate-bounce">
          <div className="inline-block text-foreground/50 font-body text-sm">
            Scroll to experience the full anime magic ✨
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
