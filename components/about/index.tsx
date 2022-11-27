import React from "react";
import LineSvg from "public/images/line-svg.svg";
import Image from "next/image";

export default function About() {
  return (
    <div className="relative pt-20 text-center h-[500px] ">
      <div className="w-full h-full absolute left-0 -top-7 z-[-1] ">
        <Image src={LineSvg} alt="" className="w-full" />
      </div>
      <div className="flex flex-col justify-center h-full z-10">
        <span className="text-emerald-600 font-semibold text-2xl">
          E-Course platform to upgrade your skill
        </span>
        <h2 className="text-[4rem] leading-[4rem] font-bold py-3">
          The easiest way to learn skill
        </h2>
        <p className="w-1/2 mx-auto text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          enim optio voluptate hic quibusdam fugit praesentium, animi autem
          saepe quia.
        </p>
        <button className="mt-5 text-lg font-semibold py-4 px-8 bg-slate-800 w-fit mx-auto rounded-lg text-white">
          Know More
        </button>
      </div>
    </div>
  );
}
