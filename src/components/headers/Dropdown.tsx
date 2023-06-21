"use client";
import Link from "next/link";
import React, { useState } from "react";

const dropdownList = [
  { url: "/mbr", title: "MBR" },
  { url: "/mbbr", title: "MBBR" },
  { url: "/ro", title: "Reverse Osmosis" },
  { url: "/daf", title: "DAF" },
];

interface Props {
  title: string;
}
const Dropdown = ({ title }: Props) => {
  const [open, setopen] = useState(false);
  return (
    <div className="h-full relative text-[#41444B]">
      <button className="flex items-center" onClick={() => setopen(!open)} onMouseLeave={() => setopen(false)}>
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
      </button>
      {open && (
        <div className="absolute bg-slate-50 z-20 px-2 mt-9 py-2 flex flex-col space-y-1 w-64">
          {dropdownList.map((val, index) => (
            <Link
              key={index}
              className=" hover:text-blue-800 py-2 px-3 rounded"
              href={val.url}
            >
              {val.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
