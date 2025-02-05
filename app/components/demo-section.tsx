"use client";
import { Play } from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";
import React, { useRef, useState } from "react";

const DemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <div
      role="button"
      onClick={() => {
        if (videoRef.current) {
          if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
          } else {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      }}
      className="relative w-full h-auto overflow-hidden rounded-lg"
    >
      <button
        className={clsx(
          "absolute z-10 flex flex-col items-center px-4 py-2 mx-auto font-semibold text-white transition-all -translate-x-1/2 -translate-y-1/2 bg-black border rounded-lg shadow-2xl top-1/2 left-1/2 drop-shadow-2xl border-white/40 cursor-pointer",
          isPlaying ? "opacity-0" : "opacity-100"
        )}
        style={{
          boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
        }}
      >
        <span className="flex items-center gap-2">
          Click to play demo video <Play weight="fill" />
        </span>
        <span className="block text-xs text-white/60">
          (sound starts at 0:16 be patient 🤠)
        </span>
      </button>
      <video
        src="/mechy-keyboard-demo.mp4"
        className="w-full h-auto mx-auto rounded-lg cursor-pointer"
        autoPlay
        loop
        playsInline
        poster="/screenshot.png"
        ref={videoRef}
        onPlaying={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default DemoSection;
