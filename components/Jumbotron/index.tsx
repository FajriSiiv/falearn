import React from "react";

import SkillImg from "public/images/sosmed-img.jpg";
import Image from "next/image";

export default function Jumbotron() {
  return (
    <div className="px-20 bg-white h-[100vh] max-h-[800px] text-white flex items-center  relative">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#1B1B1B] clip-jumbotron">
        <div className="w-52 h-52 bg-[#CC2E4B] rounded-full absolute bottom-[-50px] left-[-70px]"></div>
        <div className="w-52 h-52 bg-[#2DC680] rounded-full absolute bottom-1/2 right-[-70px]"></div>
        <div className="w-40 h-40 bg-[#1B1B1B] rounded-full absolute bottom-1/2 right-[-70px]"></div>
      </div>
      <div className="w-2/5 z-10">
        <div className="flex items-center gap-x-5">
          <span className="py-2 px-5 rounded-md bg-[#CC2E4B]">New</span>
          <p>We just launch a new course</p>
        </div>
        <h1 className="py-5 text-[3.5rem] leading-snug font-semibold">
          Fastest Learn Your Skill With Mentors
        </h1>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          eaque rerum maiores, reprehenderit odit quisquam earum aliquam ratione
          voluptatem enim.
        </p>
        <button className="py-2 px-5 mt-5 bg-[#DEEE47] text-[#1B1B1B] font-semibold rounded-lg">
          Download Now
        </button>
      </div>
      <div className="w-3/5 z-10">
        <div className="relative w-4/5 mx-auto shadow-2xl">
          <Image src={SkillImg} alt="njazc" />
        </div>
      </div>
    </div>
  );
}
