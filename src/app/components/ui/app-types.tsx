"use client";
import HalfSmartPhoneIcon from "@/assets/icons/half-smartphone-icon.svg";
import Image from "next/image";
import { useState } from "react";

export default function AppTypes() {
  const [appId, setAppId] = useState(0);
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-5 my-7">
        <button
          onClick={() => setAppId(0)}
          className={`border border-[#A7AEC1] ${
            appId === 0
              ? "bg-[#3F3F3F] text-white border-none"
              : "bg-white text-[#3F3F3F]"
          } hover:bg-[#3F3F3F] hover:text-white hover:border-none transition-all duration-500 w-[100px] text-[14px] lg:text-[16px] lg:w-[125px] h-[50px] flex items-center justify-center rounded-[100px] `}
        >
          User
        </button>
        <button
          onClick={() => setAppId(1)}
          className={`border border-[#A7AEC1] ${
            appId === 1
              ? "bg-[#3F3F3F] text-white border-none"
              : "bg-white text-[#3F3F3F]"
          } hover:bg-[#3F3F3F] hover:text-white hover:border-none transition-all duration-500 w-[100px] text-[14px] lg:text-[16px] lg:w-[125px] h-[50px] flex items-center justify-center rounded-[100px] `}
        >
          Vendor
        </button>
        {/* <button
          onClick={() => setAppId(2)}
          className={`border border-[#A7AEC1] ${
            appId === 2
              ? "bg-[#3F3F3F] text-white border-none"
              : "bg-white text-[#3F3F3F]"
          } hover:bg-[#3F3F3F] hover:text-white hover:border-none transition-all duration-500 w-[100px] text-[14px] lg:text-[16px] lg:w-[125px] h-[50px] flex items-center justify-center rounded-[100px] `}
        >
          Delivery
        </button> */}
      </div>

      <div className="w-full overflow-hidden">
        <div
          style={{ marginLeft: `-${appId * 100}%` }}
          className="w-[300%] flex transition-all gap-x-3 duration-1000"
        >
          <UserApp />
          <VendorApp />
          {/* <DeliveryApp /> */}
        </div>
      </div>
    </div>
  );
}

export const UserApp = () => {
  return (
    <div className="w-[33.3%] pt-12 sm:pt-20 px-4 md:px-14 bg-[#0043A7] rounded-[20px] mt-5 flex lg:justify-between items-start flex-wrap lg:flex-nowrap gap-y-7">
      <div>
        <div className="text-white ">
          <p className="text-inherit text-3xl xl:text-[50px] font-bold xl:leading-[61px]">
            Experience Ultimate
          </p>
          <p className="text-inherit text-3xl xl:text-[50px] font-bold xl:leading-[61px]">
            Convenience!
          </p>
        </div>
        <p className="max-w-[500px] mt-6 text-white text-[16px]">
          Never run out of gas unexpectedly! Track your gas levels effortlessly
          with real-time updates.
        </p>
      </div>

      <div className="flex justify-center w-full lg:w-auto">
        <div className="w-[300px] sm:w-[500px] h-[400px] relative">
          <Image src={HalfSmartPhoneIcon} alt="" fill />
        </div>
      </div>
    </div>
  );
};

const VendorApp = () => {
  return (
    <div className="w-[33.3%] pt-12 sm:pt-20 px-4 md:px-14 bg-[#0043A7] rounded-[20px] mt-5 flex lg:justify-between items-start flex-wrap lg:flex-nowrap gap-y-7">
      <div>
        <div className="text-white ">
          <p className="text-inherit text-3xl xl:text-[50px] font-bold xl:leading-[61px]">
            Manage Orders
          </p>
          <p className="text-inherit text-3xl xl:text-[50px] font-bold xl:leading-[61px]">
            Seamlessly
          </p>
        </div>
        <p className="max-w-[500px] mt-6 text-white text-[16px]">
          We've redefined the way you manage your customers and gas supply just
          from one app.
        </p>
      </div>

      <div className="flex justify-center w-full lg:w-auto">
        <div className="w-[300px] sm:w-[500px] h-[400px] relative">
          <Image src={HalfSmartPhoneIcon} alt="" fill />
        </div>
      </div>
    </div>
  );
};

const DeliveryApp = () => {
  return (
    <div className="w-[33.3%] pt-12 sm:pt-20 px-4 md:px-14 bg-[#0043A7] rounded-[20px] mt-5 flex lg:justify-between items-start flex-wrap lg:flex-nowrap gap-y-7">
      <div>
        <div className="text-white ">
          <p className="text-inherit text-3xl xl:text-[50px] font-bold xl:leading-[61px]">
            Order in seconds 3,
          </p>
          <p className="text-inherit text-3xl xl:text-[50px] font-bold xl:leading-[61px]">
            refill in minutes.
          </p>
        </div>
        <p className="max-w-[500px] mt-6 text-white text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
          felis et felis ultrices tempus at sed eros.
        </p>
      </div>

      <div className="flex justify-center w-full lg:w-auto">
        <div className="w-[300px] sm:w-[500px] h-[400px] relative">
          <Image src={HalfSmartPhoneIcon} alt="" fill />
        </div>
      </div>
    </div>
  );
};
