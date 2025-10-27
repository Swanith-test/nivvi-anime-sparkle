const AnimeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Anime gradient sky */}
      <div className="absolute inset-0 anime-gradient-sky" />
      
      {/* Parallax clouds - layer 1 (far) */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-[10%] left-[5%] w-64 h-32 bg-white/40 rounded-full blur-3xl animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-[20%] right-[10%] w-80 h-40 bg-white/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[40%] left-[15%] w-72 h-36 bg-white/35 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Parallax clouds - layer 2 (near) */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-[30%] right-[20%] w-96 h-48 bg-white/50 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[50%] left-[25%] w-80 h-40 bg-white/45 rounded-full blur-2xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      {/* Sparkle effects */}
      <div className="absolute inset-0">
        <div className="absolute top-[15%] left-[30%] w-2 h-2 bg-primary rounded-full animate-sparkle" style={{ animationDelay: "0s" }} />
        <div className="absolute top-[25%] right-[40%] w-3 h-3 bg-secondary rounded-full animate-sparkle" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[45%] left-[60%] w-2 h-2 bg-accent rounded-full animate-sparkle" style={{ animationDelay: "3s" }} />
        <div className="absolute top-[65%] right-[20%] w-3 h-3 bg-purple rounded-full animate-sparkle" style={{ animationDelay: "4.5s" }} />
        <div className="absolute top-[35%] left-[45%] w-2 h-2 bg-primary rounded-full animate-sparkle" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[55%] right-[55%] w-2 h-2 bg-secondary rounded-full animate-sparkle" style={{ animationDelay: "3.5s" }} />
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30" />
    </div>
  );
};

export default AnimeBackground;
