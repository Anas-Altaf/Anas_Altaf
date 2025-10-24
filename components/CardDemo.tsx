"use client";
import { animate, motion } from "motion/react";
import React, { useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import { GoCopilot } from "react-icons/go";

// Main reusable card component
export function AnimatedCard({
  logos = [],
  title = "Animated Card",
  description = "A beautiful animated card component",
}) {
  return (
    <Card>
      <CardSkeletonContainer>
        <Skeleton logos={logos as never[]} />
      </CardSkeletonContainer>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
}

const Skeleton = ({ logos = [] }) => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];

  const sequence = logos.map((_, index) => [
    `.circle-${index + 1}`,
    { scale, transform },
    { duration: 0.8 },
  ]);

  useEffect(() => {
    if (sequence.length > 0) {
      animate(sequence, {
        // @ts-expect-error: Motion library types don't include repeat property
        repeat: Infinity,
        repeatDelay: 1,
      });
    }
  }, [logos.length]);

  const containerSizes = [
    "h-8 w-8",
    "h-12 w-12",
    "h-16 w-16",
    "h-12 w-12",
    "h-8 w-8",
  ];

  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row shrink-0 justify-center items-center gap-2">
        {logos.map((logo, index) => (
          <Container
            key={index}
            className={`${
              containerSizes[index % containerSizes.length]
            } circle-${index + 1}`}
          >
            {logo}
          </Container>
        ))}
      </div>

      <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};

const Sparkles = () => {
  const sparklesData = useMemo(() => {
    return [...Array(12)].map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      moveTop: Math.random() * 2 - 1,
      moveLeft: Math.random() * 2 - 1,
      opacity: Math.random(),
      duration: Math.random() * 2 + 4,
    }));
  }, []);

  return (
    <div className="absolute inset-0">
      {sparklesData.map((sparkle) => (
        <motion.span
          key={`star-${sparkle.id}`}
          animate={{
            top: `calc(${sparkle.top}% + ${sparkle.moveTop}px)`,
            left: `calc(${sparkle.left}% + ${sparkle.moveLeft}px)`,
            opacity: sparkle.opacity,
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${sparkle.top}%`,
            left: `${sparkle.left}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        ></motion.span>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-gray-800 dark:text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = false,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};
