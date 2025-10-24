const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};
const data = [
  {
    category: "Flutter Development",
    title: "Quick Alert - Emergency Communication App",
    src: "/ss/01.png",
    content: <DummyContent />,
    technologies: ["Flutter", "Firebase", "Dart", "Real-time Database"],
    description: "Cross-platform emergency alert system built with Flutter, featuring real-time notifications and location-based services.",
    slug: "quick-alert"
  },
  {
    category: "React Native Development",
    title: "Glitter of Hope - Donation Platform",
    src: "/ss/02.png",
    content: <DummyContent />,
    technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
    description: "AI-powered donation platform connecting donors with causes, built with React Native and intelligent matching algorithms.",
    slug: "glitter-of-hope"
  },
  {
    category: "Flutter & AI Integration",
    title: "Money Mouthy - AI-Powered Social App",
    src: "/ss/03.png",
    content: <DummyContent />,
    technologies: ["Flutter", "TensorFlow Lite", "Firebase ML", "Dart"],
    description: "Microblogging platform with AI content moderation and personalized recommendations using machine learning.",
    slug: "money-mouthy"
  },
  {
    category: "Cross-Platform E-Commerce",
    title: "Lake Wood - Personalized Shopping",
    src: "/ss/04.png",
    content: <DummyContent />,
    technologies: ["React Native", "AI Recommendations", "AR Try-on", "Node.js"],
    description: "AI-driven e-commerce platform with personalized recommendations and AR product visualization.",
    slug: "lake-wood"
  },
  {
    category: "Flutter E-Commerce",
    title: "Voitto - Sports Equipment Store",
    src: "/ss/05.png",
    content: <DummyContent />,
    technologies: ["Flutter", "AI Chat Support", "Payment Integration", "Firebase"],
    description: "Online hockey store with AI-powered customer support and personalized product recommendations.",
    slug: "voitto"
  },
  {
    category: "React Native & AI",
    title: "Kitab ul Azkar - Smart Islamic App",
    src: "/ss/06.png",
    content: <DummyContent />,
    technologies: ["React Native", "AI Translation", "Speech Recognition", "SQLite"],
    description: "AI-enhanced Islamic prayer app with intelligent dua recommendations and multilingual support.",
    slug: "kitab-ul-azkar"
  },
  {
    category: "Flutter Development",
    title: "Plate Mate - AI Nutrition Tracker",
    src: "/ss/Screenshot_20250922_153635.png",
    content: <DummyContent />,
    technologies: ["Flutter", "AI Image Recognition", "Nutrition API", "Firebase"],
    description: "AI-powered food tracking app that recognizes meals from photos and provides nutritional insights.",
    slug: "plate-mate"
  },
];

import React from "react";
import { Card, Carousel } from "../ui/apple-cards-carousel";

const AppleCardsView = () => {
  const cards = data.map((card, index) => {
    return <Card key={card.src} card={card} index={index} />;
  });
  return <Carousel items={cards} />;
};

export default AppleCardsView;
