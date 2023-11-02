"use client";
import React from "react";
import RightHead from "@/assets/icons/pic.svg";
import LeftHead from "@/assets/icons/left-head.svg";
import Safe from "@/assets/icons/Safe.svg";
import HeadLocation from "@/assets/icons/head-location.svg";
import Image from "next/image";
import BallonArrow from "@/assets/icons/balloonArrow.svg";
import EditIcon from "@/assets/icons/edit.svg";
import DotDiffText from "../components/ui/dot-diff-text";
import OurValuesCard from "../components/ui/our-values-card";
import { UserApp } from "../components/ui/app-types";
const howItoWorks = [
  {
    name: " Communication",
    description: `For users, always communicate your gas
requirements clearly to the vendor,
including the type and quantity needed.
Vendors should verify these details before
delivery.`,
    image: "/document-text.png",
  },
  {
    name: "Delivery Safety",
    description: `Vendors should ensure safe and secure
delivery, while users should be present to
receive the delivery and inspect the gas
cylinder for any damage or leaks.`,
    image: "/document-text.png",
  },
  {
    name: " Installation Guidelines",
    description: ` If the vendor is responsible for installation,
they should follow safety guidelines to
avoid gas leaks during setup. Users must
ensure the vendor is qualified for the task.`,
    image: "/document-text.png",
  },
  {
    name: "Emergency Response",
    description: `Both vendors and users should be aware
of emergency protocols in case of gas
leaks, fires, or other incidents. This may
include knowing the location of gas shut-
off valves and how to use them.`,
    image: "/document-text.png",
  },
  {
    name: "Regular Maintenance",
    description: `Vendors should maintain their equipment
to ensure safe operation. Users should
also take care of the gas cylinders and
related equipment in their possession.`,
    image: "/document-text.png",
  },
  {
    name: "Safe Payment Practices",
    description: ` Ensure that financial transactions between
users and vendors are secure and
transparent. Pay a vendor when your
delivery is done.`,
    image: "/document-text.png",
  },
];
function SafetyTips() {
  return (
    <div className="py-4 ">
      <div className="relative w-full sm:hidden text-side max-h-96">
        <Image src={HeadLocation} alt="text-bubble" className="w-full" />
      </div>
      <div className="container hidden grid-cols-2 gap-10 mx-auto sm:grid">
        {/* <Image src={LeftHead} alt="left-header-section" />
        <Image src={RightHead} alt="right-header-section" /> */}

        <div className="relative flex items-center justify-center p-10 ">
          <div className="">
            <span className="text-blue-800 text-[1rem] lg:text-[5rem] sm:text-[2rem] font-bold  ">
              Safety Isn’t a<br />
              Costly Endeavor;
              <br />
              It's{" "}
            </span>
            <span className="font-medium  text-amber-500 lg:text-[5rem] sm:text-[2rem]">
              Invaluable
            </span>
            <div className="absolute top-0 left-[6rem]  ">
              <Image
                src={Safe}
                alt="Left"
                // className="w-full "
                width={60}
              />
            </div>
          </div>
          <div className="absolute top-0 flex flex-col justify-center h-full px-5 space-x-5 -left-10">
            <div className="w-[17px] h-[17px] bg-amber-500 rounded-full" />
            <div className="w-2.5 h-2.5 bg-blue-600 rounded-full" />
            <div className="w-3.5 h-3.5 bg-emerald-500 rounded-full" />
          </div>
        </div>
        <div className="z-[99999] relative">
          <div className="w-full ">
            <Image src={RightHead} alt="Left" className="w-full " />
          </div>
          <div className="absolute top-[-1rem] left-[-8rem] w-full">
            <Image src={BallonArrow} alt="bubble" className="w-full" />
          </div>
        </div>
      </div>
      <div className="w-full px-6  xl:px-[5rem] mt-[3rem]  overflow-x-hidden">
        <div className="mt-[10rem] p-10 w-full  grid grid-cols-2 gap-10">
          <div className="relative ">
            <div className="flex space-x-8">
              <div className="w-[341px] h-[333px] bg-sky-50 rounded-[20px]"></div>
              <div className="relative flex py-5 ">
                <p className="text-blue-800 text-[40px] font-bold  tracking-tight">
                  Upcoming Safety Posts{" "}
                </p>
                <div className="absolute top-[6.3rem] left-[7.5rem]">
                  <Image src={EditIcon} width={25} height={25} alt="Edit" />
                </div>
              </div>
            </div>
            <div className="w-[688px] h-[185px] bg-white rounded-[15px] absolute p-8 bottom-[-4rem] left-8 z-[999]">
              <p className="text-2xl font-semibold tracking-tight text-amber-500">
                Kennedy Danjuma{" "}
              </p>
              <p className="text-base font-normal tracking-tight text-zinc-600">
                Are you a Chian Gas user? Here's a quick guide to ensure you're
                using
                <br />
                your gas cylinder safely: Regular Check-ups | Proper Storage |
                Leak
                <br />
                Detection...
              </p>
            </div>
          </div>
          <div className="p-8 space-y-5 ">
            <div className="flex space-x-5 ">
              <div className="w-[239px] h-[159px] bg-zinc-300 rounded-[15px]"></div>
              <div>
                <p className="text-2xl font-semibold tracking-tight text-blue-800">
                  Safe Gas Usage in
                  <br />
                  the Kitchen
                </p>
                <span className="text-base font-medium tracking-tight text-amber-500">
                  Victor Anicho
                </span>
                <p className="text-base font-normal tracking-tight text-zinc-600">
                  Ensure your kitchen is well-ventilated.
                  <br />
                  Open windows or use an exhaust fan...
                </p>
              </div>
            </div>
            <div className="flex space-x-5 ">
              <div className="w-[239px] h-[159px] bg-zinc-300 rounded-[15px]"></div>
              <div>
                <p className="text-2xl font-semibold tracking-tight text-blue-800">
                  Emergency Gas Leak
                  <br />
                  Response
                </p>
                <span className="text-base font-medium tracking-tight text-amber-500">
                  Kennedy Danjuma
                </span>
                <p className="text-base font-normal tracking-tight text-zinc-600">
                  Knowing how to react during a gas
                  <br />
                  leak is crucial...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  mt-[5rem]">
          <DotDiffText className="flex items-center justify-center text-center">
            Safety Tips
          </DotDiffText>

          <div className="grid grid-cols-1 mt-[3.5rem]  md:grid-cols-2 xl:grid-cols-4 gap-7">
            {howItoWorks.map((data, i) => (
              <OurValuesCard
                tagVariant=""
                key={i}
                description={data.description}
                image={data.image}
                name={data.name}
              />
            ))}
          </div>
        </div>
        <div className="w-full overflow-hidden mt-[5rem]">
          <div
            // style={{ marginLeft: `-${appId * 100}%` }}
            className="w-[300%] flex mt-5 gap-x-3 "
          >
            <UserApp />
            {/* <VendorApp /> */}
            {/* <DeliveryApp /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SafetyTips;
