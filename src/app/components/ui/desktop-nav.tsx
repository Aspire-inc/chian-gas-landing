"use client";

import Image from "next/image";
import LogoIcon from "@/assets/icons/logo-icon.svg";
import CaretDownIcon from "@/assets/icons/caret-down-icon.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import React from "react";

export default function DesktopNav() {
  const [showCompanyInfo, setShowCompanyInfo] = useState(false);

  return (
    <nav className="hidden lg:block">
      <div className="h-[37px] bg-[#0043A7] flex items-center px-6 xl:px-10 justify-between">
        <div className="flex gap-3">
          <span className="text-white text-[14px] font-semibold">
            Open: 24 Hours
          </span>
          <span className="text-white text-[14px] font-semibold">|</span>
          <span className="text-white text-[14px] font-semibold">7 Days</span>
        </div>

        <div className="flex gap-5">
          <span className="text-white text-[14px] font-normal">
            Partner with Chian as a:
          </span>
          <span className="text-white text-[14px] font-semibold cursor-pointer">
            Vendor
          </span>
          <span className="text-white text-[14px] font-semibold cursor-pointer">
            Sponsor
          </span>
          <span className="text-white text-[14px] font-semibold cursor-pointer">
            Delivery
          </span>
        </div>
      </div>
      <div className="h-[80px] bg-white px-10 flex justify-between">
        <Image src={LogoIcon} alt="" />
        <div className="w-[calc(100%-150px)] h-full flex justify-between items-center">
          <ul className="flex items-center gap-12 h-full">
            <li
              className="flex items-center gap-x-1 px-4 h-full hover:bg-blue-50/70 border-b-2 border-transparent hover:border-[#F99617] cursor-pointer relative"
              onClick={() => setShowCompanyInfo(!showCompanyInfo)}
            >
              <span className="text-[15px] xl:text-[20px] text-[#5B5B5B]">
                Company
              </span>
              <Image src={CaretDownIcon} alt="" />
              {showCompanyInfo ? <CompanyInfo /> : ""}
            </li>
            <li>
              <span className="text-[15px] xl:text-[20px] text-[#5B5B5B]">
                Support
              </span>
            </li>
            <li>
              <span className="text-[15px] xl:text-[20px] text-[#5B5B5B]">
                Safety
              </span>
            </li>
          </ul>

          <ul className="flex items-center gap-12">
            <li className="flex items-center gap-x-1">
              <span className="text-[15px] xl:text-[20px] text-[#5B5B5B]">
                Partner with Chian
              </span>
            </li>
            <li>
              <span className="text-[15px] xl:text-[20px] text-[#5B5B5B]">
                Solutions
              </span>
            </li>
            <li>
              <button className="text-[#5B5B5B] font-semibold text-[13px] xl:text-[16px] w-[150px] xl:w-[200px] h-[50px] rounded-[30px] border border-[#A7AEC1]">
                Download App
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

const CompanyInfo = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="w-[900px] absolute top-[calc(100%+5px)]  bg-white left-0 h-[400px] rounded-[14px] origin-top-left"
      onClick={(e) => e.stopPropagation()}
    ></motion.div>
  );
};
