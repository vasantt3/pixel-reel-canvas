const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/api/placeholder-video.mp4" type="video/mp4" />
        {/* Fallback background when no video is available */}
        <div className="absolute inset-0 bg-gradient-hero" />
      </video>
    </div>
  );
};

export default Home;