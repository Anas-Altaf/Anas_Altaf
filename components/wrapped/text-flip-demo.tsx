"use client";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export function ContainerTextFlipDemo() {
  const words = ["better", "modern", "beautiful", "awesome"];
  return (
    <motion.h1
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      className={cn(
        " mb-6 z-11 max-sm:text-center  text-left text-4xl leading-normal font-semibold tracking-tight text-zinc-700  dark:text-zinc-100"
      )}
      layout
    >
      <div className="inline-block pl-10 pr-10">
        Make your Apps look 10x{" "}
        <ContainerTextFlip words={words} interval={2000} />
        {/* <Blips /> */}
      </div>
    </motion.h1>
  );
}
