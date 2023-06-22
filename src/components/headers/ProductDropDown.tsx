"use client";
import { Fragment } from "react";
import { Menu } from "@headlessui/react";
import SubMenu from "./SubMenu1";
import SubMenu2 from "./SubMenu2";

interface Props {
  title: string;
}
function ProducDropDown({ title }: Props) {
  return (
    <div className="relative ">
      <Menu>
        <Menu.Button className="flex items-center text-[#41444B] dark:text-white hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md ">
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
        <Menu.Items className="absolute bg-slate-50 z-20 px-2 mt-8 py-3 flex flex-col space-y-3 w-44 ">
          <div>
            <Menu.Item as={Fragment}>
              <SubMenu title="Machineries" />
            </Menu.Item>
          </div>
          <div>
            <Menu.Item as={Fragment}>
              <SubMenu2 title="Consumables" />
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}

export default ProducDropDown;
