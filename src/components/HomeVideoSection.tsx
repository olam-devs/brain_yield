"use client";

import { useState, useRef } from "react";
import { Play } from "lucide-react";

export default function HomeVideoSection({
  heading,
  description,
  videoUrl,
  posterUrl,
}: {
  heading: string;
  description: string;
  videoUrl: string;
  posterUrl: string | null;
}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    // Let the poster swap out before autoplay kicks in
    requestAnimationFrame(() => videoRef.current?.play());
  };

  return (
    <div className="mx-auto max-w-4xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">Watch</p>
      <h2 className="text-3xl font-bold text-text md:text-4xl mb-4">{heading}</h2>
      <p className="mx-auto mb-10 max-w-2xl text-text-light leading-relaxed">{description}</p>

      <div className="relative mx-auto aspect-video max-w-3xl overflow-hidden rounded-2xl bg-black shadow-2xl">
        {playing ? (
          <video
            ref={videoRef}
            src={videoUrl}
            controls
            playsInline
            className="h-full w-full"
          />
        ) : (
          <button
            onClick={handlePlay}
            aria-label="Play video"
            className="group relative block h-full w-full"
          >
            {posterUrl ? (
              <img src={posterUrl} alt={heading} className="h-full w-full object-cover" />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-primary to-primary-dark" />
            )}
            <div className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 shadow-xl transition-transform duration-300 group-hover:scale-110">
                <Play className="ml-1 h-8 w-8 fill-primary text-primary" />
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
