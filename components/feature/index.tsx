import Image from "next/image";
import React from "react";
import { BiCodeBlock } from "react-icons/bi";
import { DiCodeigniter } from "react-icons/di";
import { MdOutlineDesignServices } from "react-icons/md";

interface PageProps {
  children: any;
  jobs: string;
}

const Card = ({ children, jobs }: PageProps) => {
  return (
    <div className="w-1/3  flex flex-col items-center justify-center text-center py-10 px-5 gap-y-3 hover:rounded-b-[3rem] hover:shadow-lg hover:scale-105 transition-all bg-white rounded-xl group cursor-default">
      <div className="relative h-20 w-20 bg-emerald-300 rounded-full flex justify-center items-center group-hover:bg-rose-300 transition-all">
        {children}
      </div>
      <h3 className="text-xl font-semibold">{jobs}</h3>
      <p className="text-sm text-gray-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, ab.
      </p>
    </div>
  );
};

export default function Feature() {
  return (
    <div className="px-20 pt-10 w-full h-[500px] mb-20">
      <div className="bg-[#f6f8ff] w-[95%] mx-auto h-full rounded-[50px] flex justify-center items-center py-5 px-20 flex-col">
        <h2 className="text-4xl font-bold">Our Features</h2>
        <p className="text-gray-500 mt-3">
          Powerful features to evaluate your skills
        </p>
        <div className="flex justify-around w-full mt-10 gap-x-10">
          <Card jobs="Frontend Developer">
            <BiCodeBlock className="transition-all w-10 h-10 text-emerald-700 group-hover:text-rose-700" />
          </Card>
          <Card jobs="Backend Developer">
            <DiCodeigniter className="transition-all w-10 h-10 text-emerald-700 group-hover:text-rose-700" />
          </Card>
          <Card jobs="Designer">
            <MdOutlineDesignServices className="transition-all w-10 h-10 text-emerald-700 group-hover:text-rose-700" />
          </Card>
        </div>
      </div>
    </div>
  );
}
