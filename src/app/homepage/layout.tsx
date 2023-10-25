"use client";

import "../globals.css";
import DesktopNav from "../components/ui/desktop-nav";
import MobileNav from "../components/ui/mobile-nav";
import React, { useRef } from "react";
import Footer from "../components/ui/footer";

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mainRef = useRef<HTMLDivElement>(null);

  function handleScrollToTop() {
    console.log(mainRef.current?.scrollTop);

    let s = setInterval(() => {
      if (mainRef.current!.scrollTop < 2) {
        clearInterval(s);
      }
      mainRef.current!.scrollTop = mainRef.current!.scrollTop - 70;
    }, 0);
  }

  return (
    <main
      className="fixed top-0 left-0 w-full h-full overflow-auto overflow-x-hidden"
      id="home-main-wrapper"
      ref={mainRef}
    >
      <DesktopNav />
      <MobileNav />
      {children}
      <Footer handleScrollToTop={handleScrollToTop} />
    </main>
  );
}
