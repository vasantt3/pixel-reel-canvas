import VideoPlayer from "@/components/VideoPlayer";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Video Background */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          {/* Placeholder for now - will be replaced with actual video */}
          <div className="w-full h-full bg-gradient-hero flex items-center justify-center">
            <div className="text-center animate-fade-in">
              <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mb-8 mx-auto">
                <div className="w-0 h-0 border-l-[20px] border-r-0 border-b-[12px] border-t-[12px] border-l-primary border-t-transparent border-b-transparent ml-2"></div>
              </div>
              <p className="text-muted-foreground text-lg">Showreel Video Placeholder</p>
              <p className="text-sm text-muted-foreground mt-2">Click to play when video is added</p>
            </div>
          </div>
          
          {/* Video Overlay */}
          <div className="absolute inset-0 video-overlay pointer-events-none" />
        </div>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 flex items-end justify-center min-h-screen p-6 pb-12">
        <div className="text-center animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Creative Director
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl">
            Crafting compelling visual stories through film, motion, and digital experiences
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;