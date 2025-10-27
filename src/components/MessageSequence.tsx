import { useEffect, useState } from "react";
import { Sparkles, Star, Heart, Zap } from "lucide-react";

interface Message {
  text: string;
  icon: string;
}

interface MessageSequenceProps {
  messages: Message[];
  onComplete: () => void;
}

const MessageSequence = ({ messages, onComplete }: MessageSequenceProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Show first message
    const showTimer = setTimeout(() => {
      setShowMessage(true);
    }, 500);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (currentIndex < messages.length) {
      // Display current message for 4 seconds
      const timer = setTimeout(() => {
        if (currentIndex < messages.length - 1) {
          // Transition to next message
          setIsTransitioning(true);
          setShowMessage(false);

          setTimeout(() => {
            setCurrentIndex(currentIndex + 1);
            setIsTransitioning(false);
            setShowMessage(true);
          }, 800);
        } else {
          // Last message - transition to outro
          setTimeout(() => {
            onComplete();
          }, 2000);
        }
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, messages.length, onComplete]);

  const currentMessage = messages[currentIndex];

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      {/* Transition effect - magical transformation */}
      {isTransitioning && (
        <div className="absolute inset-0 z-50">
          {/* Diagonal wipe */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple to-secondary animate-slide-in-right" style={{ animationDuration: "0.8s" }} />
          
          {/* Sparkle burst */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <Star className="w-32 h-32 text-white animate-spin" fill="currentColor" style={{ animationDuration: "0.8s" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="w-16 h-16 text-accent animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Message display */}
      <div
        className={`relative w-full max-w-4xl mx-4 transition-all duration-500 ${
          showMessage ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        {/* Background glow */}
        <div className="absolute -inset-8 anime-gradient opacity-20 rounded-3xl blur-3xl" />

        {/* Message card */}
        <div className="relative glass-anime rounded-3xl p-8 md:p-16 border-2 border-primary/30">
          {/* Impact circles */}
          <div className="absolute inset-0 rounded-3xl">
            <div className="absolute inset-0 rounded-3xl border-4 border-accent/50 animate-impact" />
            <div className="absolute inset-4 rounded-3xl border-4 border-secondary/50 animate-impact" style={{ animationDelay: "0.2s" }} />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Icon */}
            <div className="mb-6 inline-block">
              <div className="relative">
                <span className="text-7xl md:text-9xl animate-float">{currentMessage.icon}</span>
                <div className="absolute -top-4 -right-4 animate-rotate-float">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -bottom-4 -left-4 animate-rotate-float" style={{ animationDelay: "1s" }}>
                  <Zap className="w-6 h-6 text-accent" fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Text */}
            <p className="font-body text-2xl md:text-4xl text-foreground leading-relaxed font-semibold anime-text-glow">
              {currentMessage.text}
            </p>
          </div>

          {/* Corner sparkles */}
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-primary rounded-full animate-sparkle" />
          <div className="absolute -top-3 -right-3 w-4 h-4 bg-secondary rounded-full animate-sparkle" style={{ animationDelay: "0.5s" }} />
          <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-accent rounded-full animate-sparkle" style={{ animationDelay: "1s" }} />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-purple rounded-full animate-sparkle" style={{ animationDelay: "1.5s" }} />
        </div>

        {/* Progress indicator */}
        <div className="mt-8 flex justify-center gap-2">
          {messages.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? "w-12 bg-primary"
                  : index < currentIndex
                  ? "w-8 bg-secondary"
                  : "w-2 bg-foreground/20"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Speed lines */}
      {showMessage && (
        <>
          <div className="absolute top-1/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30 animate-speed-line" />
          <div className="absolute top-2/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30 animate-speed-line" style={{ animationDelay: "0.3s" }} />
        </>
      )}
    </div>
  );
};

export default MessageSequence;
