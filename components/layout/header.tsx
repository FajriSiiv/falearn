import React from "react";

export default function Header() {
  return (
    <div className="flex px-20 bg-transparent justify-between items-center py-5 absolute top-0  z-50 text-white w-[100vw] max-w-[1440px]">
      <span className="text-3xl font-bold">FaLearn</span>
      <div className="flex gap-x-10 list-none">
        <li>Product</li>
        <li>Product</li>
        <li>Product</li>
        <li>Product</li>
      </div>
    </div>
  );
}
