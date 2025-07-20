import { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const Home = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    const video = document.querySelector('video') as HTMLVideoElement;
    if (video) {
      video.muted = !isMuted;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowOverlay(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-['Roboto',sans-serif] relative h-screen overflow-hidden">
      {/* Full screen video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted={isMuted}
          loop
          playsInline
        >
          <source src="/api/placeholder-video.mp4" type="video/mp4" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </video>
      </div>

      {/* Scroll-triggered overlay */}
      {showOverlay && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-30 flex items-center justify-center">
          <div className="bg-background/80 backdrop-blur-lg border border-border/20 rounded-2xl p-12 max-w-lg mx-6 shadow-2xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Let's talk</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Ready to bring your vision to life? Let's discuss your next project.
              </p>
              <a 
                href="mailto:ivasant3005@gmail.com"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating mute/unmute button */}
      <button
        onClick={toggleMute}
        className={`fixed w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20 z-40 ${
          showOverlay ? 'bottom-6 left-6' : 'bottom-6 right-6'
        }`}
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