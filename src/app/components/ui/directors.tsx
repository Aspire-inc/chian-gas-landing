"use client";
import React from "react";

function Directors() {
  return (
    <>
      <FirstDirector />
    </>
  );
}

export default Directors;

const FirstDirector = () => {
  return (
    <>
      <div className="border-2 w-full flex items-center relative">
        <div className="w-[calc(100%-429px)] border-2 h-[667px] bg-[#FBFAFA] p-16">
          <p className="text-blue-800 text-[19px] font-semibold  tracking-tight">
            Director
          </p>
          <p className="text-neutral-700 text-[27px] font-bold  tracking-tight">
            Victor Anicho
          </p>
          <p className="text-zinc-600 text-lg font-normal  tracking-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
            felis
            <br />
            et felis ultrices tempus at sed eros. Lorem ipsum dolor sit amet,
            consectet
            <br />
            ur adipiscing elit. Mauris eget felis et felis ultrices tempus at
            sed eros.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
            felis
            <br />
            et felis ultrices tempus at sed eros.
          </p>
        </div>
        <div className="w-[429px] h-[638px] border-2 rounded-t-[12rem] absolute top-[4rem] right-[4rem]"></div>
      </div>
    </>
  );
};
