import React, { Suspense, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const CardTesti = () => {
  return (
    <div>
      <p className="text-sm italic leading-loose">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quasi
        labore rem facilis in odio?
      </p>
      <div className="flex items-center gap-x-5 mt-5">
        <div className=" w-16 h-16 rounded-full bg-blue-400"></div>
        <div className="">
          <p className="font-bold">Henry S.</p>
          <p className="text-sm text-gray-700 md:hidden">
            Frontend Developer - Indonesia
          </p>
        </div>
      </div>
    </div>
  );
};

const SliderS = () => {
  return (
    <Swiper
      loop={true}
      centeredSlides={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        430: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        300: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
      }}
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
  );
};

export default function Testimonial() {
  const [card, setCard] = useState<any>();
  useEffect(() => {
    setCard(SliderS);
  }, [SliderS]);

  return (
    <div className="my-20">
      <h2 className="text-4xl text-center py-10 font-bold sm:text-xl">
        Testimonial
      </h2>
      <div>{card}</div>
      <div className="mt-20 px-20 md:px-5">
        <div className="w-full h-52 bg-green-400 rounded-[2rem] px-20 py-6 flex justify-between items-center md:px-5 md:h-44 sm:flex-col">
          <div className="text-white">
            <h3 className="text-4xl font-semibold lg:text-3xl md:text-xl sm:text-2xl sm:text-center">
              Want to stay updated
            </h3>
            <p className="text-sm mt-3 opacity-80 w-3/4 md:text-xs sm:hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium culpa illo sed unde, ullam officiis.
            </p>
          </div>
          <button className="py-4 px-6 bg-[#DDEE4B] rounded-xl font-bold whitespace-pre md:text-sm sm:py-3">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
}
