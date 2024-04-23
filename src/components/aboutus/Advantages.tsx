import Image from "next/image";
import React from "react";

function Advantages() {
  return (
    <div className="relative">
      <div className="flex w-[2000px] max-w-7xl absolute top-0 left-1/2 -translate-x-1/2 -mt-40 rounded-3xl shadow-md overflow-hidden">
        <div className="w-1/2 bg-[#EDF2F5] p-10">
          <div className="flex items-center justify-center gap-3">
            <Image
              src={"/img/icons/vision.png"}
              width={50}
              height={50}
              alt=""
            />
            <div className="text-4xl text-[#0E4F94] font-bold">Vision</div>
          </div>
          <div className="mt-3">
            A national integrated engineering company that provides the right
            quality and right cost solutions for the advancement of Indonesian
            industry.
          </div>
        </div>
        <div className="w-1/2 bg-[#DFF5FF] p-10">
          <div className="flex items-center justify-center gap-3">
            <Image src={"/img/icons/mission.png"} width={50} height={50} alt={""} />
            <div className="text-4xl text-[#0E4F94] font-bold">
              Mission
            </div>
          </div>
          <div className="mt-3">
            <ul className="list-disc">
              <li>Prioritizing Technology Research and Development.</li>
              <li>
                Building internal engineering capabilities with a
                customer-oriented spirit.
              </li>
              <li>
                Always listen and always understand the needs of the industry in
                the field.
              </li>
              <li>
                Building a network of service centers, logistics and technicians
              </li>
              <li>
                throughout Indonesia. Absolute engineering and safety standards
                compliance.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Image
        src="/img/about/adventagebg1.png"
        width={2000}
        height={800}
        alt=""
      />
      <div className="absolute top-1/2 bottom-0 right-0 left-0">
        <div className="text-5xl font-bold text-white text-center">
          Our Advantages
        </div>
        <div className="text-white grid grid-cols-2 gap-7 mt-10 max-w-7xl mx-auto">
          <div>
            <ul className="list-disc">
              <li>Led by experts in the waste water sector.</li>
              <li>
                Experienced in the industrial and machinery fields for more than
                30 years.
              </li>
              <li>Has a special waste processing laboratory.</li>
              <li>
                We guarantee that all projects achieve quality standards in
                accordance with government regulations.
              </li>
            </ul>
          </div>
          <div>
            <ul className="list-disc">
              <li>Distributor of electromechanical equipment and pumps.</li>
              <li>Customer satisfaction as a priority.</li>
              <li>
                Our products and services combine the advantages of the latest
                technology with a deep understanding of your needs.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
