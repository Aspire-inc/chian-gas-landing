"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

function AssuranceTypes() {
  const labels = [
    {
      name: "One",
      width: 50,
      contentTitle: " Lorem Ipsum Dolor",
      contentDes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing. Ut mi turpis,venenatis tristique sapien quis, vestibulum dapibus magna.",
      contentSlug:
        "Ut semper a purus sit amet vulputate. Nunc tristique ornaredignissim. Vivamus velit lacus, cursus ut purus.",
    },
    {
      name: "Two",
      width: 150,
      contentTitle: " Lorem Ipsum Dolor 2",

      contentDes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing. Ut mi turpis,venenatis tristique sapien quis, vestibulum dapibus magna.",
      contentSlug:
        "Ut semper a purus sit amet vulputate. Nunc tristique ornaredignissim. Vivamus velit lacus, cursus ut purus.",
    },
    {
      name: "Three",
      width: 275,
      contentTitle: " Lorem Ipsum Dolor 3",

      contentDes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing. Ut mi turpis,venenatis tristique sapien quis, vestibulum dapibus magna.",
      contentSlug:
        "Ut semper a purus sit amet vulputate. Nunc tristique ornaredignissim. Vivamus velit lacus, cursus ut purus.",
    },
    {
      name: "Four",
      width: 400,
      contentTitle: " Lorem Ipsum Dolor 4",

      contentDes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing. Ut mi turpis,venenatis tristique sapien quis, vestibulum dapibus magna.",
      contentSlug:
        "Ut semper a purus sit amet vulputate. Nunc tristique ornaredignissim. Vivamus velit lacus, cursus ut purus.",
    },
    {
      name: "Five",
      width: 520,
      contentTitle: " Lorem Ipsum Dolor 5",

      contentDes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing. Ut mi turpis,venenatis tristique sapien quis, vestibulum dapibus magna.",
      contentSlug:
        "Ut semper a purus sit amet vulputate. Nunc tristique ornaredignissim. Vivamus velit lacus, cursus ut purus.",
    },
    {
      name: "Six",
      width: 660,
      contentTitle: " Lorem Ipsum Dolor 6",

      contentDes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing. Ut mi turpis,venenatis tristique sapien quis, vestibulum dapibus magna.",
      contentSlug:
        "Ut semper a purus sit amet vulputate. Nunc tristique ornaredignissim. Vivamus velit lacus, cursus ut purus.",
    },
    // Add more labels with their respective widths
  ];

  const [currentContent, setCurrentContent] = useState<any>(labels[0]); // Initialize to null
  const [d, setD] = useState(1);

  const [width, setWidth] = useState(50); // Initial width
  const handleLabelClick = (label: any) => {
    setWidth(label.width);
    setCurrentContent(label);
  };
  // console.log("====================================");
  // console.log(width, "This is width");
  // console.log("====================================");
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative border-b-2">
        <div className="flex items-center justify-between w-full gap-8 ">
          {labels.map((label, index) => (
            <p
              key={index}
              className="text-xl font-medium tracking-tight text-center cursor-pointer text-zinc-600 w-[94px] h-[47px] flex items-center justify-center border-2 rounded-full mb-3"
              onClick={() => handleLabelClick(label)}
            >
              {label.name}
            </p>
          ))}
        </div>
        <div
          className="absolute h-1 bg-blue-600 rounded-full left-6"
          style={{ width: `${width}px` }}
        ></div>
      </div>
      <AnimatePresence>
        <motion.div
          className="flex items-center justify-between mt-5 space-x-10"
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
              <div>
                <div>
                  <p className="text-xl font-semibold tracking-tight text-blue-800">
                    {currentContent.contentTitle}
                  </p>
                  <p className="my-5">{currentContent.contentDes}</p>
                  <p>{currentContent.contentSlug}</p>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default AssuranceTypes;
