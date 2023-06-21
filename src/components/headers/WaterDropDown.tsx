"use client";
import { Fragment } from "react";
import { Menu } from "@headlessui/react";
import Link from "next/link";

const links = [
  { href: "/support", label: "MBR" },
  { href: "/license", label: "MBBR" },
  { href: "/sign-out", label: "Reverse Osmosis" },
  { href: "/sign-out", label: "DAF" },
];

interface Props {
  title: string;
}
function WaterDowpdown({ title }: Props) {
  return (
    <div className="relative">
      <Menu>
        <Menu.Button className="flex items-center">
          {title}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </Menu.Button>
        <Menu.Items className="absolute bg-slate-50 z-20 px-2 mt-10 py-3 flex flex-col space-y-3 w-56 ">
          {links.map((link, index) => (
            <div key={index}>
              <Menu.Item key={link.href} as={Fragment}>
                <Link
                  href={link.href}
                  className="hover:text-blue-800 py-2 px-3 rounded"
                >
                  {link.label}
                </Link>
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
}

export default WaterDowpdown;
