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
  return (
    <html lang="en">
      <body
        className={montserrat.className}
        // className="fixed top-0 left-0 w-full h-full overflow-auto overflow-x-hidden"
      >
        <DesktopNav />
        <MobileNav />
        {children}
        <Footer />

        <Toaster position="top-right" />
      </body>
    </html>
  );
}
