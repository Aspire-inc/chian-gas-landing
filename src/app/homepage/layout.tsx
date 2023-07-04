'use client'
import LogoIcon from '@/assets/icons/logo-icon.svg'
import CaretDownIcon from '@/assets/icons/caret-down-icon.svg'
import SmsIcon from '@/assets/icons/sms-icon.svg'
import PhoneIcon from '@/assets/icons/phone-icon.svg'
import LocationIcon from '@/assets/icons/location-icon.svg'
import FacebookIcon from '@/assets/icons/facebook-icon.svg'
import TwitterIcon from '@/assets/icons/twitter-icon.svg'
import InstagramIcon from '@/assets/icons/instagram-icon.svg'
import LinkedInIcon from '@/assets/icons/linkedin-icon.svg'
import DownloadOnAppStoreIcon from '@/assets/icons/download-on-app-store-icon.svg'
import GetOnGooglePlayIcon from '@/assets/icons/get-on-google-play-icon.svg'
import CaretUpIcon from '@/assets/icons/caret-up-icon.svg'

import '../globals.css'

import Image from 'next/image'
import DesktopNav from '../components/ui/desktop-nav'
import MobileNav from '../components/ui/mobile-nav'
import React, {useRef} from 'react'

export default function HomePageLayout({children}: {children: React.ReactNode}) {
  const mainRef = useRef<HTMLDivElement>(null)

  function handleScrollToTop() {
    console.log(mainRef.current?.scrollTop)

    let s = setInterval(() => {
      if (mainRef.current!.scrollTop < 2) {
        clearInterval(s)
      }
      mainRef.current!.scrollTop = mainRef.current!.scrollTop - 70
    }, 0)
  }

  return (
    <main
      className="top-0 left-0 w-full h-full fixed overflow-auto overflow-x-hidden"
      id="home-main-wrapper"
      ref={mainRef}
    >
      <DesktopNav />
      <MobileNav />
      {children}
      <footer className="bg-[#FBFAFA] py-24 px-6 xl:px-28 mt-20">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-4 md:grid-rows-2 lg:grid-rows-1">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
              <div className="border-[0.5px] border-[#DBDDE3] w-[200px] mt-4"></div>
            </li>
            <li className="">
              <span className="text-[17px] xl:text-[18px] text-[#5B5B5B]">
                Lorem ipsum dolor sit amet.
              </span>
              <div className="border-[0.5px] border-[#DBDDE3] w-[200px] mt-4"></div>
            </li>
            <li className="">
              <span className="text-[17px] xl:text-[18px] text-[#5B5B5B]">
                Lorem ipsum dolor sit.
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
              <span className="text-[17px] xl:text-[18px] text-[#5B5B5B]">Company</span>
            </li>
            <li className="">
              <span className="text-[17px] xl:text-[18px] text-[#5B5B5B]">Support</span>
            </li>
            <li className="">
              <span className="text-[17px] xl:text-[18px] text-[#5B5B5B]">Safety</span>
            </li>
            <li className="">
              <span className="text-[17px] xl:text-[18px] text-[#5B5B5B]">Partner with Chian</span>
            </li>
            <li className="">
              <span className="text-[17px] xl:text-[18px] text-[#5B5B5B]">Solution</span>
            </li>
          </ul>
          <div className="flex flex-col gap-y-6">
            <span className="text-[#0043A7] tracking-wider text-[16px] font-bold">Social</span>

            <div className="flex gap-x-4">
              <div className="w-[60px] h-[60px] flex items-center justify-center rounded-[16px] border border-[#5B5B5B]">
                <Image src={FacebookIcon} alt="" />
              </div>
              <div className="w-[60px] h-[60px] flex items-center justify-center rounded-[16px] border border-[#5B5B5B]">
                <Image src={TwitterIcon} alt="" />
              </div>
              <div className="w-[60px] h-[60px] flex items-center justify-center rounded-[16px] border border-[#5B5B5B]">
                <Image src={InstagramIcon} alt="" />
              </div>
              <div className="w-[60px] h-[60px] flex items-center justify-center rounded-[16px] border border-[#5B5B5B]">
                <Image src={LinkedInIcon} alt="" />
              </div>
            </div>

            <span className="text-[#0043A7] tracking-wider text-[16px] font-bold">
              Get our apps
            </span>

            <div className="flex gap-3 flex-wrap xl:flex-nowrap">
              <Image src={DownloadOnAppStoreIcon} alt="" />
              <Image src={GetOnGooglePlayIcon} alt="" />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <a
            onClick={() => {
              handleScrollToTop()
            }}
            className="w-[49px] h-[49px] border-[1.5px] border-[#A7AEC1] flex items-center justify-center rounded-[10px] cursor-pointer mx-auto sm:mx-0"
          >
            <Image src={CaretUpIcon} alt="" />
          </a>
        </div>

        <div className="text-center mt-4">
          <span className="text-[#5B5B5B] tracking-wider">© 2023 All rights reserved.</span>
        </div>
      </footer>
    </main>
  )
}
