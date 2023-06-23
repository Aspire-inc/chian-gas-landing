"use client";

import Image from "next/image";
import LogoIcon from "@/assets/icons/logo-icon.svg";
import CaretDownIcon from "@/assets/icons/caret-down-icon.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import React from "react";
import DottedDividerIcon from "@/assets/icons/dotted-divider-icon.svg";
import MazeNodesIcon from "@/assets/icons/maze-nodes-icon.svg";
import ServerIcon from "@/assets/icons/server-icon.svg";
import RightCloudChipIcon from "@/assets/icons/right-cloud-chip-icon.svg";
import LeftCloudChipIcom from "@/assets/icons/left-cloud-chip-icon.svg";
import ChipIcon from "@/assets/icons/chip-icon.svg";
import AngleSpannerIcon from "@/assets/icons/angle-spanner-icon.svg";
import NodesIcon from "@/assets/icons/nodes-icon.svg";

const companyInfo = [
  {
    name: "About Us",
    description: `Lorem ipsum dolor sit amet,
    consectetur adipiscing elit.
    Mauris eget felis et felis.`,
  },
  {
    name: "Our Offerings",
    description: `Lorem ipsum dolor sit amet.`,
  },
  {
    name: "How Chian Works",
    description: `Lorem ipsum dolor sit amet,
    consectetur adipiscing elit.`,
  },
  {
    name: "News and Updates",
    description: `Lorem ipsum dolor sit amet.`,
  },
  {
    name: "Careers",
    description: `Lorem ipsum dolor sit amet.`,
  },
  {
    name: "Blog",
    description: `Lorem ipsum dolor sit amet,
    consectetur adipiscing elit.`,
  },
];

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
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        className="w-[900px] absolute z-[1000] top-[calc(100%+5px)]  bg-white left-0 h-[400px] p-2 rounded-[12px] origin-top-left overflow-hidden flex gap-x-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-[40%] h-full border border-[#E8E8EA] rounded-[12px]">
          <div
            style={{ background: "rgba(5, 15, 24, 0.10)" }}
            className="w-full h-full border-[6px] border-[#F9F9F9] p-2 rounded-[12px]"
          >
            <div
              style={{ background: "rgba(5, 15, 24, 0.699999988079071)" }}
              className="h-[50px] rounded-[5px] flex items-center px-4 justify-between"
            >
              <Image src={NodesIcon} alt="" />
              <Image src={ChipIcon} alt="" />
              <Image src={LeftCloudChipIcom} alt="" />
              <Image src={RightCloudChipIcon} alt="" />
              <Image src={MazeNodesIcon} alt="" />
              <Image src={ServerIcon} alt="" />
              <Image src={AngleSpannerIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="w-[60%] h-full flex">
          <div className="flex w-[50%]">
            <Image src={DottedDividerIcon} alt="" className="" />
            <div className="mt-12">
              <span className="text-[#49535C] text-[14px] font-medium px-5">
                Company
              </span>

              <div className=" mt-4 flex flex-col gap-y-5">
                {companyInfo.slice(0, 3).map((info, i) => (
                  <motion.div
                    initial={{ x: "-30%", opacity: 0 }}
                    animate={{ x: "0%", opacity: 1 }}
                    transition={{ delay: 0.2 * i + 0.1 }}
                    key={i}
                    className="group border-l-2 border-transparent hover:border-[#F99617] px-5 ml-[-2px]"
                  >
                    <p className="font-medium text-[16px] text-[#49535C] group-hover:text-[#0043A7] ">
                      {info.name}
                    </p>
                    <p className="text-[14px] text-[#8E8E8E]">
                      {info.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex w-[50%]">
            <Image src={DottedDividerIcon} alt="" className="" />
            <div className="mt-16">
              <div className=" mt-6 flex flex-col gap-y-5">
                {companyInfo.slice(3, 6).map((info, i) => (
                  <motion.div
                    initial={{ x: "-30%", opacity: 0 }}
                    animate={{ x: "0%", opacity: 1 }}
                    transition={{ delay: 0.1 * i + 0.8 }}
                    key={i}
                    className="group border-l-2 border-transparent hover:border-[#F99617] px-5 ml-[-2px]"
                  >
                    <p className="font-medium text-[16px] text-[#49535C] group-hover:text-[#0043A7] ">
                      {info.name}
                    </p>
                    <p className="text-[14px] text-[#8E8E8E]">
                      {info.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
