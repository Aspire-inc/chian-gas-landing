"use client";
import React, { useState } from "react";
import FacebookIcon from "@/assets/icons/facebook-icon.svg";
import TwitterIcon from "@/assets/icons/twitter-icon.svg";
import InstagramIcon from "@/assets/icons/instagram-icon.svg";
import LinkedInIcon from "@/assets/icons/linkedin-icon.svg";
import { flushSync } from "react-dom";
import ArrowLeft from "@/assets/icons/arrow-right.svg";
import ArrowRight from "@/assets/icons/arrow-right2.svg";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const DirectorsInfo = [
  {
    name: `Victor Anicho`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis
et felis ultrices tempus at sed eros. Lorem ipsum dolor sit amet, consectet
ur adipiscing elit. Mauris eget felis et felis ultrices tempus at sed eros.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis
et felis ultrices tempus at sed eros.`,
    image: "/Pics.png",
  },
  {
    name: `Smokey Okon`,
    description: `bobo`,
    image: "/Pics.png",
  },
  {
    name: `Ashawo Ajie`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis
et felis ultrices tempus at sed eros. Lorem ipsum dolor sit amet, consectet
ur adipiscing elit. Mauris eget felis et felis ultrices tempus at sed eros.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis
et felis ultrices tempus at sed eros.`,
    image: "/Pics.png",
    semi: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              eget felis et felis ultrices tempus at sed eros. Lorem ipsum dolor
              sit amet, consectet ur adipiscing elit. Mauris eget.`,
  },
  {
    name: `Jaguda Wiper`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis
et felis ultrices tempus at sed eros. Lorem ipsum dolor sit amet, consectet
ur adipiscing elit. Mauris eget felis et felis ultrices tempus at sed eros.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget felis
et felis ultrices tempus at sed eros.`,
    image: "/Pics.png",
    semi: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              eget felis et felis ultrices tempus at sed eros. Lorem ipsum dolor
              sit amet, consectet ur adipiscing elit. Mauris eget.`,
  },
];

function Directors() {
  return (
    <>
      <FirstDirector />
    </>
  );
}

export default Directors;

const FirstDirector = () => {
  const [currentDirectorIndex, setCurrentDirectorIndex] = useState(0);

  const [d, setD] = useState(1);

  const nextDirector = () => {
    flushSync(() => {
      setD(1);
      if (currentDirectorIndex < DirectorsInfo.length - 1) {
        setCurrentDirectorIndex(currentDirectorIndex + 1);
      }
    });
  };
  const previousDirector = () => {
    flushSync(() => {
      setD(-1);
      if (currentDirectorIndex > 0) {
        setCurrentDirectorIndex(currentDirectorIndex - 1);
      }
    });
  };
  const isLastDirector = currentDirectorIndex === DirectorsInfo.length - 1;
  const isFirstDirector = currentDirectorIndex === 0;

  return (
    <div className=" w-full flex items-center relative overflow-hidden">
      <div className="w-[calc(100%-429px)]  h-[667px] bg-[#FBFAFA] p-16">
        <div>
          <p className="text-blue-800 text-[19px] font-semibold  tracking-tight">
            Director
          </p>
        </div>
        <AnimatePresence key={currentDirectorIndex}>
          <motion.div
            initial={{ x: 300 * d, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300 * d, opacity: 0 }}
            transition={{ stiffness: 0 }}
            className="mt-5 h-[300px]"
          >
            <p className="text-neutral-700 text-[27px] font-bold  tracking-tight ">
              {DirectorsInfo[currentDirectorIndex]?.name}
            </p>
            <p className="text-zinc-600 text-lg font-normal  tracking-tight max-w-[600px] mt-2">
              {DirectorsInfo[currentDirectorIndex]?.description}
            </p>
            <p className="text-zinc-600 text-lg font-normal  tracking-tight max-w-[600px] mt-2">
              {DirectorsInfo[currentDirectorIndex]?.semi}
            </p>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-between items-center mt-10">
          <div className="flex gap-x-4">
            <div className="w-[50px] h-[50px] flex items-center justify-center rounded-[16px] border border-[#5B5B5B]">
              <Image src={FacebookIcon} alt="" />
            </div>
            <div className="w-[50px] h-[50px] flex items-center justify-center rounded-[16px] border border-[#5B5B5B]">
              <Image src={TwitterIcon} alt="" />
            </div>
            <div className="w-[50px] h-[50px] flex items-center justify-center rounded-[16px] border border-[#5B5B5B]">
              <Image src={InstagramIcon} alt="" />
            </div>
            <div className="w-[50px] h-[50px] flex items-center justify-center rounded-[16px] border border-[#5B5B5B]">
              <Image src={LinkedInIcon} alt="" />
            </div>
          </div>

          <div className="flex gap-x-10">
            <div
              className="w-[86px] h-[86px] bg-white rounded-full  flex items-center justify-center cursor-pointer"
              onClick={previousDirector}
            >
              <Image src={ArrowLeft} alt="" />
            </div>
            <div
              className="w-[86px] h-[86px] bg-white rounded-full  flex items-center justify-center cursor-pointer"
              onClick={nextDirector}
              // aria-disabled
            >
              <Image src={ArrowRight} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[429px] h-[638px]  rounded-t-[12rem] absolute top-[4rem] right-[1.5rem]">
        <Image src={DirectorsInfo[currentDirectorIndex]?.image} fill alt="" />
      </div>
    </div>
  );
};
