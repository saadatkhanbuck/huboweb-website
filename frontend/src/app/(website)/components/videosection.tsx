"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    let trigger: ScrollTrigger | null = null;

    const onLoaded = () => {
      if (!video || !sectionRef.current) return;
      const duration = video.duration;

      let targetTime = 0;

      trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${duration * 1000}`, // scroll length depends on video duration
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          if (video.duration) {
            targetTime = self.progress * video.duration;

            // Animate video time instead of setting it directly
            gsap.to(video, {
              currentTime: targetTime,
              duration: 0.2, // smoothing duration (adjust for more/less smoothness)
              ease: "power1.out",
              overwrite: true,
            });
          }
        },
      });
    };

    if (video) {
      if (video.readyState >= 1) {
        onLoaded();
      } else {
        video.addEventListener("loadedmetadata", onLoaded);
      }
    }

    return () => {
      if (video) {
        video.removeEventListener("loadedmetadata", onLoaded);
      }
      if (trigger) {
        trigger.kill();
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Video only */}
      <video
        ref={videoRef}
        src="/img/video6.mp4"
        className="w-full h-full object-cover"
        playsInline
        muted
        preload="auto"
      />
    </section>
  );
}
