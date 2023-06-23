"use client";

import NextIcon from "@/assets/icons/next-icon.svg";
import PrevIcon from "@/assets/icons/prev-icon.svg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { flushSync } from "react-dom";

const variants = {
  initial: () => {
    return {
      x: "100%",
      opacity: 0,
    };
  },
  animate: {
    x: "0%",
    opacity: 1,
  },
  exit: () => {
    return {
      x: "-100%",
      opacity: 0,
    };
  },
};

export default function Carousal() {
  const content = [
    "Connect. Refill. 1",
    "Connect. Refill. 2",
    "Connect. Refill. 3",
  ];

  const [index, setIndex] = useState(0);

  function handlePrevious() {
    if (index === 0) {
      return setIndex(content.length - 1);
    }
    setIndex(index - 1);
  }

  function handleNext() {
    if (index === content.length - 1) {
      return setIndex(0);
    }
    setIndex(index + 1);
  }

  return (
    <div className="w-full overflow-hidden">
      <AnimatePresence>
        <motion.section
          style={{
            backgroundImage: "url(/woman-feeding-man.png)",
          }}
          key={content[index]}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          // transition={{ type: "ease-in" }}
          className="w-full h-[calc(100vh-76px)] md:h-[700px] lg:h-[800px] bg-[center_top] bg-no-repeat"
        >
          <div
            style={{ background: "rgba(0,0,0,0.5)" }}
            className="w-full h-full flex items-center justify-between px-5 md:px-14 gap-x-16"
          >
            <Image
              src={PrevIcon}
              alt=""
              onClick={handlePrevious}
              className="cursor-pointer hidden lg:block"
            />
            <div className="h-full flex justify-center items-start flex-col flex-grow">
              <p className="font-bold text-white text-5xl lg:text-[80px] lg:leading-[98px]">
                {content[index]}
              </p>
              <p className="font-bold text-white text-5xl lg:text-[80px] lg:leading-[98px]">
                Cook with ease
              </p>
              <p className="text-white text-[16px] md:text-[20px] mb-10 max-w-[900px] mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                eget felis et felis ultrices tempus at sed eros. Vivamus
                fringilla ipsum metus, ac tincidunt sapien maximus eget. Quisque
                condimentum bibendum vestibulum.
              </p>

              <button className="text-white bg-[#F99617] w-[200px] h-[56px] rounded-[30px] flex items-center justify-center font-semibold">
                Download App
              </button>
            </div>
            <Image
              src={NextIcon}
              alt=""
              onClick={handleNext}
              className="cursor-pointer hidden lg:block"
            />
          </div>
        </motion.section>
      </AnimatePresence>

      <div className="flex gap-x-4 justify-center mt-5">
        <div className="w-[40px] h-[5px] rounded-[50px] "></div>
        <div className="w-[40px] h-[5px] rounded-[50px]"></div>
        <div className="w-[40px] h-[5px] rounded-[50px]"></div>
      </div>
    </div>
  );
}
