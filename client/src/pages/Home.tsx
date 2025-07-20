const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-hero">
      {/* Full screen hero content - no scrolling needed */}
      <div className="text-center animate-fade-in px-6">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Cinematic
            <span className="block text-primary">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Creating compelling visual stories through film and video production
          </p>
        </div>
        
        {/* Video preview placeholder */}
        <div className="w-64 h-64 bg-primary/10 rounded-full flex items-center justify-center mb-8 mx-auto border-2 border-primary/20 hover:border-primary/40 transition-smooth cursor-pointer">
          <div className="w-0 h-0 border-l-[32px] border-r-0 border-b-[20px] border-t-[20px] border-l-primary border-t-transparent border-b-transparent ml-2"></div>
        </div>
        
        <p className="text-muted-foreground">
          Watch showreel • Explore work • Get in touch
        </p>
      </div>
    </div>
  );
};

export default Home;