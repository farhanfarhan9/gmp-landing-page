"use client";
import { Fragment } from "react";
import { Menu } from "@headlessui/react";
import Link from "next/link";

const links = [
  { href: "/support", label: "Aquahelix" },
  { href: "/support", label: "Lamella Tank" },
  { href: "/support", label: "MBR" },
  { href: "/support", label: "DAF" },
  { href: "/support", label: "Filter Press" },
  { href: "/support", label: "Wet Scrubber" },
];

const links2 = [
  { href: "/support", label: "Aquahelix" },
  { href: "/support", label: "Lamella Tank" },
  { href: "/support", label: "MBR" },
  { href: "/support", label: "DAF" },
  { href: "/support", label: "Filter Press" },
  { href: "/support", label: "Wet Scrubber" },
];

interface Props {
  title: string;
}

function SubSubMenu({ title }: Props) {
  return (
    <div className="relative">
      <Menu>
        <Menu.Button className="w-full flex items-center justify-between hover:text-blue-800">
          {title}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </Menu.Button>
        <Menu.Items className="absolute bg-slate-50 top-0 z-20 px-2 py-3 flex flex-col space-y-3 w-44" style={{marginLeft:"154px"}}>
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

export default SubSubMenu;
