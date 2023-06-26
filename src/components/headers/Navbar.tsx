import Image from "next/image";
import Link from "next/link";
import React from "react";
import WaterDowpdown from "./WaterDropDown";
import ProducDropDown from "./ProductDropDown";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-7xl">
          <div
            className="flex items-center justify-between h-16"
            style={{ height: "100px" }}
          >
            <div className="flex items-center">
              <Link className="flex-shrink-0" href="/">
                <Image
                  width={176}
                  height={48}
                  unoptimized
                  className=""
                  src="/logo.png"
                  alt="Workflow"
                />
              </Link>
            </div>
            <div className="block">
              <div className="flex items-center ml-4 md:ml-6">
                <div className="hidden md:block">
                  <div className="flex items-baseline ml-10 space-x-4">
                    <a
                      className="text-[#41444B] hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md "
                      href="/#"
                    >
                      Home
                    </a>
                    <a
                      className="text-[#41444B] dark:text-white hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md "
                      href="/#about"
                    >
                      Tentang Kami
                    </a>

                    {/* <WaterDowpdown title="Waste Water Technology" /> */}
                    {/* <ProducDropDown title="Product" /> */}
                    <Link
                      className="text-[#41444B] dark:text-white hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md "
                      href="/waste_water_technology"
                    >
                      Waste Water Technology
                    </Link>
                    <Link
                      className="text-[#41444B] dark:text-white hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md "
                      href="/products"
                    >
                      Product
                    </Link>

                    <a
                      className="text-[#41444B] hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md "
                      href="/#contact"
                    >
                      Kontak Kami
                    </a>
                    {/* <div className="flex shadow-md rounded-lg overflow-hidden">
                      <div className="text-green-800 bg-slate-200 px-3 py-1">
                        EN
                      </div>
                      <div className="bg-green-800 text-white px-3 py-1">
                        IN
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex -mr-2 md:hidden">
              {/* <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
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
              </button> */}
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              className="text-gray-500 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Home
            </a>
            <a
              className="text-gray-500 hover:text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#about"
            >
              Tentang Kami
            </a>
            <Link
              className="text-gray-500 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/waste_water_teknologi"
            >
              Waste Water Technology
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/products"
            >
              product
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
