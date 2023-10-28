"use client";
import Image from "next/image";
import React from "react";
import LogoIcon from "@/assets/icons/logo-icon.svg";
import CaretDownIcon from "@/assets/icons/caret-down-icon.svg";
import SmsIcon from "@/assets/icons/sms-icon.svg";
import PhoneIcon from "@/assets/icons/phone-icon.svg";
import LocationIcon from "@/assets/icons/location-icon.svg";
import FacebookIcon from "@/assets/icons/facebook-icon.svg";
import TwitterIcon from "@/assets/icons/twitter-icon.svg";
import InstagramIcon from "@/assets/icons/instagram-icon.svg";
import LinkedInIcon from "@/assets/icons/linkedin-icon.svg";
import DownloadOnAppStoreIcon from "@/assets/icons/download-on-app-store-icon.svg";
import GetOnGooglePlayIcon from "@/assets/icons/get-on-google-play-icon.svg";
import CaretUpIcon from "@/assets/icons/caret-up-icon.svg";
import Link from "next/link";
function Footer({ handleScrollToTop }: any) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FBFAFA] py-24 px-6 xl:px-28 mt-20">
      <div className="grid grid-cols-1 grid-rows-4 gap-5 md:grid-cols-2 lg:grid-cols-4 md:grid-rows-2 lg:grid-rows-1">
        <ul className="flex flex-col gap-y-5">
          <li>
            <Image src={LogoIcon} alt="" />
          </li>
          <li className="flex items-start gap-x-2">
            <Image src={SmsIcon} alt="" />
            <span className="text-[17px] xl:text-[18px] tracking-wider text-[#5B5B5B]">
              info@chiangas.com
            </span>
          </li>
          <li className="flex items-start gap-x-2">
            <Image src={PhoneIcon} alt="" />
            <span className="text-[17px] xl:text-[18px] tracking-wider text-[#5B5B5B]">
              +234 901 418 6951
            </span>
          </li>
          <li className="flex items-start gap-x-2">
            <Image src={LocationIcon} alt="" />
            <span className="text-[17px] xl:text-[18px] tracking-wider text-[#5B5B5B]">
              17C IBB way, Calabar, Cross River State. Nigeria
            </span>
          </li>
        </ul>
        <ul className="flex flex-col gap-y-5">
          <li>
            <span className="text-[#0043A7] text-[16px] tracking-wider font-bold">
              Recent News
            </span>
          </li>
          <li className="">
            <span className="text-[17px] xl:text-[18px] text-[#5B5B5B]">
              It's been an incredible journey to get to this point, filled
              with...
            </span>
            <div className="border-[0.5px] border-[#DBDDE3] w-[200px] mt-4"></div>
          </li>
          <li className="">
            <span className="text-[17px] xl:text-[18px] text-[#5B5B5B]">
              Using your Chian Gas level checker...
            </span>
            <div className="border-[0.5px] border-[#DBDDE3] w-[200px] mt-4"></div>
          </li>
          <li className="">
            <span className="text-[17px] xl:text-[18px] text-[#5B5B5B]">
              Your safety is our top...
            </span>
            <div className="border-[0.5px] border-[#DBDDE3] w-[200px] mt-4"></div>
          </li>
        </ul>
        <ul className="flex flex-col gap-y-5">
          <li>
            <span className="text-[#0043A7] text-[16px] tracking-wider font-bold">
              Recent News
            </span>
          </li>
          <li className="">
            <span className="text-[17px] xl:text-[18px] text-[#5B5B5B]">
              Company
            </span>
          </li>
          <li className="">
            <span className="text-[17px] xl:text-[18px] text-[#5B5B5B]">
              Support
            </span>
          </li>
          <li className="">
            <span className="text-[17px] xl:text-[18px] text-[#5B5B5B]">
              Safety
            </span>
          </li>
          <li className="">
            <span className="text-[17px] xl:text-[18px] text-[#5B5B5B]">
              Partner with Chian
            </span>
          </li>
          <li className="">
            <span className="text-[17px] xl:text-[18px] text-[#5B5B5B]">
              Solution
            </span>
          </li>
        </ul>
        <div className="flex flex-col gap-y-6">
          <span className="text-[#0043A7] tracking-wider text-[16px] font-bold">
            Social
          </span>

          <div className="flex gap-x-4">
            <div className="w-[60px] h-[60px] flex items-center justify-center rounded-[16px] border border-[#5B5B5B]">
              <Link
                href={
                  "https://www.facebook.com/profile.php?id=100067667208082&mibextid=ZbWKwL"
                }
                target="_blank"
              >
                <Image src={FacebookIcon} alt="" />
              </Link>
            </div>
            <div className="w-[60px] h-[60px] flex items-center justify-center rounded-[16px] border border-[#5B5B5B]">
              <Image src={TwitterIcon} alt="" />
            </div>
            <div className="w-[60px] h-[60px] flex items-center justify-center rounded-[16px] border border-[#5B5B5B]">
              <Link
                href={"https://instagram.com/chian.gas?igshid=MzNlNGNkZWQ4Mg=="}
                target="_blanks"
              >
                <Image src={InstagramIcon} alt="" />
              </Link>
            </div>
            <div className="w-[60px] h-[60px] flex items-center justify-center rounded-[16px] border border-[#5B5B5B]">
              <Image src={LinkedInIcon} alt="" />
            </div>
          </div>

          <span className="text-[#0043A7] tracking-wider text-[16px] font-bold">
            Get our apps
          </span>

          <div className="flex flex-wrap gap-3 xl:flex-nowrap">
            <Image src={DownloadOnAppStoreIcon} alt="" />
            <Image src={GetOnGooglePlayIcon} alt="" />
          </div>
        </div>
      </div>

      <div className="mt-20">
        <a
          onClick={() => {
            scrollToTop();
          }}
          className="w-[49px] h-[49px] border-[1.5px] border-[#A7AEC1] flex items-center justify-center rounded-[10px] cursor-pointer mx-auto sm:mx-0"
        >
          <Image src={CaretUpIcon} alt="" />
        </a>
      </div>

      <div className="mt-4 text-center">
        <span className="text-[#5B5B5B] tracking-wider">
          Chian Gas Limited ©️ 2023 All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
