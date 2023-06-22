"use client";

import MinusSquareIcon from "@/assets/icons/minus-square-icon.svg";
import AddSquareIcon from "@/assets/icons/add-square-icon.svg";
import Image from "next/image";
import { useState } from "react";
import React from "react";

type FaqCardProps = {
  name: string;
  description: string;
};

export default function FaqCard({ name, description }: FaqCardProps) {
  const [showDropdown, setShowDropdown] = useState(false);

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
          src={showDropdown ? MinusSquareIcon : AddSquareIcon}
          alt=""
          className={`transition-all duration-700 ${
            showDropdown ? "rotate-0" : "rotate-[360deg]"
          }`}
        />
      </div>
      {showDropdown ? (
        <div className="py-3 text-[14px] md:text-[18px] text-[#5B5B5B]">
          {description}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
