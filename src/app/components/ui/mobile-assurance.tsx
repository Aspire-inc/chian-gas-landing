"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import Trans from "@/assets/transp.png";
import SafeGas from "@/assets/safeGas.png";
import HandShake from "@/assets/shake.png";
import GasCyl from "@/assets/gas.png";
import GreenGas from "@/assets/greenGas.png";
import WOmanSmile from "@/assets/woman.png";
function MobileAssurance() {
  const labels = [
    {
      name: "One",
      width: 50,
      contentTitle: "Safety First",
      contentDes: `Your safety is our top priority. We adhere to the strictest safety standards and regularly inspect our gas supply chain to ensure it's hazard-free.
`,
      contentSlug: `When you choose Chian Gas, you're choosing peace of mind.`,
      active: true, // Add an active property
      image: SafeGas,
    },
    {
      name: "Two",
      width: 150,
      contentTitle: " Quality Guaranteed",

      contentDes: `We stand by the quality of our gas. Our commitment to excellence means you can rely on us for consistent, high-quality gas delivery..

`,
      contentSlug: `We never compromise on the safety and satisfaction of our customers.`,
      active: false, // Add an active property
      image: HandShake,
    },
    {
      name: "Three",
      width: 275,
      contentTitle: " Transparency Matters",

      contentDes: `We're committed to open and honest communication.
From order processing to delivery tracking, you'll
always have a clear view of your gas supply status.

`,
      contentSlug: `Trust and transparency go hand in hand at Chian Gas.`,
      active: false, // Add an active property
      image: Trans,
    },
    {
      name: "Four",
      width: 400,
      contentTitle: " Reliable Delivery",

      contentDes: `We know the importance of timely gas refills. Our efficient order processing and delivery system means you'll never be left without gas when you need it most..

`,
      contentSlug: `We value your time and convenience.`,
      image: GasCyl,
    },
    {
      name: "Five",
      width: 520,
      contentTitle: " Sustainable Solutions",

      contentDes: `Chian Gas is more than just a supplier; we're a partner in creating a greener future.,
      

`,
      contentSlug: `We prioritize sustainable practices, reducing waste, and promoting eco-friendly options throughout ou service.`,
      active: false, // Add an active property
      image: GreenGas,
    },
    {
      name: "Six",
      width: 660,
      contentTitle: " Customer-Centric Support",

      contentDes: `Our dedicated customer support team is here to assist you every step of the way. Have questions or concerns? We're just a call or message away..

`,
      contentSlug: `Your satisfaction is our success.`,
      active: false, // Add an active property
      image: WOmanSmile,
    },
    // Add more labels with their respective widths
  ];

  const [currentContent, setCurrentContent] = useState<any>(labels[0]); // Initialize to null
  const [activeLabel, setActiveLabel] = useState(labels[0]);
  const [d, setD] = useState(1);
  const [labelss, setLabels] = useState(labels);
  const [active, setActive] = useState(false);
  const [width, setWidth] = useState(50); // Initial width
  // const handleLabelClick = (label: any) => {
  //   setWidth(label.width);
  //   setCurrentContent(label);
  //   // if (label.name === label.name) {
  //   //   setActive(true);
  //   // }
  //   // labels.forEach((l) => (l.active = l === label));
  // };
  const handleLabelClick = (label: any) => {
    setWidth(label.width);
    setCurrentContent(label);

    // Update the active property for each label
    const updatedLabels = labels.map((l) => ({
      ...l,
      active: l.name === label.name,
    }));

    // Set the updated labels array
    setActiveLabel(label);
    setLabels(updatedLabels);
  };
  // console.log("====================================");
  // console.log(width, "This is width");
  // console.log("====================================");
  return (
    <div className="w-[380px]">
      <div className="w-full">
        <div className="flex items-center w-full pt-2 space-x-5 overflow-x-scroll ">
          {labelss.map((label, index) => (
            <p
              key={index}
              className={`px-[2rem]  rounded-2xl h-[47px]  flex items-center justify-center" ${
                label.active
                  ? "bg-[#F2F7FF] text-blue-500 font-semibold"
                  : "text-zinc-600"
              }  rounded-full mb-3`}
              onClick={() => handleLabelClick(label)}
            >
              {label.name}
            </p>
          ))}
        </div>
        {/* <div
          className=" h-1 transition-all bg-blue-600 rounded-full ml-[1.2rem] "
          style={{ width: `${width}px` }}
        ></div> */}
      </div>
      <div className="justify-between h-full mt-5 ml-5 space-x-10 lg:flex">
        {currentContent && (
          <>
            <div className="hidden lg:block">
              <div className="w-[558px] h-[372px] bg-zinc-300 rounded-[30px] hidden lg:block xl:block">
                <Image
                  src={currentContent?.image}
                  alt="transparency"
                  className="w-full h-full rounded-[30px]"
                  // fill
                />
              </div>
            </div>
            {/* <div className=""> */}
            <div className="h-full" style={{ margin: "0px" }}>
              <p className="text-xl font-semibold tracking-tight text-blue-800">
                {currentContent.contentTitle}
              </p>
              <p className="my-5">{currentContent.contentDes}</p>
              <p>{currentContent.contentSlug}</p>
              {/* </div> */}
            </div>
          </>
        )}
        {/* {labels?.find((label) => label.active) && (
            <div>
              <h2>{labels?.find((label) => label?.active).contentTitle}</h2>
              <p>{labels?.find((label) => label?.active).contentDes}</p>
              <p>{labels?.find((label) => label?.active).contentSlug}</p>
            </div>
          )} */}
      </div>
    </div>
  );
}

export default MobileAssurance;
