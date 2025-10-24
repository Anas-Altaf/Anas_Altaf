"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { div } from "framer-motion/client";
import { AnimatedCard } from "../CardDemo";
import { techStackData } from "@/data/tech-stack-data";

export default function SwiperAuto() {
  return (
    <div className="my-10">
      <Swiper
        breakpoints={{
          400: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2.2,
          },

          768: {
            slidesPerView: 2.7,
          },

          1200: {
            slidesPerView: 3.5,
          },
        }}
        spaceBetween={10}
        loop={true}
        freeMode={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
      >
        {techStackData.map((item, index) => (
          <SwiperSlide key={index}>
            <AnimatedCard
              logos={item.logos as never[]}
              title={item.title}
              description={item.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
