"use client";
import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import Translator from '@/utils/Translator';

const AboutLearnMore = (props: { searchParams: any; }) => {
  const lang = props.searchParams.get('lang') || undefined;
  const [show, setshow] = useState(false);
  return (
    <>
      <Transition
        show={show}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="mt-5 text-[#41444B]"
      >
        <p className="mb-7 mt-6 text-base md:text-lg lg:text-xl xl:text-1xl">
          {Translator.t('satria-nusa-desc-2', lang)}
        </p>
        <p className="mb-7 text-base md:text-lg lg:text-xl xl:text-1xl">
          {Translator.t('satria-nusa-desc-3', lang)}
        </p>
        <p className=" text-base md:text-lg lg:text-xl xl:text-1xl">
          {Translator.t('satria-nusa-desc-4', lang)}
        </p>
      </Transition>

      <button
        onClick={() => {
          setshow(!show);
        }}
        className="px-11 py-4 text-white bg-green-700 mt-7 text-base md:text-lg lg:text-xl xl:text-2xl"
      >
        {show ? Translator.t('read-less', lang) : Translator.t('read-more', lang) }
      </button>
    </>
  );
};

export default AboutLearnMore;
