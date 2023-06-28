"use client";

import MinusSquareIcon from "@/assets/icons/minus-square-icon.svg";
import AddSquareIcon from "@/assets/icons/add-square-icon.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import React from "react";
import { motion } from "framer-motion";

type FaqCardProps = {
  name: string;
  description: string;
};

export default function FaqCard({ name, description }: FaqCardProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  const [icon, setIcon] = useState(AddSquareIcon);

  useEffect(() => {
    let s = setTimeout(() => {
      setIcon(showDropdown ? MinusSquareIcon : AddSquareIcon);
    }, 300);

    return () => {
      clearTimeout(s);
    };
  }, [showDropdown]);

  return (
    <div className="w-full border-b-[0.5px]">
      <div
        className="flex items-start justify-between py-7 cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <span className="text-[#5B5B5B] font-semibold text-[16px] md:text-[18px] tracking-wider max-w-[calc(100%-100px)]">
          {name}
        </span>
        <Image
          src={icon}
          alt=""
          className={`transition-all duration-500 ${
            showDropdown ? "rotate-0" : "rotate-[90deg]"
          }`}
        />
      </div>
      {showDropdown ? (
        <motion.div
          initial={{ y: "10%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          className="py-3 text-[14px] md:text-[18px] text-[#5B5B5B]"
        >
          {description}
        </motion.div>
      ) : (
        ""
      )}
    </div>
  );
}
