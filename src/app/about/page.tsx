import React from "react";
import DotDiffText from "../components/ui/dot-diff-text";
import OurValuesCard from "../components/ui/our-values-card";
import Directors from "../components/ui/directors";
import AssuranceTypes from "../components/ui/assurance-types";
import { UserApp } from "../components/ui/app-types";
const howItoWorks = [
  {
    name: "Lorem ipsum dolor.",
    description: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Mauris eget felis et felis
    ultrices tempus at sed eros.`,
    image: "/document-text.png",
  },
  {
    name: "Lorem ipsum dolor.",
    description: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Mauris eget felis et felis
    ultrices tempus at sed eros.`,
    image: "/document-text.png",
  },
  {
    name: "Lorem ipsum dolor.",
    description: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Mauris eget felis et felis
    ultrices tempus at sed eros.`,
    image: "/document-text.png",
  },
  {
    name: "Lorem ipsum dolor.",
    description: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Mauris eget felis et felis
    ultrices tempus at sed eros.`,
    image: "/document-text.png",
  },
];
function About() {
  return (
    <div className="w-full px-6 xl:px-10">
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
          <div className="w-full  mb-[5rem]">
            <DotDiffText>Our Values</DotDiffText>
            <p className="text-[#5B5B5B] text-lg md:text-[20px] mb-5  mt-5">
              Chian Gas Limited is a registered e-gas platform that aims to
              connect gas users and gas vendors using technology, providing a
              convenient and efficient way to purchase and deliver gas supplies.
              We leverages technology to streamline the gas supply chain and
              enhance the overall customer experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
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
          <div className="flex flex-col items-center justify-center ">
            <DotDiffText className="mb-10 text-center">
              Our Assurance to You.
            </DotDiffText>
            <p className="text-lg font-normal tracking-tight text-center text-zinc-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mi
              turpis, venenatis tristique sapien quis, vestibulum dapibus magna.
              Ut semper a purus sit amet vulputate. Nunc tristique ornare
              dignissim. Vivamus velit lacus, cursus ut purus a, vehicula
              egestas quam. In quis vestibulum tellus.
            </p>
            <div className="mt-5">
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
