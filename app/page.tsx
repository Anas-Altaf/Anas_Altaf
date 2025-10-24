import Footer from "@/components/footer";
import Heading from "@/components/heading";
import InfiniteSliderPreview from "@/components/infinite-slider-preview";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import { Cover } from "@/components/ui/cover";
import { SparklesCore } from "@/components/ui/sparkles";
import AppleCardsView from "@/components/wrapped/apple-cards-view";
import { ContactFormDemo } from "@/components/wrapped/contact-form";
import { FloatingDockDemo } from "@/components/wrapped/floating-dock";
import { SparklesPreview } from "@/components/wrapped/sparklesView";
import SwiperAuto from "@/components/wrapped/swiper-auto";
import { AnimatedTestimonialsDemo } from "@/components/wrapped/testimonials";
import { TimelineDemo } from "@/components/wrapped/timeline-view";
import { TypewriterEffectSmoothDemo } from "@/components/wrapped/type-writer-effect";
import { OrganizationJsonLd } from "@/components/JsonLd";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anas Altaf - Flutter Developer | React Native Expert | AI Specialist | Portfolio",
  description: "Discover Anas Altaf's expertise in Flutter development, React Native apps, and AI/ML solutions. Professional mobile app developer specializing in cross-platform applications with cutting-edge AI integration.",
  keywords: [
    "Anas Altaf portfolio",
    "Flutter developer portfolio",
    "React Native developer",
    "AI expert portfolio",
    "Mobile app developer Pakistan",
    "Cross platform app development",
    "Flutter apps portfolio",
    "React Native projects",
    "AI powered applications",
    "Mobile development expert"
  ],
  openGraph: {
    title: "Anas Altaf - Flutter Developer | React Native Expert | AI Specialist",
    description: "Professional Flutter Developer & React Native Expert specializing in cross-platform mobile apps and AI-powered solutions.",
    type: "website",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Anas Altaf - Flutter Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anas Altaf - Flutter Developer | React Native Expert | AI Specialist",
    description: "Professional Flutter Developer & React Native Expert specializing in cross-platform mobile apps and AI-powered solutions.",
    images: ["/og-home.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <SparklesPreview />
      {/* Apple Cards View */}
      <div className="w-full h-full py-10">
        <Heading>
          Build the Apps at the <Cover className="">Speed of Thought</Cover>.
        </Heading>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          Professional Flutter Developer & React Native Expert specializing in cross-platform mobile applications
          with AI/ML integration. Transform your ideas into powerful, intelligent mobile solutions.
        </p>
      </div>
      <AppleCardsView />
      <div>
        <Heading>Services</Heading>
        <TimelineDemo />
      </div>
      <div className="my-10 mb-20">
        <Heading className="my-10">Technology Stack</Heading>
        {/* <SwiperAuto /> */}
        <InfiniteSliderPreview />
      </div>
      <div>
        <Heading>Testimonials</Heading>
        <AnimatedTestimonialsDemo />
      </div>
      <div>
        {/* <Heading>Contact</Heading> */}
        <TypewriterEffectSmoothDemo />
        <ContactFormDemo />
      </div>
      {/* Footer */}
      <div className="w-full h-full py-10">
        {/* <Heading>👋 Thanks for stopping By!</Heading> */}
        <Footer />
      </div>
    </>
  );
}
