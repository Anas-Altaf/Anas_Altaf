"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { CardDemo } from "../CardDemo";
import { div } from "framer-motion/client";

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
        <SwiperSlide>
          <CardDemo />
        </SwiperSlide>
        <SwiperSlide>
          <CardDemo />
        </SwiperSlide>

        <SwiperSlide>
          <CardDemo />
        </SwiperSlide>
        <SwiperSlide>
          <CardDemo />
        </SwiperSlide>
        <SwiperSlide>
          <CardDemo />
        </SwiperSlide>

        <SwiperSlide>
          <CardDemo />
        </SwiperSlide>
        <SwiperSlide>
          <CardDemo />
        </SwiperSlide>
        <SwiperSlide>
          <CardDemo />
        </SwiperSlide>

        <SwiperSlide>
          <CardDemo />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
