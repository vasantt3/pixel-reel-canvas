import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const Home = () => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    const video = document.querySelector('video') as HTMLVideoElement;
    if (video) {
      video.muted = !isMuted;
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted={isMuted}
        loop
        playsInline
      >
        <source src="/api/placeholder-video.mp4" type="video/mp4" />
        {/* Fallback background when no video is available */}
        <div className="absolute inset-0 bg-gradient-hero" />
      </video>
      
      {/* Mute/Unmute button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-smooth border border-white/20 z-10"
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-white" />
        ) : (
          <Volume2 className="w-5 h-5 text-white" />
        )}
      </button>
    </div>
  );
};

export default Home;