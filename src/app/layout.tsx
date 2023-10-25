"use client";
import "./globals.css";
import { Montserrat } from "next/font/google";
import React, { useRef } from "react";
import { Toaster } from "react-hot-toast";
import DesktopNav from "./components/ui/desktop-nav";
import MobileNav from "./components/ui/mobile-nav";
import Footer from "./components/ui/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mainRef = useRef<HTMLDivElement>(null);

  function handleScrollToTop() {
    console.log(mainRef.current?.scrollTop);

    let s = setInterval(() => {
      if (mainRef.current!?.scrollTop < 2) {
        clearInterval(s);
      }
      mainRef.current!.scrollTop = mainRef.current!.scrollTop - 70;
    }, 0);
  }
  return (
    <html lang="en">
      <body
        className={montserrat.className}
        // className="fixed top-0 left-0 w-full h-full overflow-auto overflow-x-hidden"
      >
        <div id="home-main-wrapper" ref={mainRef}>
          <DesktopNav />
          <MobileNav />
          {children}
          <Footer handleScrollToTop={handleScrollToTop} />
        </div>

        <Toaster position="top-right" />
      </body>
    </html>
  );
}
