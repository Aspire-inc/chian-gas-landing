"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function OurValuesCard({
  name,
  description,
  image,
  tagVariant,
}: {
  name: string;
  description: string;
  image: string;
  tagVariant: string;
}) {
  return (
    <div className="transition-all bg-white shadow  p-5 rounded-[10px] relative w-full md:w-[350px] lg:w-[300px] ">
      <div className="w-[57px] h-[57px] bg-neutral-50 rounded-[10px] flex items-center justify-center">
        <Image
          src={image}
          alt=""
          width={40}
          height={40}
          className="rounded-[14px]"
        />
      </div>
      <div className="flex flex-col mt-8 gap-y-3">
        <h3 className="text-[#3F3F3F] text-base lg:text-[18px] font-semibold tracking-tight">
          {name}
        </h3>
        <p className="text-[#5B5B5B] text-[14px] ">{description}</p>
      </div>

      {/* <div className="absolute w-[111px] h-[112px] bottom-[13px] right-[20px] rotate-[15deg]">
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
      </div> */}
    </div>
  );
}
