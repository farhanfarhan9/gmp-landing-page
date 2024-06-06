"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Translator from "@/utils/Translator";
import LanguageSwitcher from "./LanguageSwitcher";
import Dropdown from "@/components/Dropdown/Dropdown";
import DropdownImage from "@/components/Dropdown/DropdownImage";
import { useSearchParams, usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <nav className="bg-white dark:bg-gray-800">
      <div className="mx-auto font-semibold max-w-7xl">
        <div
          className="flex items-center justify-between h-16"
          style={{ height: "100px" }}
        >
          <div className="flex items-center ml-8 align-middle sm:ml-0">
            <Link href={Translator.gotoUrl("/", lang)}>
              <span className="flex-shrink-0">
                <Image
                  width={236}
                  height={48}
                  unoptimized
                  className="pl-6 xl:pl-0"
                  src="/logo.png"
                  alt="Logo"
                />
              </span>
            </Link>
          </div>
          <div className="hidden xl:block">
            <div className="flex items-center ml-4 xl:ml-6">
              <div className="flex ml-10 space-x-4 text-base font-normal align-middle">
                <a
                  className={`text-lg ${
                    pathname === "/about-us"
                      ? "text-[#0C5095]"
                      : "text-[#41444B]"
                  } hover:text-[#0C5095] dark:hover:text-white px-2 py-1 rounded-md`}
                  href={Translator.gotoUrl("/about-us", lang)}
                >
                  About Us
                </a>
                <Link
                  className={`text-lg ${
                    pathname === "/product-services"
                      ? "text-[#0C5095]"
                      : "text-[#41444B]"
                  } hover:text-[#0C5095] dark:hover:text-white px-2 py-1 rounded-md`}
                  href="/product & Services"
                >
                  Product & Services
                </Link>
                <Link
                  className={`text-lg ${
                    pathname === "/infrastructure"
                      ? "text-[#0C5095]"
                      : "text-[#41444B]"
                  } hover:text-[#0C5095] dark:hover:text-white px-2 py-1 rounded-md`}
                  href="/product & Services"
                >
                  Infrastructure
                </Link>
                <Link
                  className={`text-lg ${
                    pathname === "/awards" ? "text-[#0C5095]" : "text-[#41444B]"
                  } hover:text-[#0C5095] dark:hover:text-white px-2 py-1 rounded-md`}
                  href="/product & Services"
                >
                  Awards
                </Link>
                <Link
                  className={`text-lg ${
                    pathname === "/partners"
                      ? "text-[#0C5095]"
                      : "text-[#41444B]"
                  } hover:text-[#0C5095] dark:hover:text-white px-2 py-1 rounded-md`}
                  href="/product & Services"
                >
                  Partners
                </Link>
                <div>
                  <div className="px-4 py-2 bg-white border border-[#0088BB] rounded-lg">
                    <span className="text-[#0088BB]">Contact us</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mr-2 xl:hidden">
            <button
              className="inline-flex items-center justify-center p-2 text-gray-800 rounded-md dark:text-white hover:text-gray-300 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="w-8 h-8"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="xl:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              className="block px-2 py-1 text-base font-medium text-gray-500 rounded-md hover:text-gray-800 dark:text-white"
              href="/about-us"
            >
              About Us
            </a>
            <a
              className="block px-2 py-1 text-base font-medium text-gray-500 rounded-md hover:text-gray-800 dark:text-white"
              href="/product-services"
            >
              Product & Services
            </a>
            <Link
              className="block px-2 py-1 text-base font-medium text-gray-500 rounded-md hover:text-gray-800 dark:hover:text-white"
              href="/infrastructure"
            >
              Infrastructure
            </Link>
            <Link
              className="block px-2 py-1 text-base font-medium text-gray-500 rounded-md hover:text-gray-800 dark:hover:text-white"
              href="/awards"
            >
              Awards
            </Link>
            <Link
              className="block px-2 py-1 text-base font-medium text-gray-500 rounded-md hover:text-gray-800 dark:hover:text-white"
              href="/partners"
            >
              Partners
            </Link>
            <div>
              <div className="px-4 py-2 bg-white border w-fit border-[#0088BB] rounded-lg">
                <span className="text-[#0088BB] text-base">Contact us</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
