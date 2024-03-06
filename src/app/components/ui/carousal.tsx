"use client";

import NextIcon from "@/assets/icons/next-icon.svg";
import PrevIcon from "@/assets/icons/prev-icon.svg";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { flushSync } from "react-dom";
import Link from "next/link";
import { getOS } from "@/app/utils/userAgent";

const variants: Variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0,
      // skewY: direction > 0 ? "90deg" : "-90deg",
    };
  },
  animate: {
    x: "0%",
    opacity: 1,
    scale: 1,
    transitionDuration: "0.1s",
    // skewY: "0deg",
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? "-100%" : "100%",
      opacity: 1,
      transitionDuration: "0.8s",
      scale: 0,
      // skewY: direction > 0 ? "-90deg" : "90deg",
    };
  },
};

export default function Carousal() {
  const os = getOS();

  const content = [
    "/woman-feeding-man.png",
    "/gas-cooker.png",
    "/kitchen-utensils.png",
    "/woman-cooking.png",
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrevious = useCallback(() => {
    setDirection(-1);
    if (index === 0) {
      return setIndex(content.length - 1);
    }
    setIndex(index - 1);
  }, [index]);

  const handleNext = useCallback(() => {
    setDirection(1);
    if (index === content.length - 1) {
      return setIndex(0);
    }
    setIndex(index + 1);
  }, [index]);

  useEffect(() => {
    let s = setInterval(() => {
      handleNext();
    }, 7000);

    return () => {
      clearInterval(s);
    };
  }, [handleNext]);

  return (
    <div>
      <div
        id="carousal"
        className=" w-full overflow-hidden relative h-[calc(100vh-76px)] md:h-[700px] lg:h-[800px]"
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.section
            style={{
              backgroundImage: `url(${content[index]})`,
            }}
            key={content[index]}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={direction}
            transition={{ type: "ease-in" }}
            className="w-full h-full bg-[center_top] absolute top-0 left-0 bg-no-repeat"
          >
            <div
              style={{ background: "rgba(0,0,0,0.5)" }}
              className="h-full flex justify-center items-start flex-col flex-grow px-5 md:pl-[50px] lg:pl-[160px] xl:pl-[200px]"
            >
              <p className="font-bold text-white text-5xl lg:text-[80px] lg:leading-[98px]">
                Connect. Refill.
              </p>
              <p className="font-bold text-white text-5xl lg:text-[80px] lg:leading-[98px]">
                Cook with ease
              </p>
              <p className="text-white text-[16px] md:text-[20px] mb-10 max-w-[900px] mt-5">
                We've designed our platform with your convenience in mind. We
                connect you to your trusted gas vendor, ensuring that you refill
                your cylinders with just a few taps on your device.
              </p>

              <Link
                href={
                  os === "ios"
                    ? "https://apps.apple.com/ng/app/chian/id6464393536"
                    : "https://play.google.com/store/apps/details?id=com.chiangas.com"
                }
                target="_blank"
              >
                <button
                  className="text-white bg-[#F99617] w-[200px] h-[56px] rounded-[30px] flex items-center justify-center font-semibold cursor-pointer"
                  // onClick={() => alert("Sups Fool")}
                >
                  Download App
                </button>
              </Link>
            </div>
          </motion.section>
        </AnimatePresence>

        <div className="w-full h-full flex items-center justify-between px-5 md:px-14 gap-x-16 absolute top-0 left-0">
          <Image
            src={PrevIcon}
            alt=""
            onClick={handlePrevious}
            className="cursor-pointer hidden lg:block"
          />

          <Image
            src={NextIcon}
            alt=""
            onClick={handleNext}
            className="cursor-pointer hidden lg:block"
          />
        </div>
      </div>
      <div className="flex gap-x-4 justify-center mt-5">
        <div
          style={{
            background:
              index === 0
                ? "#F99617"
                : "rgba(249, 150, 23,  0.20000000298023224)",
          }}
          className="w-[40px] h-[5px] rounded-[50px] "
        ></div>
        <div
          style={{
            background:
              index === 1
                ? "#F99617"
                : "rgba(249, 150, 23,  0.20000000298023224)",
          }}
          className="w-[40px] h-[5px] rounded-[50px]"
        ></div>
        <div
          style={{
            background:
              index === 2
                ? "#F99617"
                : "rgba(249, 150, 23,  0.20000000298023224)",
          }}
          className="w-[40px] h-[5px] rounded-[50px]"
        ></div>
        <div
          style={{
            background:
              index === 3
                ? "#F99617"
                : "rgba(249, 150, 23,  0.20000000298023224)",
          }}
          className="w-[40px] h-[5px] rounded-[50px]"
        ></div>
      </div>
    </div>
  );
}
