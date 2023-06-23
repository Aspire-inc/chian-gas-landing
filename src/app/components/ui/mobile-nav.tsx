"use client";

import LogoIcon from "@/assets/icons/logo-icon.svg";
import CancelIcon from "@/assets/icons/cancel-icon.svg";
import WhiteLogoIcon from "@/assets/icons/white-logo-icon.svg";
import StackedBarIcon from "@/assets/icons/stacked-bar-icon.svg";
import WhiteCaretIcon from "@/assets/icons/white-caret-icon.svg";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";

export default function MobileNav() {
  const [showDropdown, setShowDropdown] = useState(false);

  const [showCompanyInfo, setShowCompanyInfo] = useState(false);

  return (
    <nav className="sticky top-0 z-[100]" id="nav">
      <div
        style={{ background: showDropdown ? "#0043A7" : "white" }}
        className="w-full h-[76px] flex items-center justify-between px-5 lg:hidden "
      >
        <Image src={showDropdown ? WhiteLogoIcon : LogoIcon} alt="" />

        <div
          style={{
            background: showDropdown
              ? "rgba(255,255,255,0.05)"
              : "rgba(0,0,0,0.05)",
          }}
          onClick={() => setShowDropdown(!showDropdown)}
          className="w-[45px] h-[45px] rounded-[8px] flex items-center justify-center cursor-pointer"
        >
          <Image src={showDropdown ? CancelIcon : StackedBarIcon} alt="" />
        </div>
      </div>
      {showDropdown ? (
        <motion.div
          initial={{ height: "0" }}
          animate={{ height: "calc(100% - 76px)" }}
          className="fixed top-[76px] left-0 h-[calc(100%-76px)] w-full z-[100] bg-[#0043A7]"
        >
          <div className="w-full h-[calc(100%-41px)] px-6  pb-6 overflow-auto">
            <motion.ul
              initial={{ x: "-30%", opacity: 0 }}
              animate={{ x: "0", opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-y-7 mt-[30%]"
            >
              <li>
                <div
                  onClick={() => setShowCompanyInfo(!showCompanyInfo)}
                  className="flex gap-x-2 items-center"
                >
                  <span className="text-[26px] text-white font-bold">
                    Company
                  </span>
                  <Image
                    src={WhiteCaretIcon}
                    alt=""
                    className={`${
                      showCompanyInfo ? "rotate-180" : "rotate-0"
                    } transition-all`}
                  />
                </div>
                {showCompanyInfo ? (
                  <motion.ul
                    initial={{ x: "-30%", opacity: 0 }}
                    animate={{ x: "0%", opacity: 1 }}
                    className="flex flex-col gap-y-5 mt-5"
                  >
                    <li>
                      <span className="text-[18px] text-white">About Us</span>
                    </li>
                    <li>
                      <span className="text-[18px] text-white">
                        Our Offerings
                      </span>
                    </li>
                    <li>
                      <span className="text-[18px] text-white">
                        How Chian Works
                      </span>
                    </li>
                    <li>
                      <span className="text-[18px] text-white">
                        News and Updates
                      </span>
                    </li>
                    <li>
                      <span className="text-[18px] text-white">Careers</span>
                    </li>
                    <li>
                      <span className="text-[18px] text-white">Blog</span>
                    </li>
                  </motion.ul>
                ) : (
                  ""
                )}
              </li>
              <li>
                <span className="text-[26px] text-white font-bold">
                  Support
                </span>
              </li>
              <li>
                <span className="text-[26px] text-white font-bold">Safety</span>
              </li>
              <li>
                <span className="text-[26px] text-white font-bold">
                  Partner with Chian
                </span>
              </li>
              <li>
                <span className="text-[26px] text-white font-bold">
                  Solutions
                </span>
              </li>
            </motion.ul>

            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex items-center justify-center w-[200px] h-[50px] border border-[#CFE1FC] rounded-[30px] text-white font-semibold"
            >
              Download App
            </motion.button>
          </div>
          <motion.div
            className="h-[41px] bg-[#F99617]"
            initial={{ width: "0%", opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ delay: 0.3 }}
          ></motion.div>
        </motion.div>
      ) : (
        ""
      )}
    </nav>
  );
}
