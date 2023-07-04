"use client";
import Image from "next/image";
import LogoIcon from "@/assets/icons/logo-icon.svg";
import FacebookIcon from "@/assets/icons/facebook-icon.svg";
import TwitterIcon from "@/assets/icons/twitter-icon.svg";
import LinkedInIcon from "@/assets/icons/linkedin-icon.svg";
import InstagramIcon from "@/assets/icons/instagram-icon.svg";
import TruckWithCenterCircleIcon from "@/assets/icons/truck-with-center-circle-icon.svg";
import GirlHoldingPhoneIcon from "@/assets/icons/girl-holding-phone-icon.svg";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useState } from "react";
import Button from "./components/ui/button";

export default function Home() {
  const [email, setEmail] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  function validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email);
  }

  async function joinWaitlist() {
    try {
      if (!email) return toast.error("Please, enter your email");

      if (!validateEmail(email))
        return toast.error("Please, enter a valid email address");

      setIsLoading(true);
      let res = await axios.post(
        `https://staging.chiangas.com/api/v1/waitlist`,
        { email }
      );
      if (res.data.status === 200) {
        toast.success("You've successfully joined the waitlist");
        setEmail("");
      }
    } catch (e) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <section className="h-[100vh] fixed top-0 left-0 w-full px-5 xl:py-8 flex flex-col overflow-auto overflow-x-hidden">
      <div className="hidden xl:flex justify-center relative ">
        <Image src={LogoIcon} alt="" width={166} height={118} />
      </div>
      <div className="flex-grow flex justify-center gap-5 items-center flex-wrap xl:flex-nowrap">
        <div className="relative order-2 xl:order-1 top-[-70px] left-[-30px] xl:top-0 xl:left-0">
          <div className="relative w-[400px] h-[500px]">
            <Image src={TruckWithCenterCircleIcon} alt="" fill />
          </div>
        </div>

        <div className="flex items-center  flex-col justify-between xl:justify-center h-[100vh] pt-8 pb-20 xl:py-0 xl:h-auto order-1 xl:order-2">
          <div className="flex xl:hidden justify-center">
            <Image src={LogoIcon} alt="" width={106} height={76} />
          </div>
          <div className="flex flex-col gap-y-4 sm:gap-y-6">
            <div className="flex flex-col gap-y-6">
              <div className="text text-center text-blue-800 text-3xl font-bold">
                Coming Soon
              </div>
              <div className="text-center">
                <div className="text-center text-neutral-700 text-[2.6rem] md:text-7xl font-bold sm:mb-4">
                  Get Notified
                </div>
                <span className="text-neutral-700 text-[2.6rem] md:text-7xl font-bold">
                  When We Launch
                </span>
                <span className="text-amber-500 text-[2.6rem] md:text-7xl font-bold">
                  .
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 w-full mt-7">
              <div className="w-full max-w-xl py-2 flex gap-2 items-center border border-gray-200 bg-white rounded-3xl overflow-hidden pr-2 pl-4 h-[72px]">
                <input
                  type="text"
                  className="grow h-full outline-none"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Button
                  bgColor="rgba(249, 150, 23, 1)"
                  textColor="white"
                  onClick={joinWaitlist}
                  disabled={!Boolean(email)}
                  loading={isLoading}
                  className="hidden sm:inline-block w-[142px] h-[60px] rounded-2xl font-bold"
                >
                  Submit
                </Button>
              </div>

              <Button
                bgColor="rgba(249, 150, 23, 1)"
                textColor="white"
                onClick={joinWaitlist}
                disabled={!Boolean(email)}
                loading={isLoading}
                className="sm:hidden inline-block w-[142px] h-[60px] rounded-2xl font-bold"
              >
                Submit
              </Button>
            </div>
          </div>
          <div className="flex ">
            <div className=" justify-center items-center gap-[47px] flex mt-10">
              {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon].map(
                (src, idx) => (
                  <div
                    className="w-10 h-10 grid place-content-center  bg-neutral-50 rounded-2xl border border-zinc-600"
                    key={idx}
                  >
                    <Image className="w-5" src={src} alt="kk" />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className="relative hidden xl:block order-3">
          <div className="relative w-[400px] h-[500px]">
            <div className="relative w-full h-full left-[50px]">
              <Image src={GirlHoldingPhoneIcon} alt="" fill />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-zinc-600 text-lg font-normal tracking-wider grow pb-10 xl:pb-0">
          © 2023 All rights reserved.
        </p>
      </div>
    </section>
  );
}
