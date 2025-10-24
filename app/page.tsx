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
import Image from "next/image";

export default function Home() {
  return (
    <>
      <SparklesPreview />
      {/* Apple Cards View */}
      <div className="w-full h-full py-10">
        <Heading>
          Build the Apps at the <Cover className="">Speed of Thought</Cover>.
        </Heading>
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
