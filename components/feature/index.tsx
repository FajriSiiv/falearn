import Image from "next/image";
import React from "react";
import { BiCodeBlock } from "react-icons/bi";
import { DiCodeigniter } from "react-icons/di";
import { MdOutlineDesignServices } from "react-icons/md";
import { motion } from "framer-motion";

interface PageProps {
  children: any;
  jobs: string;
}

const container = {
  offscreen: { opacity: 1, scale: 0 },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  offscreen: { y: 20, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
  },
};

const Card = ({ children, jobs }: PageProps) => {
  return (
    <motion.div
      variants={item}
      className="w-1/3 flex flex-col items-center justify-center text-center py-10 px-5 gap-y-3 hover:rounded-b-[3rem] hover:shadow-lg  transition-all bg-white rounded-xl group cursor-default gede scale"
    >
      <div className="relative h-20 w-20 bg-emerald-300 rounded-full flex justify-center items-center group-hover:bg-rose-300 transition-all">
        {children}
      </div>
      <h3 className="text-xl font-semibold">{jobs}</h3>
      <p className="text-xs text-gray-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, ab.
      </p>
    </motion.div>
  );
};

export default function Feature() {
  return (
    <motion.div className="px-20 pt-10 w-full h-[500px] mb-20">
      <div className="bg-[#f6f8ff] w-[95%] mx-auto h-full rounded-[50px] flex justify-center items-center py-5 px-20 flex-col">
        <h2 className="text-4xl font-bold">Our Features</h2>
        <p className="text-gray-500 mt-3">
          Powerful features to evaluate your skills
        </p>
        <motion.div
          variants={container}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="flex justify-around w-full mt-10 gap-x-10"
        >
          <Card jobs="Frontend Developer">
            <BiCodeBlock className="transition-all w-10 h-10 text-emerald-700 group-hover:text-rose-700" />
          </Card>
          <Card jobs="Backend Developer">
            <DiCodeigniter className="transition-all w-10 h-10 text-emerald-700 group-hover:text-rose-700" />
          </Card>
          <Card jobs="Designer">
            <MdOutlineDesignServices className="transition-all w-10 h-10 text-emerald-700 group-hover:text-rose-700" />
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
