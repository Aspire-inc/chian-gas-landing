"use client";
import React, { useState } from "react";
import FacebookIcon from "@/assets/icons/facebook-icon.svg";
import TwitterIcon from "@/assets/icons/X.svg";
import InstagramIcon from "@/assets/icons/instagram-icon.svg";
import LinkedInIcon from "@/assets/icons/linkedin-icon.svg";
import { flushSync } from "react-dom";
import ArrowLeft from "@/assets/icons/arrow-right.svg";
import ArrowRight from "@/assets/icons/arrow-right2.svg";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import MobileDirectors from "./mobileDirectors";
import Link from "next/link";

const DirectorsInfo = [
  {
    title: `Founder/CEO`,
    name: `Victor Anicho`,
    description: `What remains crucial for us in Chian is our commitment to our value
creation, which is taking the fore in this economic crisis and challenging
business times. We tend to solve the right problem with the right people.
As i look forward to the journey ahead, I have no doubt in my mind that
the next 10 years will see us living out and transcending our version of a
truly great and exceptional organization with a great team and the right
customer base.`,
    image: "/victor.png",
    semi: `With Chian gas, the intention is simple: build something that is simple
and better, as well as meet the Customer demands.`,
  },
  {
    title: `Chief Operation Officer`,
    name: `Kennedy Danjuma`,
    description: `What remains crucial for us in Chian is our commitment to our value
creation, which is taking the fore in this economic crisis and challenging
business times. We tend to solve the right problem with the right people.
As i look forward to the journey ahead, I have no doubt in my mind that
the next 10 years will see us living out and transcending our version of a
truly great and exceptional organization with a great team and the right
customer base.`,
    image: "/ken.png",
    semi: `With Chian gas, the intention is simple: build something that is simple
and better, as well as meet the Customer demands.`,
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
    <div className="relative flex items-center w-full overflow-hidden ">
      <div className="lg:w-[calc(100%-429px)]  lg:h-[667px] bg-[#FBFAFA] lg:p-16">
        <div>
          <p className="text-blue-800 text-[19px] font-semibold  tracking-tight">
            {DirectorsInfo[currentDirectorIndex]?.title}
          </p>
        </div>
        <AnimatePresence key={currentDirectorIndex}>
          <motion.div
            initial={{ x: 300 * d, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300 * d, opacity: 0 }}
            transition={{ stiffness: 0 }}
            className="mt-5 2xl:h-[300px] "
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
        <MobileDirectors
          previousDirector={previousDirector}
          nextDirector={nextDirector}
          DirectorsInfo={DirectorsInfo}
          currentDirectorIndex={currentDirectorIndex}
        />
        <div className="flex-col items-center justify-between hidden mt-2 2xl:mt-10 lg:flex lg:flex-row">
          <div className="flex gap-x-4">
            <Link
              href={"https://www.facebook.com/Chenche4real?mibextid=ZbWKwL"}
              target="_blank"
              className="w-[50px] h-[50px] flex items-center justify-center rounded-[16px] border border-[#5B5B5B]"
            >
              <Image src={FacebookIcon} alt="" />
            </Link>
            <Link
              href={"https://x.com/Vic_Anicho?t=fSQfad1YHNhjA6Ga8UD8yg&s=09"}
              target="_blank"
              className="w-[50px] h-[50px] flex items-center justify-center rounded-[16px] border border-[#5B5B5B]"
            >
              <Image src={TwitterIcon} alt="" />
            </Link>
            <Link
              href={
                "https://instagram.com/anichovictor?igshid=OGQ5ZDc2ODk2ZA=="
              }
              target="_blank"
              className="w-[50px] h-[50px] flex items-center justify-center rounded-[16px] border border-[#5B5B5B]"
            >
              <Image src={InstagramIcon} alt="" />
            </Link>
            {/* <div className="w-[50px] h-[50px] flex items-center justify-center rounded-[16px] border border-[#5B5B5B]">
              <Image src={LinkedInIcon} alt="" />
            </div> */}
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
      <div className=" hidden lg:block lg:w-[429px] lg:h-[638px]  rounded-t-[12rem] rounded-b-[3rem] absolute bottom-0 lg:top-[1.8rem] right-[1.5rem]">
        <Image
          src={DirectorsInfo[currentDirectorIndex]?.image}
          fill
          className="rounded-t-[12rem] rounded-b-[3rem]"
          alt=""
        />
      </div>
    </div>
  );
};
