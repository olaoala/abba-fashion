import { useEffect } from "react";
import v1 from '../Assets/1023.mp4'

export default function LandingPage() {
  useEffect(() => {
    const videos = document.querySelectorAll("video");

    const handlePlayOnHover = (video) => {
      video.addEventListener("mouseenter", () => {
        if (window.innerWidth >= 1024) video.play();
      });

      video.addEventListener("mouseleave", () => {
        if (window.innerWidth >= 1024) video.pause();
      });
    };

    const handlePlayOnScroll = (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting && window.innerWidth < 1024) {
          video.play();
        } else if (window.innerWidth < 1024) {
          video.pause();
        }
      });
    };

    // Add hover functionality for large screens
    videos.forEach(handlePlayOnHover);

    // Intersection Observer for smaller screens
    const observer = new IntersectionObserver(handlePlayOnScroll, {
      threshold: 0.5, // Trigger when 50% of the video is visible
    });

    videos.forEach((video) => observer.observe(video));

    return () => {
      videos.forEach((video) => {
        video.removeEventListener("mouseenter", () => {});
        video.removeEventListener("mouseleave", () => {});
      });
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col h-screen lg:flex-row items-center justify-between ">
      {/* Left Video Section */}
      <div className="relative group w-full lg:w-1/2">
        <video
          src={v1}
          className="w-full h-auto  object-cover"
          muted
          playsInline
          loop
        ></video>
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl lg:text-5xl font-bold pointer-events-none">
          Abba Fashions
        </h2>
      </div>

      {/* Right Video Section */}
      <div className="relative group w-full lg:w-1/2">
        <video
          src={v1}
          className="w-full h-auto  object-cover"
          muted
          playsInline
          loop
        ></video>
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl lg:text-5xl font-bold pointer-events-none">
          Abba Events
        </h2>
      </div>
    </div>
  );
}
