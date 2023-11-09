"use client";
import React from "react";
import NotFound from "@/assets/icons/404.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
function NotFoundPage() {
  const router = useRouter();
  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-10">
      <div>
        <Image src={NotFound} width={500} height={500} alt="notfound" />
      </div>
      <div>
        <div className="text-center">
          <span className="text-blue-800 text-[64px] font-medium ">
            Page Not Found
          </span>
          <span className="text-amber-500 text-[64px] font-medium ">.</span>
        </div>
      </div>
      <button
        className="text-center text-blue-600 text-[32px] font-semibold  leading-[41.60px]"
        onClick={() => router.push("/")}
      >
        Go Home
      </button>
    </div>
  );
}

export default NotFoundPage;
