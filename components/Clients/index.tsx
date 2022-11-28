import React from "react";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { AiFillYoutube } from "react-icons/ai";
import { SiAmazonaws, SiDiscord } from "react-icons/si";
import { motion } from "framer-motion";

interface cardProps {
  children: any;
  name: string;
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

const CardClient = ({ children, name }: cardProps) => {
  return (
    <motion.div
      variants={item}
      className="flex items-center gap-x-2 bg-white px-4 py-2"
    >
      {children}
      <span className="font-semibold text-3xl lg:text-xl md:text-lg sm:text-[8px]">
        {name}
      </span>
    </motion.div>
  );
};

export default function OurClient() {
  const icons = [
    {
      name: "Google",
      icon: (
        <FcGoogle className="w-16 h-16 md:w-10 md:h-10 sm:w-5 sm:h-5 lg:w-12 lg:h-12" />
      ),
    },
    {
      name: "Github",
      icon: (
        <FaGithub className="w-16 h-16 md:w-10 md:h-10 sm:w-5 sm:h-5 lg:w-12 lg:h-12" />
      ),
    },
    {
      name: "Figma",
      icon: (
        <FiFigma className="w-16 h-16 md:w-10 md:h-10 sm:w-5 sm:h-5 lg:w-12 lg:h-12" />
      ),
    },
    {
      name: "Youtube",
      icon: (
        <AiFillYoutube className="w-16 h-16 md:w-10 md:h-10 sm:w-5 sm:h-5 lg:w-12 lg:h-12" />
      ),
    },
    {
      name: "Discord",
      icon: (
        <SiDiscord className="w-16 h-16 md:w-10 md:h-10 sm:w-7 sm:h-7 lg:w-12 lg:h-12" />
      ),
    },
    {
      name: "Amazon",
      icon: (
        <SiAmazonaws className="w-16 h-16 md:w-10 md:h-10 sm:w-7 sm:h-7 lg:w-12 lg:h-12" />
      ),
    },
  ];

  return (
    <div className="px-20 py-14 bg-[#F8F9FF] md:px-10 sm:px-5">
      <h3 className="py-5 text-4xl text-center font-bold mb-3 sm:text-xl">
        Our Clients
      </h3>
      <div className="flex flex-wrap justify-center ">
        <motion.div
          variants={container}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="w-4/5 justify-center flex flex-wrap bg-transparent gap-5"
        >
          {icons.map((card, i) => (
            <CardClient key={i} name={card.name}>
              {card.icon}
            </CardClient>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
