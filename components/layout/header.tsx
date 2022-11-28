import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex px-20 bg-[#1B1B1B] justify-between items-center py-5 absolute top-0  z-50 text-white w-[100vw] max-w-[1440px] md:px-5">
      <span className="text-3xl font-bold">FaLearn</span>
      <div className="flex gap-x-10 list-none sm:hidden">
        <span>
          <Link href={"/"}>Home</Link>
        </span>
        <span>
          <Link href={"/new"}>Add</Link>
        </span>
        <span>About</span>
        <span>Product</span>
      </div>
    </div>
  );
}
