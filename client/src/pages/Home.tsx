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
      
      {/* Video Controls Overlay */}
      <div className="relative z-10 flex items-end justify-start min-h-screen p-6 pb-8">
        <div className="flex items-center space-x-4 animate-fade-in">
          <button className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-smooth border border-white/20">
            <div className="w-0 h-0 border-l-[8px] border-r-0 border-b-[6px] border-t-[6px] border-l-white border-t-transparent border-b-transparent ml-1"></div>
          </button>
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-sm font-medium">00:44</span>
              <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="w-8 h-full bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;