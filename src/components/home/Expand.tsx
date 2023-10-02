"use client";
import React, { useState } from "react";
import ServiceExpand from "./ServiceExpand";
import ServiceExpandMobile from "./ServiceExpandMobile";

const Expand = () => {
  const databasic = [
    {
      id: 1,
      title: "Service Kami",
      bg: "/bg1.png",
      desc: "Satria Nusa Enjinering memiliki komitmen untuk mendukung pertumbuhan industri dengan menjaga keseimbangan lingkungan. Dengan pengalaman electro-mechanical, civil dan chemical engineering, kami memberikan tingkat keberhasilan sempurna kepada klien kami dalam hal pengelolaan air limbah produksi (wastewater treatment) dan air limbah domestik (sewage treatment).",
      color: "bg-black",
      with: "w-2/5",
    },
    {
      id: 2,
      title: "Waste Technology & Environment",
      bg: "/bg2.png",
      desc: "Satria Nusa Enjinering merupakan perusahaan pengelolaan air limbah nasional yang berhasil menerapkan terknologi mutakhir dalam water and wastewater technology.",
      color: "bg-blue-800",
      with: "w-1/5",
    },
    {
      id: 3,
      title: "Civil & Fabrications",
      bg: "/bg3.png",
      desc: "SNE memiliki kapabilitas internal untuk konstruksi sipil dan mekanikal. Dengan pengalaman lebih dari 10 tahun, SNE sudah terlibat dalam berbagai konstruksi untuk keperluan industri di seluruh Indonesia.",
      color: "bg-green-800",
      with: "w-1/5",
    },
    {
      id: 4,
      title: "Mechanical & Electrical",
      bg: "/bg4.png",
      desc: "SNE melalui Satria Elektrik yang telah memiliki pengalaman lebih dari 40 tahun di bidang elektromotor dan gearmotor telah membantu banyak industri dalam mencapai efisiensi daya.",
      color: "bg-[#967E40]",
      with: "w-1/5",
    },
    {
      id: 5,
      title: "Perizinan Lingkungan",
      bg: "/bg6.jpg",
      desc: `<ul>
        <li>AMDAL & UKL-UPL</li>
        <li>DELH & DPLH</li>
        <li>PERSETUJUAN TEKNIS (Air Limbah, Emisi, LB3)</li>
        <li>PROPER</li>
      </ul>`,
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
