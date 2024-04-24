"use client";
import Image from "next/image";
import { useState } from "react";

const ProfileData = [
  {
    name: "Feli Zulhendri, M.Sc.",
    role: "Managing Director",
    image: "/img/about/feli.png",
    desc: (
      <div>
        <div>
          With the success of building SNE into a National Engineering Company.
          The company is committed to continuously improve internally by meeting
          various occupational safety and quality management compliance
          requirements. With this spirit, SNE already has Occupational Safety
          and Health Management System (SMK3) certification. Internal
          improvement is also followed by a digitalization program since 2023
          aimed at the implementation of Good Corporate Governance. This stable,
          accountable & transparent Internal System is proven to make SNE an
          Innovative Company. SNE team always carry out work with a character
          full of responsibility and sense of ownership.
        </div>
        <div>
          This character gives rise to various solutions for clients. As
          evidence, SNE now has 1 patent for aeration systems. SNE is also
          registering a patent for Dissolved Air Floatation (DAF) system. SNE
          allocates a portion of our profits to ensure employee welfare and
          Research & Development (R&D). As a proof of our seriousness to build a
          sustainable and reliable Company. SNE built Knowledge Management
          System (KMS) & Training Center aimed at quality & safety management
          for all our works. SNE is committed to be a growing company by
          continuously learning to provide the best solutions for our customers.
        </div>
      </div>
    ),
  },
  {
    name: "Antony Simon, B.Sc., M.Kom.",
    role: "Operatational Director",
    image: "/img/about/antony.png",
    desc: (
      <div>
        Besides experienced Engineering capabilities, the company is supported
        by competent experts in governance to achieve Good Corporate Governance.
        Antony Simon, B.Sc., M.Cs., is responsible for resource management,
        Corporate Governance, and Company information systems. He ensures social
        responsibility towards employees and the surrounding community and
        compliance with government regulations. Antony Simon, B.Sc., M.Cs. has
        over 10 years of experience in construction management. And holds a
        Global Reporting Initiative (GRI) certificate for sustainability
        reporting. Antony Simon, B.Sc., M.Cs. is an alumnus of the ASEAN Youth
        Fellowship (AYF) in 2023 by the Singapore International Foundation.
      </div>
    ),
  },
  {
    name: "Ir. Anton Suherman",
    role: "Technical Director",
    image: "/img/about/anton.png",
    desc: (
      <div>
        The company is committed to providing world-class engineering standards
        to all clients. This is reflected in all stages of work and the
        selection of materials and machine units that are of high quality and
        cost-effective. Ir. Anton Suherman has over 10 years of experience in
        the manufacturing industry and works closely with principals in
        Indonesia as a System Integrator (SI).
      </div>
    ),
  },
  {
    name: "Joshua Alexander Arief B.Eng",
    role: "Engineering Director",
    image: "/img/about/joshua.png",
    desc: (
      <div>
        <div>
          Joshua Alexander Arief, B.Eng (Mechatronics) from UNSW Sydney,
          Australia, is an experienced automation engineer in various
          engineering industries in Indonesia and abroad. Providing targeted
          automation and IoT solutions to bring about efficiency improvements
          and cost savings. He is also a certified Energy Auditor for ISO 50001.
        </div>
        <div>
          He is responsible for Industrial 4.0 initiatives, Smart Plant
          Maintenance, and the Electrical Automation division.
        </div>
      </div>
    ),
  },
];

function TeamProfile() {
  const [activeProfile, setactiveProfile] = useState(0);
  return (
    <div className="">
      <div className="mx-auto max-w-7xl flex min-h-[800px] mt-10">
        <div className="w-6/12 pr-8">
          <div className="text-5xl font-bold text-[#0E4F94]">Team Profile</div>
          <div className="text-4xl font-bold text-[#0E4F94] mt-4">{ProfileData[activeProfile].name}</div>
          <div className="font-semibold mt-4">{ProfileData[activeProfile].role}</div>
          <div className="mt-7 text-base">{ProfileData[activeProfile].desc}</div>
        </div>
        <div className="flex gap-2 w-6/12 mt-32">
          {ProfileData.map((data, index) => (
            <div
              onClick={() => setactiveProfile(index)}
              className={`relative rounded-xl cursor-pointer transition-all duration-300 overflow-hidden h-[390px] ${
                activeProfile === index ? "w-6/12" : "w-2/12"
              }`}
              key={index}
            >
              <Image className={`h-full w-full object-cover ${activeProfile !== index && "grayscale"}`} src={data.image} alt="" width={240} height={432} />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamProfile;
