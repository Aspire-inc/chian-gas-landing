"use client";

import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";

export default function HowItWorksCard({
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
  const [pos, setPos] = useState({
    left: "-8px",
    top: "-8px",
    borderRadius: "100%",
    background: "#0066FF",
  });

  useEffect(() => {
    let positions = [
      {
        left: "calc(100% - 8px)",
        top: "-8px",
        borderRadius: "0%",
        background: "#F99617",
      },
      {
        left: "calc(100% - 8px)",
        top: "calc(100% - 8px)",
        borderRadius: "100%",
        background: "black",
      },
      {
        left: "-8px",
        top: "calc(100% - 8px)",
        borderRadius: "0%",
        background: "darkred",
      },
      {
        left: "-8px",
        top: "-8px",
        borderRadius: "100%",
        background: "#0066FF",
      },
    ];
    let s = setInterval(() => {
      let firstPosition = positions[0];
      setPos(firstPosition);

      positions.shift();
      positions.push(firstPosition);
    }, 2000);

    return () => {
      clearInterval(s);
    };
  }, []);

  return (
    <div className="p-6 bg-[#F1EFED] rounded-[10px] relative w-full md:w-[350px] lg:w-[430px] h-[226px]">
      <div className="flex flex-col gap-y-3">
        <h3 className="text-[#3F3F3F] text-[18px] sm:text-[24px] font-bold">
          {name}
        </h3>
        <p className="text-[#5B5B5B] text-[14px] max-w-[calc(100%-110px)] lg:max-w-[calc(100%-70px)]">
          {description}
        </p>
      </div>

      <div className="absolute w-[111px] h-[112px] bottom-[13px] right-[20px] rotate-[15deg]">
        <Image src={image} alt="" fill className="rounded-[14px]" />
        <div
          style={{ ...pos }}
          className=" w-[20px] h-[20px]  opacity-[0.7] absolute transition-all duration-[2s]"
        ></div>
      </div>
    </div>
  );
}
