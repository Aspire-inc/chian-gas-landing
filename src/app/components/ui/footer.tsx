"use client";
import Image from "next/image";
import React from "react";
import LogoIcon from "@/assets/icons/logo-icon.svg";
import CaretDownIcon from "@/assets/icons/caret-down-icon.svg";
import SmsIcon from "@/assets/icons/sms-icon.svg";
import PhoneIcon from "@/assets/icons/phone-icon.svg";
import LocationIcon from "@/assets/icons/location-icon.svg";
import FacebookIcon from "@/assets/icons/facebook-icon.svg";
import TwitterIcon from "@/assets/icons/X.svg";
import InstagramIcon from "@/assets/icons/instagram-icon.svg";
import LinkedInIcon from "@/assets/icons/linkedin-icon.svg";
import DownloadOnAppStoreIcon from "@/assets/icons/download-on-app-store-icon.svg";
import GetOnGooglePlayIcon from "@/assets/icons/get-on-google-play-icon.svg";
import CaretUpIcon from "@/assets/icons/caret-up-icon.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
function Footer({ handleScrollToTop }: any) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const router = useRouter();

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
              <Link
                href="mailto:
              info@chiangas.com
              
              "
              >
                info@chiangas.com
              </Link>
            </span>
          </li>
          <li className="flex items-start gap-x-2">
            <Image src={PhoneIcon} alt="" />
            <span className="text-[17px] xl:text-[18px] tracking-wider text-[#5B5B5B]">
              <Link
                href="tel:
              +234 901 418 6951
              
              "
              >
                +234 901 418 6951
              </Link>
            </span>
          </li>
          <li className="flex items-start gap-x-2">
            <Image src={LocationIcon} alt="" />
            <span className="text-[17px] xl:text-[18px] tracking-wider text-[#5B5B5B]">
              Suite 10 DDS Plaza, km 24 Airport Road, Rukpokwu, Obio/Akpor LGA
              Rivers state
            </span>
          </li>
        </ul>
        <ul className="flex flex-col gap-y-5">
          <li>
            <span className="text-[#0043A7] text-[16px] tracking-wider font-bold">
              Recent News
            </span>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => router.push("/cooking-is-fun")}
          >
            <span className="text-[17px] xl:text-[18px] text-[#5B5B5B]">
              It's been an incredible journey to get to this point, filled
              with...
            </span>
            <div className="border-[0.5px] border-[#DBDDE3] w-[200px] mt-4"></div>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => router.push("/how-to-use-accessories")}
          >
            <span className="text-[17px] xl:text-[18px] text-[#5B5B5B]">
              Using your Chian Gas level checker...
            </span>
            <div className="border-[0.5px] border-[#DBDDE3] w-[200px] mt-4"></div>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => router.push("/tips-on-safety")}
          >
            <span className="text-[17px] xl:text-[18px] text-[#5B5B5B]">
              Your safety is our top...
            </span>
            <div className="border-[0.5px] border-[#DBDDE3] w-[200px] mt-4"></div>
          </li>
        </ul>
        <ul className="flex flex-col gap-y-5">
          <li>
            <span className="text-[#0043A7] text-[16px] tracking-wider font-bold">
              Navigate
            </span>
          </li>
          <li className="">
            <span className="text-[17px] xl:text-[18px] text-[#5B5B5B]">
              Company
            </span>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              router.push("/support");
            }}
          >
            <span className="text-[17px] xl:text-[18px] text-[#5B5B5B]">
              Support
            </span>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              router.push("/safety-tips");
            }}
          >
            <span className="text-[17px] xl:text-[18px] text-[#5B5B5B]">
              Safety
            </span>
          </li>
          {/* <li className="">
            <span className="text-[17px] xl:text-[18px] text-[#5B5B5B]">
              Partner with Chian
            </span>
          </li> */}
          <li
            className="cursor-pointer"
            onClick={() => {
              router.push("/privacy-policy");
            }}
          >
            <span className="text-[17px] xl:text-[18px] text-[#5B5B5B]">
              Privacy Policy
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
              <Link href={"https://twitter.com/ChianGas51995"} target="_blank">
              <Image src={TwitterIcon} alt="" />
              </Link>
            </div>
            <div className="w-[60px] h-[60px] flex items-center justify-center rounded-[16px] border border-[#5B5B5B]">
              <Link
                href={"https://instagram.com/chian.gas?igshid=MzNlNGNkZWQ4Mg=="}
                target="_blanks"
                className="hover:text-white"
              >
                <Image src={InstagramIcon} alt="" />
              </Link>
            </div>
            <div className="w-[60px] h-[60px] flex items-center justify-center rounded-[16px] border border-[#5B5B5B]">
              <Image src={LinkedInIcon} alt="" />
            </div>
          </div>

          <span className="text-[#0043A7] tracking-wider text-[16px] font-bold">
            Get Our User Apps
          </span>

          <div className="flex flex-wrap gap-3 xl:flex-nowrap">
            <Link href={'https://apps.apple.com/ng/app/chian/id6464393536'} target="_blanks">
            <Image src={DownloadOnAppStoreIcon} alt="" />
            </Link>
            <Link href={"https://play.google.com/store/apps/details?id=com.chiangas.com"} target="_blank">

            <Image src={GetOnGooglePlayIcon} alt="" />
            </Link>
          </div>
          <span className="text-[#0043A7] tracking-wider text-[16px] font-bold">
            Get Our Vendor Apps
          </span>

          <div className="flex flex-wrap gap-3 xl:flex-nowrap">
            <Link href={"https://apps.apple.com/ng/app/chian-vendor/id6473828109"} target="_blank">
            <Image src={DownloadOnAppStoreIcon} alt="" />
            </Link>
            <Link href={"https://play.google.com/store/apps/details?id=com.chianvendor.com"} target="_blank">
            <Image src={GetOnGooglePlayIcon} alt="" />
            </Link>
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
