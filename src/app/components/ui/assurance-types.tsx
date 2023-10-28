"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

function AssuranceTypes() {
  const labels = [
    {
      name: "One",
      width: 50,
      contentTitle: "Safety First",
      contentDes: `Your safety is our top priority. We adhere to the strictest safety standards and regularly inspect our gas supply chain to ensure it's hazard-free.
`,
      contentSlug: `When you choose Chian Gas, you're choosing peace of mind.`,
      active: false, // Add an active property
    },
    {
      name: "Two",
      width: 150,
      contentTitle: " Quality Guaranteed",

      contentDes: `We stand by the quality of our gas. Our commitment to excellence means you can rely on us for consistent, high-quality gas delivery..

`,
      contentSlug: `We never compromise on the safety and satisfaction of our customers.`,
      active: false, // Add an active property
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
    },
    {
      name: "Four",
      width: 400,
      contentTitle: " Reliable Delivery",

      contentDes: `We know the importance of timely gas refills. Our efficient order processing and delivery system means you'll never be left without gas when you need it most..

`,
      contentSlug: `We value your time and convenience.`,
    },
    {
      name: "Five",
      width: 520,
      contentTitle: " Sustainable Solutions",

      contentDes: `Chian Gas is more than just a supplier; we're a partner in creating a greener future.

`,
      contentSlug: `We prioritize sustainable practices, reducing waste, and promoting eco-friendly options throughout ou service.`,
      active: false, // Add an active property
    },
    {
      name: "Six",
      width: 660,
      contentTitle: " Customer-Centric Support",

      contentDes: `Our dedicated customer support team is here to assist you every step of the way. Have questions or concerns? We're just a call or message away..

`,
      contentSlug: `Your satisfaction is our success.`,
      active: false, // Add an active property
    },
    // Add more labels with their respective widths
  ];

  const [currentContent, setCurrentContent] = useState<any>(labels[0]); // Initialize to null
  const [d, setD] = useState(1);
  const [active, setActive] = useState(false);
  const [width, setWidth] = useState(50); // Initial width
  const handleLabelClick = (label: any) => {
    setWidth(label.width);
    setCurrentContent(label);
    // if (label.name === label.name) {
    //   setActive(true);
    // }
    // labels.forEach((l) => (l.active = l === label));
  };
  // console.log("====================================");
  // console.log(width, "This is width");
  // console.log("====================================");
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex items-center justify-center w-full mt-5 ">
        <div className="relative ">
          <div className="flex items-center justify-between w-full gap-8 ">
            {labels.map((label, index) => (
              <p
                key={index}
                className={`text-xl font-medium tracking-tight text-center cursor-pointer text-zinc-600 w-[94px] h-[47px] flex items-center justify-center border-2 rounded-full mb-3`}
                onClick={() => handleLabelClick(label)}
              >
                {label.name}
              </p>
            ))}
          </div>
          <div
            className="absolute bottom-0 h-1 transition-all bg-blue-600 rounded-full ml-[1.2rem]"
            style={{ width: `${width}px` }}
          ></div>
        </div>
      </div>
      <AnimatePresence>
        <motion.div
          className="flex justify-between h-full mt-5 ml-5 space-x-10 "
          initial={{ x: 300 * d, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300 * d, opacity: 0 }}
          transition={{ stiffness: 0 }}
        >
          {currentContent && (
            <>
              <div>
                <div className="w-[558px] h-[372px] bg-zinc-300 rounded-[30px] hidden lg:block xl:block"></div>
              </div>
              {/* <div className="border-2"> */}
              <div className="h-full p-5 ">
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
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default AssuranceTypes;
