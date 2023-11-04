import React from "react";
import DotDiffText from "../components/ui/dot-diff-text";
import OurValuesCard from "../components/ui/our-values-card";
import Directors from "../components/ui/directors";
import AssuranceTypes from "../components/ui/assurance-types";
import { UserApp } from "../components/ui/app-types";
const howItoWorks = [
  {
    name: " Customer-Centricity",
    description: `You, our valued customers, are at the heart
of our mission. Your satisfaction and safety
are our top priorities. We are committed to
delivering the best gas supply experience
for your home and business.`,
    image: "/user.png",
  },
  {
    name: "Sustainability",
    description: `We are dedicated to creating a sustainable
and greener future. By embracing
innovative technology, we reduce waste
and promote eco-friendly practices
throughout our operations.`,
    image: "/security.png",
  },
  {
    name: " Innovation",
    description: `Technology is at the core of our service.
We continuously innovate to make the
gas supply process more efficient,
transparent, and user-friendly for our
customers and vendors.`,
    image: "/cpu.png",
  },
  {
    name: "Transparency",
    description: `Trust is paramount. We believe in open
communication, honesty, and providing
clear information to both our customers
and vendors. Your confidence in Chian
Gas is our most valuable asset.`,
    image: "/search-normal.png",
  },
];
function About() {
  return (
    <div className="w-full lg:px-6 xl:px-[5rem] mt-[3rem]">
      <div className="flex items-center justify-start w-full humans-bg">
        <div className="flex items-start px-28">
          <DotDiffText className="text-white">About Us</DotDiffText>
        </div>
      </div>
      <div className="flex flex-col items-center p-5 bg-white sm:p-7 ">
        <div className="flex flex-col mt-7 md:mt-14 w-[90%] ">
          <div className="w-full mb-[5rem]">
            <DotDiffText>
              Transforming Gas Supply with Technology: Your Trusted Partner in
              Nigeria
            </DotDiffText>
            <p className="text-[#5B5B5B] text-lg md:text-[20px] mb-5  mt-5">
              Chian Gas Limited is a registered e-gas platform that aims to
              connect gas users and gas vendors using technology, providing a
              convenient and efficient way to purchase and deliver gas supplies.
              We leverages technology to streamline the gas supply chain and
              enhance the overall customer experience.
            </p>
            <p className="text-[#5B5B5B] text-lg md:text-[20px] mb-5  mt-5">
              With a focus on trust, quality, reliability, and convenience.
              Chian Gas Limited aims to become the go-to platform for gas supply
              services in Nigeria.
            </p>
            <p className="text-[#5B5B5B] text-lg md:text-[20px] mb-5  mt-5">
              Chain Gas Limited through its software also enable customers to
              monitor their gas cylinder's level through seamless smart
              integration with a mounted gas level indicator device, ensuring
              you never run out of gas. Stay informed in advance to plan for
              refills conveniently, track and monitor the gas level inside your
              cylinder, effortlessly manage your gas supply with real-time
              updates, stay prepared and avoid unexpected gas shortages and
              simplify your gas refilling process with proactive notifications.
            </p>
          </div>
          {/* Second Section */}
          <div className="w-full  mb-[5rem]" id="our-value">
            <DotDiffText>Our Values</DotDiffText>
            <p className="text-[#5B5B5B] text-lg md:text-[20px] mb-5  mt-5">
              <b>Fueling Trust, Convenience, and Sustainability.</b> At Chian
              Gas, our journey is guided by a set of unwavering values that
              underpin everything we do. These values are more than just words;
              they're the driving force behind our mission to revolutionize the
              gas supply industry and ensure everyone has access to safe and
              reliable energy.
            </p>
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
          <div className="flex flex-col items-center justify-center mb-[5rem]">
            <DotDiffText className="mb-10 text-center">
              Our Directors
            </DotDiffText>
            <Directors />
          </div>
          <div
            className="flex flex-col items-center justify-center "
            id="assurance"
          >
            <DotDiffText className="mb-10 text-center">
              Our Assurance to You.
            </DotDiffText>
            <p className="text-lg font-normal tracking-tight text-center text-zinc-600">
              At Chian Gas, we understand the importance of trust and
              reliability when it comes to your gas supply. That's why we've
              developed a set of core assurances to ensure you experience the
              best in gas delivery and service:
            </p>
            <div className="mt-5 ">
              <AssuranceTypes />
            </div>
            <div className="w-full overflow-hidden">
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
      </div>
    </div>
  );
}

export default About;
