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

export default function WaitlistPage() {
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
    } catch (e: any) {
      toast.error(e.response?.data?.error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <section className="fixed top-0 left-0 flex flex-col w-full h-full px-5 overflow-auto overflow-x-hidden xl:py-8">
      <div className="relative justify-center hidden xl:flex ">
        <Image src={LogoIcon} alt="" width={166} height={118} />
      </div>
      <div className="relative flex flex-wrap items-center justify-center flex-grow h-full xl:justify-between xl:gap-5 xl:flex-nowrap xl:h-auto">
        <div className="w-full xl:w-auto absolute xl:relative order-2 xl:order-1 top-[calc(100%-40px)] xl:left-0 xl:top-0">
          <div className="relative w-[400px] h-[500px] left-[-50px] xl:left-0">
            <Image src={TruckWithCenterCircleIcon} alt="" fill />
          </div>
          <div className="block w-full mt-5 xl:hidden">
            <p className="w-full pb-10 text-lg font-normal tracking-wider text-center text-zinc-600 grow xl:pb-0">
              © 2023 All rights reserved.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-start order-1 h-full pt-8 pb-20 gap-y-5 xl:justify-center xl:py-0 xl:h-auto xl:order-2">
          <div className="flex justify-center mb-4 xl:hidden">
            <Image src={LogoIcon} alt="" width={100} height={70} />
          </div>
          <div className="flex flex-col gap-y-4 sm:gap-y-6">
            <div className="flex flex-col gap-y-6">
              <div className="text text-center text-blue-800 text-[20px] sm:text-3xl font-bold">
                Coming Soon
              </div>
              <div className="text-center">
                <div className="text-center text-neutral-700 text-[30px] sm:text-[2.6rem] md:text-6xl font-bold sm:mb-4">
                  Get Notified
                </div>
                <span className="text-neutral-700 text-[30px] sm:text-[2.6rem] md:text-6xl font-bold">
                  When We Launch
                </span>
                <span className="text-amber-500 text-[30px] sm:text-[2.6rem] md:text-6xl font-bold">
                  .
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center w-full gap-3 mt-7">
              <div className="w-full max-w-xl py-2 flex gap-2 items-center border border-gray-200 bg-white rounded-3xl overflow-hidden pr-2 pl-4 h-[60px] sm:h-[72px]">
                <input
                  type="text"
                  className="h-full outline-none grow"
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
          <div className="flex">
            <div className=" justify-center items-center gap-[47px] flex mt-10">
              <div
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/profile.php?id=100067667208082&mibextid=ZbWKwL",
                    "_blank"
                  )
                }
                className="grid w-10 h-10 border cursor-pointer place-content-center bg-neutral-50 rounded-2xl border-zinc-600"
              >
                <Image className="w-5" src={FacebookIcon} alt="kk" />
              </div>
              <div className="grid w-10 h-10 border cursor-pointer place-content-center bg-neutral-50 rounded-2xl border-zinc-600">
                <Image className="w-5" src={TwitterIcon} alt="kk" />
              </div>
              <div
                onClick={() =>
                  window.open(
                    "https://instagram.com/chian.gas?igshid=MzNlNGNkZWQ4Mg==",
                    "_blank"
                  )
                }
                className="grid w-10 h-10 border cursor-pointer place-content-center bg-neutral-50 rounded-2xl border-zinc-600"
              >
                <Image className="w-5" src={InstagramIcon} alt="kk" />
              </div>
              <div className="grid w-10 h-10 border cursor-pointer place-content-center bg-neutral-50 rounded-2xl border-zinc-600">
                <Image className="w-5" src={LinkedInIcon} alt="kk" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative order-3 hidden xl:block">
          <div className="relative w-[400px] h-[500px] ">
            <div className="relative w-full h-full left-[50px]">
              <Image src={GirlHoldingPhoneIcon} alt="" fill />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden xl:block">
        <p className="pb-10 text-lg font-normal tracking-wider text-center text-zinc-600 grow xl:pb-0">
          © 2023 All rights reserved.
        </p>
      </div>
    </section>
  );
}
