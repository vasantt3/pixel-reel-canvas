import { useEffect, useRef } from "react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  className?: string;
  onLoadedData?: () => void;
}

const VideoPlayer = ({
  src,
  poster,
  autoplay = false,
  muted = true,
  loop = false,
  className = "",
  onLoadedData
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (autoplay) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented
          console.log("Auto-play was prevented");
        });
      }
    }
  }, [autoplay]);

  return (
    <video
      ref={videoRef}
      className={`w-full h-full object-cover ${className}`}
      poster={poster}
      muted={muted}
      loop={loop}
      playsInline
      onLoadedData={onLoadedData}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;