import Image from "next/image";
import React from "react";
import HeaderBg from "@/assets/icons/header.svg";
import DotDiffText from "../components/ui/dot-diff-text";
import { UserApp } from "../components/ui/app-types";
const newsAndUpdates = [
  {
    name: "Our launch date is here",
    description: `It's been an incredible journey to get to
this point, filled with hard work,
dedication, and unwavering...`,
    image: "/our-launch-date.png",
  },
  {
    name: "How to use accessories",
    description: `Using your Chian Gas level checker device
is a breeze. It's easier than you think. We
listed some steps...`,
    image: "/how-to-use-accessories.png",
  },
  {
    name: "Tips on safety",
    description: `Your safety is our top concern. We want to
ensure you use gas in your home with
confidence and peace of mind...`,
    image: "/tips-on-safety.png",
  },
];
function News() {
  return (
    <div className="w-full lg:px-6 xl:px-[5rem] mt-[3rem]">
      <div className="w-full ">
        <Image
          src={HeaderBg}
          alt=""
          width={100}
          height={100}
          className="w-full bg-center bg-cover"
        />
      </div>
      <div className="w-full  mt-[5rem] grid grid-cols-2 gap-10">
        <div className="p-[5rem] border-t-2">
          <DotDiffText>Our Launch Date Is Here</DotDiffText>
          <p className="mt-3 text-xl font-normal tracking-tight text-zinc-600">
            It's been an incredible journey to get to this point, filled with
            <br />
            hard work, dedication, and unwavering commitment to
            <br />
            delivering something truly exceptional. Now, the time has
            <br />
            come for you to experience what we've poured our hearts and
            <br />
            souls into.
          </p>
        </div>
        <div className="flex pt-5 space-x-10">
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
                  src={"/comments.png"}
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
                  src={"/comments.png"}
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
                  src={"/comments.png"}
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
        </div>
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
                <span className="text-[16px] text-[#DBDDE3]">July 5, 2023</span>
                <div>
                  <span className="text-[14px] sm:text-[16px] font-semibold text-[#5B5B5B]">
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

export default News;
