import React from "react";
import { motion } from "framer-motion";
import SkillImg from "public/images/sosmed.webp";
import Image from "next/image";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Jumbotron() {
  return (
    <div className="px-20 bg-white h-[100vh] max-h-[800px] text-white flex items-center  relative overflow-hidden md:flex-col-reverse md:justify-center md:gap-y-10 md:py-10 md:px-5">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#1B1B1B] clip-jumbotron">
        <div className="w-52 h-52 bg-[#CC2E4B] rounded-full absolute bottom-[-50px] left-[-70px]"></div>
        <div className="w-52 h-52 bg-[#2DC680] rounded-full absolute bottom-1/2 right-[-70px]"></div>
        <div className="w-40 h-40 bg-[#1B1B1B] rounded-full absolute bottom-1/2 right-[-70px]"></div>
      </div>
      <motion.div
        className="w-2/5 z-10 md:w-full"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={item} className="flex items-center gap-x-5">
          <span className="py-2 px-5 rounded-md bg-[#CC2E4B] lg:text-sm">
            New
          </span>
          <p className="lg:text-sm">We just launch a new course</p>
        </motion.div>
        <motion.h1
          variants={item}
          className="py-5 text-[3.2rem] leading-snug font-semibold lg:text-3xl lg:leading-normal"
        >
          Fastest Learn Your Skill With Mentors
        </motion.h1>
        <motion.p
          variants={item}
          className="text-gray-300 lg:text-sm lg:leading-relaxed"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          eaque rerum maiores, reprehenderit odit quisquam earum aliquam ratione
          voluptatem enim.
        </motion.p>
        <motion.button
          variants={item}
          className="py-2 px-5 mt-5 bg-[#DEEE47] text-[#1B1B1B] font-semibold rounded-lg"
        >
          Download Now
        </motion.button>
      </motion.div>
      <div className="w-3/5 z-10 relative md:w-full">
        <div className="relative w-4/5 mx-auto shadow-2xl">
          <Image src={SkillImg} alt="image prior" priority />
        </div>
      </div>
    </div>
  );
}
