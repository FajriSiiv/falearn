import React, { useRef } from "react";
import LineSvg from "public/images/line-svg.svg";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};
export default function About() {
  return (
    <div className="relative pt-20 text-center h-[500px] ">
      <div className="w-full h-full absolute left-0 -top-7 z-[-1] ">
        <Image src={LineSvg} alt="" className="w-full" />
      </div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="flex flex-col justify-center h-full z-10"
      >
        <motion.span
          variants={cardVariants}
          className="text-emerald-600 font-semibold text-2xl"
        >
          E-Course platform to upgrade your skill
        </motion.span>
        <motion.h2
          variants={cardVariants}
          className="text-[4rem] leading-[4rem] font-extrabold py-3"
        >
          The easiest way to learn skill
        </motion.h2>
        <motion.p variants={cardVariants} className="w-1/2 mx-auto text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          enim optio voluptate hic quibusdam fugit praesentium, animi autem
        </motion.p>
        <motion.button
          variants={cardVariants}
          className="mt-5 text-lg font-semibold py-4 px-8 bg-slate-800 w-fit mx-auto rounded-lg text-white"
        >
          Know More
        </motion.button>
      </motion.div>
    </div>
  );
}
