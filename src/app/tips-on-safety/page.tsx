"use client";
import Image from "next/image";
import React from "react";
import HeaderBg from "@/assets/icons/tips.svg";
import MobileBg from "@/assets/icons/MobileHow.svg";
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
    name: "How to use accessories",
    description: `Using your Chian Gas level checker device
is a breeze. It's easier than you think. We
listed some steps...`,
    image: "/how-to-use-accessories.png",
    link: "/how-to-use-accessories",
  },
];
function TipsOnSafety() {
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
          <DotDiffText>Tips on Safety</DotDiffText>
          <p className="mt-3 text-xl font-normal tracking-tight text-zinc-600">
            Your safety is our top concern. We want to ensure you use gas in
            your home with confidence and peace of mind.
            <br />
            <br />
            We believe that cooking with gas should be a reassuring and
            stress-free experience. To ensure you use gas in your home with
            confidence and peace of mind, here are some essential safety tips:
          </p>
          <br />
          <p className="mt-3 text-xl font-normal tracking-tight text-zinc-600">
            <b>Well-Ventilated Spaces:</b>
            <br />
            Always use gas appliances in well-ventilated areas. Good ventilation
            helps disperse any gas leaks and ensures a safe cooking environment.
            Keep windows open and use exhaust fans to promote air circulation.
          </p>
          <br />

          <p className="mt-3 text-xl font-normal tracking-tight text-zinc-600">
            <b>Regular Equipment Checks:</b>
            <br />
            Periodically inspect your gas appliances, including hoses,
            connectors, and regulators. Look for any signs of wear or damage. If
            you notice anything unusual, contact a certified gas technician for
            inspection and repair.
          </p>
          <br />

          <p className="mt-3 text-xl font-normal tracking-tight text-zinc-600">
            <b>No Obstructed Vents:</b>
            <br />
            Check that all vents on your gas appliances are free from
            obstructions. Proper ventilation prevents the buildup of gas and
            ensures that combustion byproducts are safely expelled.
          </p>
          <br />

          <p className="mt-3 text-xl font-normal tracking-tight text-zinc-600">
            <b>Emergency Shut-Off:</b>
            <br />
            Familiarize yourself with the location of the emergency shut-off
            valve. In case of a gas leak or any other emergency, knowing how to
            quickly turn off the gas supply can be crucial for your safety.
          </p>
          <br />

          <p className="mt-3 text-xl font-normal tracking-tight text-zinc-600">
            <b>Professional Installation:</b>
            <br />
            When installing or replacing gas appliances, always hire a licensed
            professional. Proper installation by a certified technician ensures
            that appliances are connected securely and according to safety
            standards.
          </p>
          <br />

          <p className="mt-3 text-xl font-normal tracking-tight text-zinc-600">
            <b>No DIY Repairs:</b>
            <br />
            Gas appliances are intricate systems that require professional
            expertise. Avoid attempting DIY repairs on gas appliances. Any
            repairs or adjustments should be performed by a qualified
            technician.
          </p>
          <br />

          <p className="mt-3 text-xl font-normal tracking-tight text-zinc-600">
            <b>Gas Leak Detection:</b>
            <br />
            Learn the signs of a gas leak, such as the distinctive odor of
            natural gas or a hissing sound. If you suspect a gas leak, leave the
            area immediately, and contact emergency services. Do not use
            electronic devices or light switches.
          </p>
          <br />

          <p className="mt-3 text-xl font-normal tracking-tight text-zinc-600">
            <b>Child Safety:</b>
            <br />
            Keep children away from gas appliances and teach them about the
            potential dangers of gas. Store matches, lighters, and other
            flammable items out of their reach.
          </p>
          <br />

          <p className="mt-3 text-xl font-normal tracking-tight text-zinc-600">
            <b>Regular Maintenance:</b>
            <br />
            Schedule regular maintenance checks for your gas appliances. A
            professional technician can identify and address potential issues
            before they become safety hazards.
          </p>
          <br />

          <p className="mt-3 text-xl font-normal tracking-tight text-zinc-600">
            <b>Stay Informed:</b>
            <br />
            Stay informed about gas safety guidelines and procedures. Knowledge
            is a powerful tool for preventing accidents and ensuring a secure
            home environment.
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

export default TipsOnSafety;
