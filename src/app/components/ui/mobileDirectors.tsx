import React, { useState } from "react";
import FacebookIcon from "@/assets/icons/facebook-icon.svg";
import TwitterIcon from "@/assets/icons/X.svg";
import InstagramIcon from "@/assets/icons/instagram-icon.svg";
import LinkedInIcon from "@/assets/icons/linkedin-icon.svg";
import ArrowLeft from "@/assets/icons/arrow-right.svg";
import ArrowRight from "@/assets/icons/arrow-right2.svg";
import Image from "next/image";
import { flushSync } from "react-dom";
import Link from "next/link";
function MobileDirectors({
  previousDirector,
  nextDirector,
  currentDirectorIndex,
  DirectorsInfo,
}: any) {
  // const [currentDirectorIndex, setCurrentDirectorIndex] = useState(0);

  // const [d, setD] = useState(1);

  // const nextDirector = () => {
  //   flushSync(() => {
  //     setD(1);
  //     if (currentDirectorIndex < DirectorsInfo.length - 1) {
  //       setCurrentDirectorIndex(currentDirectorIndex + 1);
  //     }
  //   });
  // };
  // const previousDirector = () => {
  //   flushSync(() => {
  //     setD(-1);
  //     if (currentDirectorIndex > 0) {
  //       setCurrentDirectorIndex(currentDirectorIndex - 1);
  //     }
  //   });
  // };
  return (
    <div className="">
      <div className="relative flex items-center justify-between mt-10 lg:hidden">
        <div>
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
            {/* <div className="w-[50px] h-[50px] flex items-center justify-center rounded-[16px] border border-[#5B5B5B]">
              <Image src={InstagramIcon} alt="" />
            </div> */}
            <Link
              href={
                "https://instagram.com/anichovictor?igshid=OGQ5ZDc2ODk2ZA=="
              }
              target="_blank"
              className="w-[50px] h-[50px] flex items-center justify-center rounded-[16px] border border-[#5B5B5B]"
            >
              <Image src={InstagramIcon} alt="" />
            </Link>
          </div>

          <div className="flex mt-5 mb-5 gap-x-5">
            <div
              className="w-[60px] h-[60px] bg-white rounded-full  flex items-center justify-center cursor-pointer"
              onClick={previousDirector}
            >
              <Image src={ArrowLeft} alt="" />
            </div>
            <div
              className="w-[60px] h-[60px] bg-white rounded-full  flex items-center justify-center cursor-pointer"
              onClick={nextDirector}
              // aria-disabled
            >
              <Image src={ArrowRight} alt="" />
            </div>
          </div>
        </div>
        <div className=" w-[120px] h-[150px] rounded-t-[12rem] rounded-b-[1rem] absolute right-0">
          <Image
            src={DirectorsInfo[currentDirectorIndex]?.image}
            fill
            alt=""
            className="rounded-t-[12rem] rounded-b-[1rem]"
            // width={80}
            // height={80}
          />
        </div>
      </div>
    </div>
  );
}

export default MobileDirectors;
