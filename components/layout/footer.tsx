import React from "react";

export default function Footer() {
  return (
    <div className="mt-20  py-10 px-20">
      <div className="border-t-2 border-gray-300 pt-10 flex">
        <div className="w-1/4">
          <span className="font-semibold text-4xl">FaLearn</span>
          <p className="w-5/6 mt-3 text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="w-3/4 flex justify-around">
          <div className="list-none flex flex-col gap-y-3 text-gray-400 cursor-pointer">
            <span className="font-semibold text-black">Entity types</span>
            <li>Knowledge types</li>
            <li>Security</li>
            <li>Privacy policies</li>
            <li>Partners</li>
            <li>FAQ</li>
          </div>
          <div className="list-none flex flex-col gap-y-3 text-gray-400">
            <span className="font-semibold text-black">Services</span>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Press</li>
            <li>Help Center</li>
          </div>
          <div className="list-none flex flex-col gap-y-3 text-gray-400">
            <span className="font-semibold text-black">Resources</span>
            <li>Pricing</li>
            <li>Contact</li>
            <li>Terms & Conditions</li>
          </div>
          <div className="list-none flex flex-col gap-y-3 text-gray-400">
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
