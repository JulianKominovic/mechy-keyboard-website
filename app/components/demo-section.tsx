"use client";
import { Play } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const DemoSection = () => {
  return (
    <div className="relative w-full h-auto overflow-hidden rounded-lg">
      <div
        className="absolute z-10 flex flex-col items-center px-4 py-2 mx-auto font-semibold text-white transition-all -translate-x-1/2 -translate-y-1/2 bg-black border rounded-lg shadow-2xl cursor-default top-1/2 left-1/2 drop-shadow-2xl border-white/40"
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
      </div>
      <video
        src="/mechy-keyboard-demo.mp4"
        className="w-full h-auto mx-auto rounded-lg"
        autoPlay
        loop
        playsInline
        poster="/screenshot.png"
        onClick={(e) => {
          if (e.currentTarget.paused) {
            e.currentTarget.play();
            (
              e.currentTarget.previousElementSibling as HTMLDivElement
            ).style.opacity = "0";
          } else {
            (
              e.currentTarget.previousElementSibling as HTMLDivElement
            ).style.opacity = "1";
            e.currentTarget.pause();
          }
        }}
      />
    </div>
  );
};

export default DemoSection;
