"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HowItWorksCard({
  name,
  description,
  image,
  tagVariant,
  slogan,
  feat,
}: {
  name: string;
  description: string;
  image: string;
  tagVariant: string;
  slogan: string;
  feat: string | null;
}) {
  return (
    <div className="transition-all bg-[#f1efed4d] hover:bg-[#f996174d] duration-500 p-6 rounded-[10px] relative w-full md:w-[350px] lg:w-[430px] ">
      <div className="flex flex-col gap-y-3">
        <h3 className="text-[#3F3F3F] text-[18px] sm:text-[24px] font-bold">
          {name}
        </h3>
        <p className="text-[#5B5B5B] text-[14px] max-w-[calc(100%-110px)] lg:max-w-[calc(100%-70px)] ">
          {description}
        </p>
        <p className="text-[#5B5B5B] text-[14px] max-w-[calc(100%-110px)] lg:max-w-[calc(100%-70px)]  ">
          {slogan}
        </p>
        <p className="text-[#5B5B5B] text-[14px] max-w-[calc(100%-110px)] lg:max-w-[calc(100%-110px)]  ">
          {feat}
        </p>
      </div>

      <div className="absolute w-[111px] h-[112px] bottom-[13px] right-[20px] rotate-[15deg]">
        <Image src={image} alt="" fill className="rounded-[14px]" />
        <motion.div
          initial={{
            left: "0%",
            borderRadius: "0",
          }}
          animate={{
            left: "calc(100% - 8px)",
            borderRadius: "100%",
          }}
          transition={{ duration: 10, repeatType: "reverse", repeat: Infinity }}
          className="w-[20px] h-[20px] opacity-[0.7] absolute top-[calc(100%-10px)] left-0 bg-[#0066FF]"
        ></motion.div>
      </div>
    </div>
  );
}
