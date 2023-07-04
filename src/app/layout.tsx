import "./globals.css";
import { Montserrat } from "next/font/google";
import React from "react";
import { Toaster } from "react-hot-toast";

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
      <body className={montserrat.className}>
        {children}

        <Toaster position="top-right" />
      </body>
    </html>
  );
}
