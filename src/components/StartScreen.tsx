import { useState } from "react";
import { Sparkles, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen = ({ onStart }: StartScreenProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary/20 via-purple/20 to-secondary/20 backdrop-blur-sm">
      {/* Magical circle background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="w-96 h-96 rounded-full border-4 border-primary/30 animate-spin" style={{ animationDuration: "20s" }}>
          <div className="absolute inset-8 rounded-full border-4 border-secondary/30 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
          <div className="absolute inset-16 rounded-full border-4 border-purple/30 animate-spin" style={{ animationDuration: "10s" }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Title with magical effects */}
        <div className="mb-8 animate-slide-in-up">
          <div className="relative inline-block mb-4">
            <h1 className="font-display text-6xl md:text-8xl font-bold text-transparent bg-clip-text anime-gradient anime-text-glow">
              NIVVI
            </h1>
            <div className="absolute -top-6 -right-8 animate-rotate-float">
              <Star className="w-10 h-10 text-accent" fill="currentColor" />
            </div>
            <div className="absolute -bottom-4 -left-8 animate-rotate-float" style={{ animationDelay: "1s" }}>
              <Heart className="w-8 h-8 text-primary" fill="currentColor" />
            </div>
          </div>

          <h2 className="font-body text-2xl md:text-4xl font-semibold text-foreground mb-4 animate-slide-in-up" style={{ animationDelay: "0.3s" }}>
            Birthday Heroine Story
          </h2>
          
          <p className="font-body text-lg md:text-xl text-foreground/70 max-w-md mx-auto animate-slide-in-up" style={{ animationDelay: "0.6s" }}>
            A magical journey celebrating an incredible friend 🌸✨
          </p>
        </div>

        {/* Magical start button */}
        <div className="animate-slide-in-up" style={{ animationDelay: "0.9s" }}>
          <div className="relative inline-block">
            {/* Glow effect */}
            <div className={`absolute -inset-4 anime-gradient-sunset opacity-30 rounded-full blur-2xl transition-all duration-500 ${isHovered ? "opacity-60 scale-110" : ""}`} />
            
            <Button
              onClick={onStart}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative z-10 glass-anime px-12 py-8 text-xl md:text-2xl font-display font-bold rounded-full border-2 border-primary/50 hover:border-primary transition-all duration-500 hover:scale-110 group"
            >
              <span className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 animate-sparkle" />
                <span className="anime-text-glow">Begin the Story</span>
                <Sparkles className="w-6 h-6 animate-sparkle" style={{ animationDelay: "0.5s" }} />
              </span>

              {/* Button sparkles */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-accent rounded-full animate-sparkle opacity-0 group-hover:opacity-100" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary rounded-full animate-sparkle opacity-0 group-hover:opacity-100" style={{ animationDelay: "0.3s" }} />
              <div className="absolute -top-2 -left-2 w-2 h-2 bg-secondary rounded-full animate-sparkle opacity-0 group-hover:opacity-100" style={{ animationDelay: "0.6s" }} />
              <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-purple rounded-full animate-sparkle opacity-0 group-hover:opacity-100" style={{ animationDelay: "0.9s" }} />
            </Button>
          </div>

          <p className="font-body text-sm text-foreground/50 mt-6 animate-bounce">
            Click to start the anime opening ✨
          </p>
        </div>

        {/* Floating magical elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full animate-sparkle" style={{ animationDelay: "0s" }} />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-secondary rounded-full animate-sparkle" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-accent rounded-full animate-sparkle" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-purple rounded-full animate-sparkle" style={{ animationDelay: "3s" }} />
      </div>
    </div>
  );
};

export default StartScreen;
