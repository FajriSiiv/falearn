import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const CardTesti = () => {
  return (
    <>
      <p className="text-sm italic leading-loose">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quasi
        labore rem facilis in odio?
      </p>
      <div className="flex items-center gap-x-5 mt-5">
        <div className=" w-16 h-16 rounded-full bg-blue-400"></div>
        <div className="">
          <span className="font-bold">Henry S.</span>
          <p className="text-sm text-gray-700">
            Frontend Developer - Indonesia
          </p>
        </div>
      </div>
    </>
  );
};

export default function Testimonial() {
  return (
    <div className="my-20">
      <h2 className="text-4xl text-center py-10 font-bold">Testimonial</h2>
      <div>
        <Swiper
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
        >
          <SwiperSlide className="rounded-2xl bg-[#F8F9FF] py-5 px-7">
            <CardTesti />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl bg-[#F8F9FF] py-5 px-7">
            <CardTesti />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl bg-[#F8F9FF] py-5 px-7">
            <CardTesti />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl bg-[#F8F9FF] py-5 px-7">
            <CardTesti />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl bg-[#F8F9FF] py-5 px-7">
            <CardTesti />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mt-20 px-20 ">
        <div className="w-full h-52 bg-green-400 rounded-[2rem] px-20 py-6 flex justify-between items-center">
          <div className="text-white">
            <h3 className="text-4xl font-semibold">Want to stay updated</h3>
            <p className="text-sm mt-3 opacity-80 w-3/4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium culpa illo sed unde, ullam officiis.
            </p>
          </div>
          <button className="py-4 px-6 bg-[#DDEE4B] rounded-xl font-bold">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
}
