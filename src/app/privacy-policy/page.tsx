import React from "react";
import DotDiffText from "../components/ui/dot-diff-text";
import PrivacyImage from "@/assets/icons/privacy.svg";
import Image from "next/image";
import Search from "@/assets/icons/search.svg";

function PrivacyPolicy() {
  return (
    <div className="flex items-center justify-between w-full lg:px-6 xl:px-10">
      <div>
        <DotDiffText>Chian Gas Privacy Policy</DotDiffText>
        <p className="text-xl font-normal tracking-tight text-zinc-600">
          At Chian Gas, we are committed to maintaining the privacy
          <br />
          and protection of your personal information.
        </p>
        <div className="flex items-start justify-start mt-[4rem] ">
          <div className="relative">
            <input
              className="w-[509px] h-[50px] bg-slate-50 rounded-[50px] focus:outline-none pl-8  "
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
      </div>
      <div>
        <Image src={PrivacyImage} alt="" />
      </div>
    </div>
  );
}

export default PrivacyPolicy;
