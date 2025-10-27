import { useEffect, useState } from "react";
import { Heart, Sparkles, Star } from "lucide-react";

const OutroScene = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      {/* Magical entrance effect */}
      <div className={`absolute inset-0 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        {/* Radial burst effect */}
        <div className="absolute inset-0 anime-gradient-sunset opacity-20 animate-pulse" />
        
        {/* Circular reveal */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[200vmax] h-[200vmax] rounded-full border-8 border-primary/30 animate-impact" style={{ animationDuration: "2s" }} />
        </div>
      </div>

      {/* Content */}
      <div
        className={`relative z-10 w-full max-w-5xl mx-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      >
        {/* Main card */}
        <div className="glass-anime rounded-[3rem] p-12 md:p-20 relative overflow-hidden border-4 border-primary/40">
          {/* Animated background gradient */}
          <div className="absolute -inset-4 anime-gradient opacity-30 blur-3xl animate-pulse" />

          {/* Floating hearts */}
          <div className="absolute inset-0 overflow-hidden">
            <Heart className="absolute top-[10%] left-[15%] w-8 h-8 text-primary/30 animate-float" fill="currentColor" />
            <Heart className="absolute top-[30%] right-[20%] w-6 h-6 text-accent/30 animate-float" fill="currentColor" style={{ animationDelay: "1s" }} />
            <Heart className="absolute bottom-[20%] left-[25%] w-7 h-7 text-secondary/30 animate-float" fill="currentColor" style={{ animationDelay: "2s" }} />
            <Heart className="absolute bottom-[35%] right-[15%] w-5 h-5 text-purple/30 animate-float" fill="currentColor" style={{ animationDelay: "3s" }} />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Main title */}
            <div className="mb-8">
              <div className="relative inline-block mb-6">
                <h2 className="font-display text-5xl md:text-7xl font-bold text-transparent bg-clip-text anime-gradient anime-text-glow">
                  To the incredible
                </h2>
                <div className="absolute -top-6 -right-8 animate-rotate-float">
                  <Star className="w-12 h-12 text-accent" fill="currentColor" />
                </div>
                <div className="absolute -bottom-4 -left-8 animate-rotate-float" style={{ animationDelay: "1.5s" }}>
                  <Sparkles className="w-10 h-10 text-primary" />
                </div>
              </div>

              <h1 className="font-display text-7xl md:text-9xl font-bold text-transparent bg-clip-text anime-gradient-sunset animate-slide-in-up mb-8">
                NIVVI
              </h1>
            </div>

            {/* Message */}
            <p className="font-body text-2xl md:text-4xl text-foreground font-semibold leading-relaxed mb-4 animate-slide-in-up" style={{ animationDelay: "0.3s" }}>
              A friend who makes everything
            </p>
            <p className="font-body text-3xl md:text-5xl text-transparent bg-clip-text anime-gradient font-bold anime-text-glow mb-8 animate-slide-in-up" style={{ animationDelay: "0.6s" }}>
              more kawaii and fun! 🎉💖✨
            </p>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-4 mb-8 animate-slide-in-up" style={{ animationDelay: "0.9s" }}>
              <div className="h-1 w-20 anime-gradient rounded-full" />
              <Sparkles className="w-6 h-6 text-primary animate-sparkle" />
              <div className="h-1 w-20 anime-gradient rounded-full" />
            </div>

            {/* Final message */}
            <p className="font-body text-xl md:text-2xl text-foreground/80 italic animate-slide-in-up" style={{ animationDelay: "1.2s" }}>
              May your year be filled with anime adventures,
              <br />
              magical moments, and endless joy! 🌸⚡💫
            </p>
          </div>

          {/* Corner sparkles - more dramatic */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full animate-sparkle" />
          <div className="absolute -top-4 -right-4 w-6 h-6 bg-secondary rounded-full animate-sparkle" style={{ animationDelay: "0.5s" }} />
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-sparkle" style={{ animationDelay: "1s" }} />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-purple rounded-full animate-sparkle" style={{ animationDelay: "1.5s" }} />

          {/* Edge sparkles */}
          <div className="absolute top-1/4 -left-3 w-4 h-4 bg-primary rounded-full animate-sparkle" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/4 -right-3 w-4 h-4 bg-secondary rounded-full animate-sparkle" style={{ animationDelay: "2.5s" }} />
          <div className="absolute bottom-1/4 -left-3 w-4 h-4 bg-accent rounded-full animate-sparkle" style={{ animationDelay: "3s" }} />
          <div className="absolute bottom-1/4 -right-3 w-4 h-4 bg-purple rounded-full animate-sparkle" style={{ animationDelay: "3.5s" }} />
        </div>

        {/* Floating magical symbols */}
        <div className="absolute -top-12 left-1/4 text-6xl animate-rotate-float">✨</div>
        <div className="absolute -top-8 right-1/4 text-5xl animate-rotate-float" style={{ animationDelay: "1s" }}>🌸</div>
        <div className="absolute -bottom-12 left-1/3 text-6xl animate-rotate-float" style={{ animationDelay: "2s" }}>⚡</div>
        <div className="absolute -bottom-8 right-1/3 text-5xl animate-rotate-float" style={{ animationDelay: "3s" }}>💫</div>
      </div>

      {/* Final sparkle burst */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full animate-sparkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default OutroScene;
