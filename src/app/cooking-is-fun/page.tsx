"use client";
import Image from "next/image";
import React from "react";
import HeaderBg from "@/assets/icons/cooking-is-fun.svg";
import MobileBg from "@/assets/icons/MobileCook.svg";
import DotDiffText from "../components/ui/dot-diff-text";
import { UserApp } from "../components/ui/app-types";
import { useRouter } from "next/navigation";
const newsAndUpdates = [
  {
    name: "Our launch date is here",
    description: `It's been an incredible journey to get to
this point, filled with hard work,
dedication, and unwavering...`,
    image: "/our-launch-date.png",
    link: "/news",
  },
  {
    name: "How to use accessories",
    description: `Using your Chian Gas level checker device
is a breeze. It's easier than you think. We
listed some steps...`,
    image: "/how-to-use-accessories.png",
    link: "/how-to-use-accessories",
  },
  {
    name: "Tips on safety",
    description: `Your safety is our top concern. We want to
ensure you use gas in your home with
confidence and peace of mind...`,
    image: "/tips-on-safety.png",
    link: "/tips-on-safety",
  },
];
function CookingIsFun() {
  const router = useRouter();
  return (
    <div className="w-full lg:px-6 xl:px-[5rem] mt-[3rem]">
      <div className="w-full ">
        <Image
          src={HeaderBg}
          alt=""
          width={100}
          height={100}
          className="hidden w-full bg-center bg-cover lg:block"
        />
        <Image
          src={MobileBg}
          alt=""
          width={100}
          height={100}
          className="w-full bg-center bg-cover lg:hidden"
        />
      </div>
      <div className="w-full  mt-[5rem]">
        <div className=" p-4 lg:p-[5rem] lg:border-t-2">
          <DotDiffText>Cooking is Fun</DotDiffText>
          <p className="mt-3 text-xl font-normal tracking-tight text-zinc-600">
            Cooking isn't merely a daily chore; it's a canvas where creativity
            meets necessity, where ingredients transform into art, and where
            every dish tells a story. Here at Chian Gas, we understand the
            profound joy that comes with preparing a delightful meal, and we're
            on a mission to make your cooking experience not just convenient but
            downright fun!
            <br />
            <br />
            Imagine a cooking journey where every step is a pleasure, where
            you're in control, and where the flame of your culinary passion
            burns bright. Chian Gas is not just about delivering gas; it's about
            delivering an experience. With Chian Gas, it's time to transform
            your kitchen into a haven of culinary adventures. Embrace the joy of
            cooking, explore new flavors, and let every meal be a celebration
          </p>
        </div>
        {/* <div className="hidden pt-5 space-x-10 lg:flex">
          <div className="flex flex-col items-start justify-start ">
            <div className=" w-[300px] h-[100px] rounded-tr-[30px] rounded-tl-[30px] rounded-bl-[30px] bg-[#0043A7] flex items-center px-5">
              <p className="text-xs font-normal tracking-tight text-white">
                The moment we've all been eagerly
                <br />
                awaiting has arrived – our much-
                <br />
                anticipated launch date is finally here
              </p>
            </div>
            <div className="flex items-end justify-end w-full mt-2">
              <div className=" h-[50px] w-[50px] rounded-full">
                <Image
                  src={"/q1.png"}
                  alt=""
                  width={50}
                  height={50}
                  className="w-full h-full rounded-full"
                />
              </div>
            </div>
            <div className=" w-[300px] h-[120px] rounded-tr-[30px] rounded-tl-[30px] rounded-bl-[30px] bg-[#0043A7] flex items-center px-5 mt-8">
              <p className="flex items-center text-xs font-normal tracking-tight text-white">
                Get ready to embark on an exciting
                <br />
                adventure with us as we unveil our
                <br />
                innovative platform and the countless
                <br />
                possibilities it brings.
              </p>
            </div>
            <div className="flex items-end justify-end w-full ">
              <div className=" h-[50px] w-[50px] rounded-full mt-2">
                <Image
                  src={"/q2.png"}
                  alt=""
                  width={50}
                  height={50}
                  className="w-full h-full rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start mt-[5rem]">
            <div className=" w-[300px] h-[100px] rounded-tr-[30px] rounded-tl-[30px] rounded-bl-[30px] bg-[#0043A7] flex items-center px-5">
              <p className="text-xs font-normal tracking-tight text-white">
                We can't wait to share this moment with
                <br />
                you, as we step into a new chapter of
                <br />
                amazing opportunities.
              </p>
            </div>
            <div className="flex items-end justify-end w-full ">
              <div className=" h-[50px] w-[50px] rounded-full mt-2">
                <Image
                  src={"/q3.png"}
                  alt=""
                  width={50}
                  height={50}
                  className="w-full h-full rounded-full"
                />
              </div>
            </div>
            <div className=" w-[300px] h-[120px] rounded-tr-[30px] rounded-tl-[30px] rounded-bl-[30px] bg-[#0043A7] flex items-center px-5 mt-8">
              <p className="text-xs font-normal tracking-tight text-white">
                Stay tuned for more details as we
                <br />
                approach the big day. The best is yet t0
                <br />
                come!
              </p>
            </div>
            <div className="flex items-end justify-end w-full ">
              <div className=" h-[50px] w-[50px] rounded-full mt-2">
                <Image
                  src={"/comments.png"}
                  alt=""
                  width={50}
                  height={50}
                  className="w-full h-full rounded-full"
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="mt-10 md:mt-32 max-w-[95%] xl:max-w-[80%] mx-auto">
        <DotDiffText className="w-full text-center ">
          Upcoming Articles
        </DotDiffText>
        <div className="grid grid-cols-1 grid-rows-3 mt-10 sm:grid-cols-2 lg:grid-cols-3 sm:grid-rows-2 lg:grid-rows-1 gap-7">
          {newsAndUpdates.map((data, i) => (
            <div key={i} className="flex flex-col items-center md:items-start">
              <div className="max-w-[350px] w-full h-[200px] relative overflow-hidden rounded-[12px]">
                <Image src={data.image} alt="" fill />
              </div>
              <p className="text-[#3F3F3F] text-[20px] sm:text-[24px] font-bold my-5">
                {data.name}
              </p>
              <p className="text-[14px] sm:text-[16px] text-[#5B5B5B]">
                {data.description}
              </p>

              <div className="flex items-center justify-between w-full mt-5 pr-14">
                <span className="text-[16px] text-[#DBDDE3]">
                  10th December, 2023
                </span>
                <div>
                  <span
                    className="text-[14px] sm:text-[16px] font-semibold text-[#5B5B5B] cursor-pointer"
                    onClick={() => router.push(`${data?.link}`)}
                  >
                    Read More
                  </span>
                  <div className="w-full h-[3px] bg-[#FFDCAE]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <div
          // style={{ marginLeft: `-${appId * 100}%` }}
          className="w-[300%] flex mt-[5rem] gap-x-3 "
        >
          <UserApp />
          {/* <VendorApp /> */}
          {/* <DeliveryApp /> */}
        </div>
      </div>
    </div>
  );
}

export default CookingIsFun;
