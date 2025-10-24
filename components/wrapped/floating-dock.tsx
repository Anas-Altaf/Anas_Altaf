import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandX,
  IconExchange,
  IconGlobe,
  IconGlobeOff,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconWebhook,
  IconWorld,
} from "@tabler/icons-react";
import { Icon } from "lucide-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Anas-Altaf",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/anasaltaf",
    },

    {
      title: "Email",
      icon: (
        <IconBrandGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:anasaltaf35@gmail.com",
    },

    {
      title: "X",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://twitter.com/anas0altaf",
    },
    {
      title: "Official Website",
      icon: (
        <IconWorld className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://o2omation.com",
    },
  ];
  return (
    <div className="fixed z-50 bottom-5 left-0 right-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:right-auto w-fit sm:mx-auto mx-0 ml-10">
      <FloatingDock items={links} />
    </div>
  );
}
