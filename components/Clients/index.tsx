import React from "react";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { AiFillYoutube } from "react-icons/ai";
import { SiAmazonaws, SiDiscord } from "react-icons/si";

interface cardProps {
  children: any;
  name: string;
}

const CardClient = ({ children, name }: cardProps) => {
  return (
    <div className="flex items-center gap-x-2 bg-white px-4 py-2">
      {children}
      <span className="font-semibold text-3xl">{name}</span>
    </div>
  );
};

export default function OurClient() {
  return (
    <div className="px-20 py-14 bg-[#F8F9FF]">
      <h3 className="py-5 text-4xl text-center font-bold mb-3">Our Clients</h3>
      <div className="flex flex-wrap justify-center ">
        <div className="w-4/5 justify-center flex flex-wrap bg-transparent gap-5">
          <CardClient name="Google">
            <FcGoogle className="w-16 h-16" />
          </CardClient>
          <CardClient name="Github">
            <FaGithub className="w-16 h-16" />
          </CardClient>
          <CardClient name="Figma">
            <FiFigma className="w-16 h-16" />
          </CardClient>
          <CardClient name="Amazon">
            <SiAmazonaws className="w-16 h-16" />
          </CardClient>
          <CardClient name="Discord">
            <SiDiscord className="w-16 h-16" />
          </CardClient>
          <CardClient name="Youtube">
            <AiFillYoutube className="w-16 h-16" />
          </CardClient>
          <CardClient name="Google">
            <FcGoogle className="w-16 h-16" />
          </CardClient>
          <CardClient name="Github">
            <FaGithub className="w-16 h-16" />
          </CardClient>
        </div>
      </div>
    </div>
  );
}
