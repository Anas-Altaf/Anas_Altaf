"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { Spotlight } from "../ui/spotlight";
import { ContainerTextFlipDemo } from "./text-flip-demo";

export function SparklesPreview() {
  return (
    <div className="relative h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="pointer-events-none absolute inset-0 [background-size:40px_40px] select-none [background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]" />
      <h6 className="text-white max-sm:text-sm text-3xl font-bold">Meet</h6>
      <h1 className="md:text-7xl text-5xl lg:text-9xl font-bold text-center text-white relative z-10">
        Anas Altaf{" "}
        {/* <span className="text-indigo-500 text-3xl font-semibold">and</span> */}
      </h1>
      <div className="w-[40rem] h-10 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}

        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <ContainerTextFlipDemo />
    </div>
  );
}
