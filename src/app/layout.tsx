"use client";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/headers/Navbar";
import Contact from "@/components/footer/Contact";
import './i18n';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Satria Nusa Group",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} pts-20 text-[#41444B]`}>
        <Navbar />
        {children}
        <Contact />
      </body>
    </html>
  );
}
