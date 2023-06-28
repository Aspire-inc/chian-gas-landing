import TransparentLogoIcon from "@/assets/icons/transparent-logo-icon.svg";
import TelevisionIcon from "@/assets/icons/television-icon.svg";

import QuestionGirlIcon from "@/assets/icons/question-girl-icon.svg";
import ThinkingBoyIcon from "@/assets/icons/thinking-boy-icon.svg";
import Image from "next/image";
import DotDiffText from "./components/ui/dot-diff-text";
import HowItWorksCard from "./components/ui/how-it-works-card";
import FaqCard from "./components/ui/faq-card";

import React from "react";
import Carousal from "./components/ui/carousal";
import AppTypes from "./components/ui/app-types";

const howItoWorks = [
  {
    name: "Sign Up/Sign In",
    description: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Mauris eget felis et felis
    ultrices tempus at sed eros.`,
    image: "/sign-in.png",
  },
  {
    name: "Place Order",
    description: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Mauris eget felis et felis
    ultrices tempus at sed eros.`,
    image: "/place-order.png",
  },
  {
    name: "Order Processing",
    description: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Mauris eget felis et felis
    ultrices tempus at sed eros.`,
    image: "/order-processing.png",
  },
  {
    name: "Order Delivery",
    description: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Mauris eget felis et felis
    ultrices tempus at sed eros.`,
    image: "/order-delivery.png",
  },
  {
    name: "Order fulfilled",
    description: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Mauris eget felis et felis
    ultrices tempus at sed eros.`,
    image: "/order-fulfilled.png",
  },
];

const newsAndUpdates = [
  {
    name: "Our launch date is here",
    description: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Mauris eget felis et felis
    ultrices tempus at sed eros.`,
    image: "/our-launch-date.png",
  },
  {
    name: "How to use accessories",
    description: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Mauris eget felis et felis
    ultrices tempus at sed eros.`,
    image: "/how-to-use-accessories.png",
  },
  {
    name: "Tips on safety",
    description: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Mauris eget felis et felis
    ultrices tempus at sed eros.`,
    image: "/tips-on-safety.png",
  },
];

const faqs = [
  {
    name: "How do I create an account on Chian?",
    description: `To create an account, simply download Chian App
    and sign up using your email address and set a password.`,
  },
  {
    name: `Can I track the gas level in my cylinder through
    the Chian app?`,
    description: `To create an account, simply download Chian App
    and sign up using your email address and set a password.`,
  },
  {
    name: "How can I place an order for a gas refill?",
    description: `To create an account, simply download Chian App
    and sign up using your email address and set a password.`,
  },
  {
    name: "What payment methods are accepted for gas refills?",
    description: `To create an account, simply download Chian App
    and sign up using your email address and set a password.`,
  },
];

export default function Home() {
  return (
    <div className="w-full" id="home">
      <Carousal />
      <div className="bg-white p-5 sm:p-7 flex items-center flex-col">
        <div className="mt-7 md:mt-14 flex flex-col items-center">
          <DotDiffText>How it works</DotDiffText>

          <div className="mt-6 md:mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-5 md:grid-rows-3 xl:grid-rows-2 gap-7">
            {howItoWorks.map((data, i) => (
              <HowItWorksCard
                tagVariant=""
                key={i}
                description={data.description}
                image={data.image}
                name={data.name}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#FBFAFA] w-[100%] mt-10 md:mt-20 flex flex-wrap items-center gap-y-6">
        <div className=" w-full xl:w-[calc(100%-800px)] px-5 sm:px-12 lg:pl-20">
          <DotDiffText>As a vendor?</DotDiffText>
          <p className="text-[#5B5B5B] text-[16px] sm:text-[18px] mt-1 tracking-wider lg:w-[calc(100%-100px)]">
            Manage users, riders, and vendors via admin panel. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Mauris eget felis et felis
            ultrices tempus at sed eros. Donec pulvinar lacus a augue ultricies
            lacinia. Phasellus cursus elementum commodo. Curabitur quam sapien,
            pretium sed tellus at, condimentum ultricies enim. In cursus
            scelerisque nisl vitae condimentum.
          </p>

          <p className="text-[#0066FF] font-semibold my-8">Learn more...</p>

          <button className="w-[200px] h-[50px] grid place-content-center rounded-[30px] border border-[#A7AEC1]">
            Enrol Now
          </button>
        </div>
        <div className="h-[303px] lg:h-[600px] w-full xl:w-[800px] relative flex items-center justify-center xl:justify-start">
          <div
            style={{
              backgroundImage: "url(/as-a-vendor-bg.png)",
              backgroundSize: "cover",
            }}
            className="h-full w-[calc(100%+30px)] absolute top-0 left-0 bg-[right_center] xl:bg-[right_center]"
          ></div>
          <div className="relative w-[400px] lg:w-[600px] h-[200px] lg:h-[400px] left-[30px]">
            <Image src={TelevisionIcon} alt="" className="relative" fill />
          </div>
        </div>
      </div>

      <div className="flex justify-center  py-10 md:py-20 relative">
        <div className="relative h-[200px] lg:w-[500px] w-[200px] lg:h-[500px]">
          <Image src={TransparentLogoIcon} alt="" fill />
        </div>
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center text-[18px] sm:text-[26px] lg:text-[48px] px-5">
          <p className="text-center md:max-w-[80%] text-[#3F3F3F]">
            <span className="font-bold text-inherit">Chian: </span> Your
            convenient connection to gas vendors for quick and hassle-free
            refills. Never run out of gas again with our easy-to-use app.
          </p>
        </div>
      </div>

      <div className="px-5 sm:max-w-[95%] 2xl:max-w-[80%] mx-auto md:mt-20 relative">
        <div className="flex gap-10 flex-wrap lg:flex-nowrap justify-center">
          <div className="relative w-[300px] sm:w-[500px] h-[400px] sm:h-[610px] overflow-hidden rounded-[20px] z-[10] order-2 lg:order-1">
            <Image src={"/stay-informed.png"} alt="" fill />
          </div>
          <div className="w-full lg:w-[calc(100%-500px)] order-1 lg:order-2">
            <p className="text-[#CACACA] text-[24px] 2xl:text-[36px]">
              GET ALERT. REFILL. KEEP COOKING
            </p>
            <DotDiffText>
              Stay informed of your gas levels in advance
            </DotDiffText>
            <span className="text-[#F9F9F9] font-bold text-[100px] xl:text-[170px] leading-[170px] left-[-20px] lg:left-[-100px] relative">
              Chian
            </span>
            <p className="text-[#5B5B5B] text-[16px] sm:text-[18px] tracking-wider">
              Chian enables customers to monitor their gas cylinder's level
              through seamless integration with a mounted gas level indicator
              device, ensuring you never run out of gas. Stay informed in
              advance to plan for refills conveniently. Track and monitor the
              gas level inside your cylinder. Effortlessly manage your gas
              supply with real-time updates. Stay prepared and avoid unexpected
              gas shortages. Simplify your gas refilling process with proactive
              notifications.
            </p>
          </div>
        </div>
      </div>

      <div className="px-5 sm:max-w-[95%] 2xl:max-w-[80%] mx-auto mt-20 md:mt-36 lg:mt-72 relative">
        <div className="flex gap-10 flex-wrap lg:flex-nowrap justify-center">
          <div className="w-full lg:w-[calc(100%-500px)]">
            <p className="text-[#CACACA] text-[24px] 2xl:text-[36px]">
              LEAKAGE ALERT SYSTEM
            </p>
            <DotDiffText>Get Instant gas leakage notifications</DotDiffText>
            <p className="text-[#F9F9F9] font-bold lg:text-right text-[100px] xl:text-[170px] leading-[170px] md:right-[-20px] lg:right-[-100px] relative">
              Chian
            </p>
            <p className="text-[#5B5B5B] text-[16px] sm:text-[18px] tracking-wider">
              Chian prioritizes safety, and that's why the app seamlessly
              integrates with a gas leakage detector device affixed to the gas
              cylinder. This innovative solution actively monitors and swiftly
              alerts users the moment any gas leakage is detected. By keeping a
              vigilant eye on gas leakage right from the source, Chian ensures
              timely notifications when even the slightest leakage emerges from
              the cylinder. Your safety is our utmost concern, and we leave no
              room for compromise when it comes to protecting you from potential
              gas leaks.
            </p>
          </div>
          <div className="relative w-[300px] sm:w-[500px] h-[400px] sm:h-[610px] overflow-hidden rounded-[20px] z-[10]">
            <Image src={"/get-instant-gas.png"} alt="" fill />
          </div>
        </div>
      </div>

      <div className="mt-28 px-5 sm:max-w-[95%] xl:max-w-[80%] mx-auto">
        <DotDiffText className="justify-center text-center">
          Frequently asked questions
        </DotDiffText>

        <div className="flex mt-10">
          <div className="w-[50%] h-[350px] hidden lg:flex items-center justify-center">
            <div className="flex gap-x-2">
              <Image src={QuestionGirlIcon} alt="" width={170} height={170} />
              <Image
                src={ThinkingBoyIcon}
                alt=""
                width={170}
                height={170}
                className="mt-20"
              />
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            {faqs.map((faq, i) => (
              <FaqCard description={faq.description} name={faq.name} key={i} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 md:mt-32 max-w-[95%] xl:max-w-[80%] mx-auto">
        <DotDiffText className="">News and updates</DotDiffText>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-3 sm:grid-rows-2 lg:grid-rows-1 gap-7">
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

              <div className="mt-5 flex justify-between items-center w-full pr-14">
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

      <div className="mt-32 max-w-[95%] xl:max-w-[80%] mx-auto">
        <DotDiffText className="justify-center">Get our apps now</DotDiffText>
        <AppTypes />
      </div>
    </div>
  );
}
