import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const AnimeMusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Auto-play on mount (with user interaction requirement)
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          // Auto-play prevented, user needs to click
          setIsPlaying(false);
        });
      }
    };

    // Try to play after a short delay
    const timeout = setTimeout(playAudio, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="glass-anime rounded-full p-4 flex items-center gap-3 anime-glow-pink shadow-lg">
        <audio
          ref={audioRef}
          loop
          src="https://cdn.pixabay.com/download/audio/2022/03/10/audio_4a33f76c12.mp3"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        
        <Button
          onClick={togglePlay}
          size="icon"
          variant="ghost"
          className="rounded-full hover:bg-primary/20 transition-all duration-300"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-primary" />
          ) : (
            <Play className="w-5 h-5 text-primary" />
          )}
        </Button>

        <Button
          onClick={toggleMute}
          size="icon"
          variant="ghost"
          className="rounded-full hover:bg-primary/20 transition-all duration-300"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-primary" />
          ) : (
            <Volume2 className="w-5 h-5 text-primary" />
          )}
        </Button>

        <div className="text-sm font-body text-foreground/80 hidden md:block">
          Anime Soundtrack
        </div>
      </div>
    </div>
  );
};

export default AnimeMusicPlayer;
