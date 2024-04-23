import Advantages from "@/components/aboutus/Advantages";
import CompanyJourney from "@/components/aboutus/CompanyJourney";
import TeamProfile from "@/components/aboutus/TeamProfile";
import Image from "next/image";
import React from "react";

function AboutUs() {
  return (
    <div>
      <div className="relative">
        <Image
          src={"/img/about/aboutus-bg1.png"}
          alt=""
          width={2000}
          height={800}
        />
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold">
        Stepping into the Future <br />
        from Experience to Innovation
      </div> */}
        <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center">
          <div className="w-full mx-auto max-w-7xl text-5xl font-bold text-white">
            Stepping into the Future <br />
            from Experience to Innovation
          </div>
        </div>
      </div>
      <Image
        src="/img/about/aboutus-bg2.png"
        width={2000}
        height={800}
        alt=""
      />
      <div className="mx-auto max-w-7xl mt-10 mb-64">
        <div className="text-5xl font-bold text-[#0E4F94] text-center">
          About Us
        </div>
        <div className="mt-7">
          <div>
            With the success of building SNE into a National Engineering
            Company. The company is committed to continuously improve internally
            by meeting various occupational safety and quality management
            compliance requirements. With this spirit, SNE already has
            Occupational Safety and Health Management System (SMK3)
            certification. Internal improvement is also followed by a
            digitalization program since 2023 aimed at the implementation of
            Good Corporate Governance. This stable, accountable & transparent
            Internal System is proven to make SNE an Innovative Company. SNE
            team always carry out work with a character full of responsibility
            and sense of ownership.
          </div>
          <div className="mt-7">
            This character gives rise to various solutions for clients. As
            evidence, SNE now has 1 patent for aeration systems. SNE is also
            registering a patent for Dissolved Air Floatation (DAF) system. SNE
            allocates a portion of our profits to ensure employee welfare and
            Research & Development (R&D). As a proof of our seriousness to build
            a sustainable and reliable Company. SNE built Knowledge Management
            System (KMS) & Training Center aimed at quality & safety management
            for all our works. SNE is committed to be a growing company by
            continuously learning to provide the best solutions for our
            customers.
          </div>
        </div>
      </div>
      <Advantages />
      <CompanyJourney />
      <TeamProfile />
    </div>
  );
}

export default AboutUs;
