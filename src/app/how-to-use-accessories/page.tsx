"use client";
import Image from "next/image";
import React from "react";
import HeaderBg from "@/assets/icons/how-to.svg";
import MobileBg from "@/assets/icons/MobileAcc.svg";
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
    name: "Cooking is fun",
    description: `Just like discovering innovative energy solutions
such as the Chian gas project. Just as we
experiment with flavors in the kitchen...`,
    image: "/cooking.png",

    link: "/cooking-is-fun",
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
function HowToUseAccessories() {
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
          <DotDiffText>How to Use Accessories</DotDiffText>
          <p className="mt-3 text-xl font-normal tracking-tight text-zinc-600">
            Using your Chian Gas level checker device is a breeze. It's easier
            than you think. We listed some steps
          </p>
          <br />

          <p className="mt-3 text-xl font-normal tracking-tight text-zinc-600">
            <b>Mounting Made Simple:</b>
            <br />
            Begin by securely mounting the Chian Gas level checker device on
            your gas cylinder. Find a suitable spot where it sits snugly,
            ensuring a stable connection. Don't worry; no advanced tools or
            engineering degrees required!
          </p>
          <br />

          <p className="mt-3 text-xl font-normal tracking-tight text-zinc-600">
            <b>Sync with Your App:</b>
            <br />
            Open the Chian Gas app on your smartphone. Navigate to the device
            sync section and follow the straightforward instructions to pair
            your app with the level checker device. This step is crucial for
            receiving real-time updates on your gas levels.
          </p>
          <br />

          <p className="mt-3 text-xl font-normal tracking-tight text-zinc-600">
            <b>Real-Time Gas Insights:</b>
            <br />
            Once synced, the Chian Gas app becomes your culinary command center.
            Check your gas levels instantly. No more guesswork or uncertainty –
            you're in control. Enjoy the peace of mind that comes with knowing
            exactly where your gas levels stand.
          </p>
          <br />

          <p className="mt-3 text-xl font-normal tracking-tight text-zinc-600">
            <b>Notifications for Refill:</b>
            <br />
            Set up refill notifications based on your usage patterns. The Chian
            Gas app understands your culinary rhythms and ensures you're
            notified in advance. Say goodbye to unexpected gas shortages
            mid-cooking!
          </p>
          <br />

          <p className="mt-3 text-xl font-normal tracking-tight text-zinc-600">
            <b>Explore Additional Features:</b>
            <br />
            Dive deeper into the Chian Gas app. Explore features like recipe
            recommendations, cooking tips, and a community of fellow food
            enthusiasts. Your Chian Gas experience extends beyond just refills –
            it's a culinary adventure.
          </p>
          <br />

          <p className="mt-3 text-xl font-normal tracking-tight text-zinc-600">
            <b>Eco-Friendly Cooking:</b>
            <br />
            By using the Chian Gas level checker device, you're contributing to
            a greener planet. Monitor your gas consumption efficiently, reducing
            waste and promoting a more sustainable approach to cooking.
          </p>
          <br />

          <p className="mt-3 text-xl font-normal tracking-tight text-zinc-600">
            <b>Enjoy Stress-Free Cooking:</b>
            <br />
            With your Chian Gas accessories in place, enjoy stress-free cooking.
            Focus on creating delightful dishes, and let the technology take
            care of the rest. It's about making your culinary journey a joyful
            one.
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

export default HowToUseAccessories;
