"use client";

import NextIcon from "@/assets/icons/next-icon.svg";
import PrevIcon from "@/assets/icons/prev-icon.svg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

export default function Carousal() {
  const content = [
    "Connect. Refill. 1",
    "Connect. Refill. 2",
    "Connect. Refill. 3",
    "Connect. Refill. 1",
  ];

  const carousalRef = useRef<HTMLDivElement>(null);

  const [slider, setSlider] = useState(1);

  const s = useRef<any>(null);
  const cs = useRef<any>(null);

  useEffect(() => {
    let carousal = carousalRef.current!;

    let sections = carousal.querySelectorAll("section");

    s.current = setTimeout(() => {
      carousal.classList.add("transition-all");
      carousal.classList.add("duration-[2s]");
      carousal.classList.add("delay-[2s]");
      carousal.style.marginLeft = `-${slider * 100}%`;

      flushSync(() => {
        setSlider(slider + 1);
      });

      console.log(slider);

      if (slider === 3) {
        cs.current = setTimeout(() => {
          carousal.classList.remove("transition-all");
          carousal.classList.remove("duration-[2s]");
          carousal.classList.remove("delay-[2s]");
          carousal.style.marginLeft = `0%`;
          setSlider(0);
        }, 3800);
      }
    }, 4000);

    return () => {
      clearTimeout(s.current);
      clearTimeout(cs.current);
    };
  }, [slider]);

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={carousalRef}
        className="flex w-[400%] items-center transition-all duration-[2s] delay-[2s]"
      >
        {content.map((data, i) => (
          <section
            style={{
              backgroundImage: "url(/woman-feeding-man.png)",
            }}
            key={i}
            className="w-[25%] h-[calc(100vh-76px)] md:h-[700px] lg:h-[800px] bg-[center_top] bg-no-repeat"
          >
            <div
              style={{ background: "rgba(0,0,0,0.5)" }}
              className="w-full h-full flex items-center justify-between px-5 md:px-14 gap-x-16"
            >
              <Image
                src={PrevIcon}
                alt=""
                onClick={() => {
                  //   clearTimeout(cs.current);
                  //   clearTimeout(s.current);
                  //   setSlider(slider - 1);
                  //   carousalRef.current!.style.marginLeft = `-${
                  //     (slider - 1) * 100
                  //   }%`;
                }}
                className="cursor-pointer hidden lg:block"
              />
              <div className="h-full flex justify-center items-start flex-col flex-grow">
                <p className="font-bold text-white text-5xl lg:text-[80px] lg:leading-[98px]">
                  {data}
                </p>
                <p className="font-bold text-white text-5xl lg:text-[80px] lg:leading-[98px]">
                  Cook with ease
                </p>
                <p className="text-white text-[16px] md:text-[20px] mb-10 max-w-[900px] mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris eget felis et felis ultrices tempus at sed eros.
                  Vivamus fringilla ipsum metus, ac tincidunt sapien maximus
                  eget. Quisque condimentum bibendum vestibulum.
                </p>

                <button className="text-white bg-[#F99617] w-[200px] h-[56px] rounded-[30px] flex items-center justify-center font-semibold">
                  Download App
                </button>
              </div>
              <Image
                src={NextIcon}
                alt=""
                className="cursor-pointer hidden lg:block"
              />
            </div>
          </section>
        ))}
      </div>

      <div className="flex gap-x-4 justify-center mt-5">
        <div
          style={{
            background:
              slider === 1 || slider === 0 || slider === 4
                ? "#F99617"
                : "rgba(249, 150, 23, 0.20000000298023224)",
          }}
          className="w-[40px] h-[5px] rounded-[50px] transition-all delay-[1s]"
        ></div>
        <div
          style={{
            background:
              slider === 2
                ? "#F99617"
                : "rgba(249, 150, 23, 0.20000000298023224)",
          }}
          className="w-[40px] h-[5px] rounded-[50px] transition-all delay-[1s]"
        ></div>
        <div
          style={{
            background:
              slider === 3
                ? "#F99617"
                : "rgba(249, 150, 23, 0.20000000298023224)",
          }}
          className="w-[40px] h-[5px] rounded-[50px] transition-all delay-[1s]"
        ></div>
      </div>
    </div>
  );
}
