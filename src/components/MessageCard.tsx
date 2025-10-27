import { ReactNode } from "react";

interface MessageCardProps {
  children: ReactNode;
  delay: number;
  direction?: "up" | "left" | "right";
}

const MessageCard = ({ children, delay, direction = "up" }: MessageCardProps) => {
  const animationClass = 
    direction === "left" ? "animate-slide-in-left" :
    direction === "right" ? "animate-slide-in-right" :
    "animate-slide-in-up";

  return (
    <div
      className={`glass-anime rounded-2xl p-8 ${animationClass} hover:scale-105 transition-transform duration-500 relative group`}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Impact effect on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 rounded-2xl border-4 border-primary/50 animate-impact" />
      </div>

      {/* Glow effect */}
      <div className="absolute -inset-1 anime-gradient opacity-20 rounded-2xl blur-xl group-hover:opacity-40 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Corner sparkles */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-sparkle opacity-0 group-hover:opacity-100" style={{ animationDelay: "0.2s" }} />
      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondary rounded-full animate-sparkle opacity-0 group-hover:opacity-100" style={{ animationDelay: "0.4s" }} />
    </div>
  );
};

export default MessageCard;
