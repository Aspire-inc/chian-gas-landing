"use client";
import React, { useState } from "react";
import DotDiffText from "../components/ui/dot-diff-text";
import Search from "@/assets/icons/search.svg";
import Image from "next/image";
import FaqCard from "../components/ui/faq-card";
import VendorFaqCard from "../components/ui/vendor-faq-card";
import { UserApp } from "../components/ui/app-types";
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
const Vendorfaqs = [
  {
    name: "How do I become an active vendor?",
    description: `To become an active vendor, you need to complete our KYC (Know Your Customer) process. This involves providing necessary personal and business information for verification. Once your identity is confirmed, you can start using Chian as a vendor.`,
  },
  {
    name: `Can I track the gas level in my cylinder through
    the Chian app?`,
    description: `To create an account, simply download Chian App
    and sign up using your email address and set a password.`,
  },

  {
    name: "What payment methods are accepted for gas refills?",
    description: `To create an account, simply download Chian App
    and sign up using your email address and set a password.`,
  },
  {
    name: "How do I create an account on Chian?",
    description: `To create an account, simply download Chian App
    and sign up using your email address and set a password.`,
  },
];
function Support() {
  const [selectedOption, setSelectedOption] = useState("user");
  console.log(selectedOption, "this is option");

  return (
    <div className="w-full px-2  xl:px-[5rem] mt-[3rem]">
      <DotDiffText className="text-center">
        Answers to our most frequently asked questions
      </DotDiffText>

      <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-4 mt-[4rem] ">
        <div
          className={`cursor-pointer  flex items-center justify-center h-[52px] lg:h-[109px] border-2 lg:border-none ${
            selectedOption === "user"
              ? "text-blue-600 bg-slate-50 border-none"
              : "text-zinc-600"
          }`}
          onClick={() => setSelectedOption("user")}
        >
          <p className={`text-2xl font-bold tracking-tight text-right`}>
            I am a gas user
          </p>
        </div>
        <div
          onClick={() => setSelectedOption("vendor")}
          className={`cursor-pointer flex items-center justify-center h-[52px] lg:h-[109px] border-2 lg:border-none ${
            selectedOption === "vendor"
              ? "text-blue-600 bg-slate-50 border-none"
              : "text-zinc-600"
          }`}
          id="gas-vendor"
        >
          <p className="text-2xl font-bold tracking-tight ">
            I am a gas vendor
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[4rem] ">
        <div className="relative">
          <input
            className="w-[329px] lg:w-[742px] h-[50px] bg-slate-50 rounded-[50px] focus:outline-none pl-8  "
            placeholder="Ask your question"
          />
          <Image
            src={Search}
            alt="search"
            width={20}
            height={20}
            className="absolute right-7 top-[0.9rem]"
          />
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        {selectedOption === "user" && (
          <div className="w-[80%]">
            {faqs.map((faq, i) => (
              <FaqCard description={faq.description} name={faq.name} key={i} />
            ))}
          </div>
        )}
        {selectedOption === "vendor" && (
          <div className="w-[80%]">
            {Vendorfaqs.map((faq, i) => (
              <VendorFaqCard
                description={faq.description}
                name={faq.name}
                key={i}
              />
            ))}
          </div>
        )}
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
  );
}

export default Support;
