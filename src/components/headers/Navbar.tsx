"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Translator from "@/utils/Translator";
import LanguageSwitcher from "./LanguageSwitcher";
import Dropdown from "@/components/Dropdown/Dropdown";
import DropdownImage from "@/components/Dropdown/DropdownImage";

import { useSearchParams } from "next/navigation";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const options = [
    {
      text: "Machinaries / Wastewater Technology",
      url: "/solutions-and-product/machinaries-or-wastewater-technology",
    },
    { text: "Bluewave Industries", url: "/bluewave" },
    { text: "Bacteria", url: "/bacteria" },
  ];
  const options_company = [
    {
      image: "/img/company-navbar/nadic.png",
      url: "javascript:void(0);",
    },
    {
      image: "/img/company-navbar/nat.png",
      url: "javascript:void(0);",
    },
    {
      image: "/img/company-navbar/seg.png",
      url: "javascript:void(0);",
    },
    {
      image: "/img/company-navbar/smi.png",
      url: "javascript:void(0);",
    },
    {
      image: "/img/company-navbar/sge.png",
      url: "javascript:void(0);",
    },
    {
      image: "/img/company-navbar/bluewave.png",
      url: "javascript:void(0);",
    },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-7xl font-semibold">
        <div
          className="flex items-center justify-between h-16"
          style={{ height: "100px" }}
        >
          <div className="sm:ml-0 ml-8 flex items-center">
            <Link href="/">
              <span className="flex-shrink-0">
                <Image
                  width={236}
                  height={48}
                  unoptimized
                  className=""
                  src="/logo_k3.png"
                  alt="Workflow"
                />
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center ml-4 md:ml-6">
              <div className="flex items-baseline ml-10 space-x-4">
                <a
                  className="text-lg text-[#41444B] hover:text-gray-800 dark:hover:text-white px-2 py-1 rounded-md"
                  href="/about-us"
                >
                  {Translator.t("about-us", lang)}
                </a>
                <Link
                  className="text-lg text-[#41444B] hover:text-gray-800 dark:hover:text-white px-2 py-1 rounded-md"
                  href={Translator.gotoUrl("/project", lang)}
                >
                  Projects
                </Link>
                <div>
                  <Dropdown options={options} title="Solutions & Products" />
                </div>
                <LanguageSwitcher />
                <div>
                  <DropdownImage
                    options={options_company}
                    title="Satria Nusa Group"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex mr-2 md:hidden">
            <button
              className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              className="text-gray-500 hover:text-gray-800 dark:text-white block px-2 py-1 rounded-md text-base font-medium"
              href="/about-us"
            >
              {Translator.t("about-us", lang)}
            </a>
            <a
              className="text-gray-500 hover:text-gray-800 dark:text-white block px-2 py-1 rounded-md text-base font-medium"
              href="/project"
            >
              Projects
            </a>
            <Link
              className="text-gray-500 hover:text-gray-800 dark:hover:text-white block px-2 py-1 rounded-md text-base font-medium"
              href="/solutions-and-product/machinaries-or-wastewater-technology"
            >
              Machinaries / Wastewater Technology
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-800 dark:hover:text-white block px-2 py-1 rounded-md text-base font-medium"
              href="/bluewave"
            >
              Bluewave Industries
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-800 dark:hover:text-white block px-2 py-1 rounded-md text-base font-medium"
              href="/bacteria"
            >
              Bacteria
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
