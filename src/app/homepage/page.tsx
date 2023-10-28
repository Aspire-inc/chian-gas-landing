import TransparentLogoIcon from "@/assets/icons/transparent-logo-icon.svg";
import TelevisionIcon from "@/assets/icons/television-icon.svg";
import QuestionGirlIcon from "@/assets/icons/question-girl-icon.svg";
import ThinkingBoyIcon from "@/assets/icons/thinking-boy-icon.svg";
import Image from "next/image";
import DotDiffText from "../components/ui/dot-diff-text";
import HowItWorksCard from "../components/ui/how-it-works-card";
import FaqCard from "../components/ui/faq-card";
import React from "react";
import Carousal from "../components/ui/carousal";
import AppTypes from "../components/ui/app-types";
import Link from "next/link";

const howItoWorks = [
  {
    name: "Sign Up/Sign In",
    description: `Join the future of effortless gas management.`,
    slogan: "Sign up to connect with vendors.",
    feat: "Track your gas levels, and simplify refills.",
    image: "/sign-in.png",
  },
  {
    name: "Place Order",
    description: `Choose the gas cylinder size you need.`,
    slogan: "Select from list of verified gas vendors.",
    feat: " Review your order and confirm.",
    image: "/place-order.png",
  },
  {
    name: "Order Processing",
    description: `Your vendor will accept your order.
You'll get notified.`,
    slogan: `Your vendor will prepare your order
for delivery.`,
    feat: ``,
    image: "/order-processing.png",
  },
  {
    name: "Order Delivery",
    description: `Get an estimated delivery time.`,
    slogan: `Track real-time location of your gas
delivery.`,
    feat: `Vendor arrives at your location with
your gas.`,
    image: "/order-delivery.png",
  },
  {
    name: "Order fulfilled",
    description: `Make payment with our in-app wallet.`,
    slogan: `Rate your experience and provide
feedback on the vendor's service.`,
    feat: `Enjoy reliable, uninterrupted gas
supply.`,
    image: "/order-fulfilled.png",
  },
];

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
      <div className="flex flex-col items-center p-5 bg-white sm:p-7 ">
        <div className="flex flex-col items-center mt-7 md:mt-14">
          <DotDiffText>How it works</DotDiffText>

          <div className="grid grid-cols-1 grid-rows-5 mt-6 md:mt-12 md:grid-cols-2 xl:grid-cols-3 md:grid-rows-3 xl:grid-rows-2 gap-7">
            {howItoWorks.map((data, i) => (
              <HowItWorksCard
                tagVariant=""
                key={i}
                description={data.description}
                image={data.image}
                name={data.name}
                slogan={data.slogan}
                feat={data?.feat}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#FBFAFA] w-[100%] mt-10 md:mt-20 flex flex-wrap items-center gap-y-6">
        <div className=" w-full xl:w-[calc(100%-800px)] px-5 sm:px-12 lg:pl-20">
          <DotDiffText>As a vendor?</DotDiffText>
          <p className="text-[#5B5B5B] text-[16px] sm:text-[18px] mt-1 tracking-wider lg:w-[calc(100%-100px)]">
            Are you a gas vendor looking to streamline your operations and reach
            more customers? Chian Gas is here to help. By joining our platform,
            you gain access to a world of benefits. On our platform, you create
            a digital storefront, expand your customer base, manage your orders,
            stay updated with instant alerts for new orders, and enjoy swift and
            secure payment options.
          </p>

          <p className="text-[#0066FF] font-semibold my-8">Learn more...</p>

          <button className="w-[200px] h-[50px] grid place-content-center rounded-[30px] border border-[#A7AEC1]">
            <Link href={"https://portal.chiangas.com/"} target="_blank">
              Enrol Now
            </Link>
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

      <div className="relative flex justify-center py-10 md:py-20">
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
        <div className="flex flex-wrap justify-center gap-10 lg:flex-nowrap">
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
        <div className="flex flex-wrap justify-center gap-10 lg:flex-nowrap">
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

      <div className="mt-32 max-w-[95%] xl:max-w-[80%] mx-auto">
        <DotDiffText className="justify-center">Get our apps now</DotDiffText>
        <AppTypes />
      </div>
    </div>
  );
}
