import React from "react";

export default function Footer() {
  return (
    <div className="mt-20  py-10 px-20 md:px-5">
      <div className="border-t-2 border-gray-300 pt-10 flex gap-x-10 sm:flex-col sm:gap-y-10">
        <div className="w-1/4 sm:w-full">
          <span className="font-semibold text-4xl md:text-2xl">FaLearn</span>
          <p className="w-5/6 mt-3 text-sm text-gray-400 md:text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="w-3/4 sm:w-full flex justify-around lg:grid lg:grid-cols-2 gap-y-10 md:text-sm sm:gap-x-5">
          <div className="list-none flex flex-col gap-y-3 text-gray-400 cursor-pointer ">
            <span className="font-semibold text-black">Entity types</span>
            <li>Knowledge types</li>
            <li>Security</li>
            <li>Privacy policies</li>
            <li>Partners</li>
            <li>FAQ</li>
          </div>
          <div className="list-none flex flex-col gap-y-3 text-gray-400 cursor-pointer">
            <span className="font-semibold text-black">Services</span>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Press</li>
            <li>Help Center</li>
          </div>
          <div className="list-none flex flex-col gap-y-3 text-gray-400 cursor-pointer">
            <span className="font-semibold text-black">Resources</span>
            <li>Pricing</li>
            <li>Contact</li>
            <li>Terms & Conditions</li>
          </div>
          <div className="list-none flex flex-col gap-y-3 text-gray-400 cursor-pointer">
            <span className="font-semibold text-black">Support</span>
            <li>Affiliate</li>
            <li>Sitemap</li>
            <li>Cancelation</li>
          </div>
        </div>
      </div>
    </div>
  );
}
