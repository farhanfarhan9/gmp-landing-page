"use client";
import React, { useState } from "react";
import ServiceExpand from "./ServiceExpand";
import ServiceExpandMobile from "./ServiceExpandMobile";
import Translator from '@/utils/Translator';
import { useSearchParams } from 'next/navigation';

const Expand = () => {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || undefined;
  const databasic = [
    {
      id: 1,
      title: Translator.t('our-service-title', lang),
      bg: "/bg1.png",
      desc: Translator.t('our-service-desc', lang),
      color: "bg-black",
      with: "w-2/5",
    },
    {
      id: 2,
      title: Translator.t('waste-technology-env-title', lang),
      bg: "/bg2.png",
      desc: Translator.t('waste-technology-env-desc', lang),
      color: "bg-blue-800",
      with: "w-1/5",
    },
    {
      id: 3,
      title: Translator.t('civil-fabrication-title', lang),
      bg: "/bg3.png",
      desc: Translator.t('civil-fabrication-desc', lang),
      color: "bg-green-800",
      with: "w-1/5",
    },
    {
      id: 4,
      title: Translator.t('mechanical-electrical-title', lang),
      bg: "/bg4.png",
      desc: Translator.t('mechanical-electrical-desc', lang),
      color: "bg-amber-800",
      with: "w-1/5",
    },
  ];
  const [data, setdata] = useState(databasic);
  const updateWithById = (id: number, newWith: string): void => {
    setdata((prevData) =>
      prevData.map((service) =>
        service.id === id
          ? { ...service, with: newWith }
          : { ...service, with: "w-1/5" }
      )
    );
  };
  return (
    <div id="service">
      <div className="relative hidden xl:flex justify-center">
        {data.map((val) => (
          <ServiceExpand key={val.id} data={val} updatebyid={updateWithById} />
        ))}
      </div>
      <div className="relative xl:hidden flex-row justify-center">
        {data.map((val) => (
          <ServiceExpandMobile key={val.id} data={val} />
        ))}
      </div>
    </div>
  );
};

export default Expand;
