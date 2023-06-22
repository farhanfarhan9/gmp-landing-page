import React from "react";
import ServiceExpand from "./ServiceExpand";

const Expand = () => {
  const data = [
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
      bg: "/bg3.png",
      desc: "Satria Nusa Enjinering merupakan perusahaan pengelolaan air limbah nasional yang berhasil menerapkan terknologi mutakhir dalam water and wastewater technology.",
      color: "bg-blue-800",
      with: "w-1/5",
    },
    {
      id: 3,
      title: "Civil & Fabrications",
      bg: "/bg4.png",
      desc: "SNE memiliki kapabilitas internal untuk konstruksi sipil dan mekanikal. Dengan pengalaman lebih dari 10 tahun, SNE sudah terlibat dalam berbagai konstruksi untuk keperluan industri di seluruh Indonesia.",
      color: "bg-green-800",
      with: "w-1/5",
    },
    {
      id: 4,
      title: "Mechanical & Electrical",
      bg: "/bg5.png",
      desc: "SNE melalui Satria Elektrik yang telah memiliki pengalaman lebih dari 40 tahun di bidang elektromotor dan gearmotor telah membantu banyak industri dalam mencapai efisiensi daya.",
      color: "bg-amber-800",
      with: "w-1/5",
    },
  ];
  return (
    <div className="relative flex justify-center">
      {data.map((val, index) => (
        <ServiceExpand key={index} data={val} />
      ))}

      {/* <div className="w-2/5 relative">
        <Image
          unoptimized
          width={100}
          height={100}
          src="/background2.png"
          alt="background2"
          className="w-full"
        />
        <div className="absolute left-0 right-0 top-0 bottom-0">
          <div className="flex h-full justify-center items-center">
            <div className="flex flex-col text-white px-16">
              <div className="font-bold pts-40">Service Kami</div>
              <p>
                Satria Nusa has integrated internal capabilities in the fields
                of mechatronic, civil and chemical engineering for quality
                assurance. Our experts are spread across Sumatra Island and Java
                Island to serve the following:
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/5 relative overflow-hidden">
        <Image
          unoptimized
          width={100}
          height={100}
          src="/bg3.png"
          alt="background2"
          className="h-full w-full"
        />
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-blue-600 opacity-50"></div>
        <div className="absolute left-0 right-0 top-0 bottom-0">
          <div className="flex h-full justify-center items-center">
            <div className="flex flex-col text-white px-16">
              <div className="font-bold pts-40">
                Water & Wastewater Technology
              </div>
              <p>
                PT. SATRIA NUSA ENJINERING (SNE) adalah sebuah perusahaan teknik
                yang berada dibawah naungan Satria Elektrik Group.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/5 relative overflow-hidden">
        <Image
          unoptimized
          width={100}
          height={100}
          src="/bg4.png"
          alt="background2"
          className="h-full w-full"
        />
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-green-600 opacity-50"></div>
        <div className="absolute left-0 right-0 top-0 bottom-0">
          <div className="flex h-full justify-center items-center">
            <div className="flex flex-col text-white px-16">
              <div className="font-bold pts-40">Civil & Fabrications</div>
              <p>
                SNE memiliki kapabilitas internal untuk konstruksi sipil dan
                mekanikal. Dengan pengalaman selama 11 tahun, SNE sudah terlibat
                dalam berbagai konstruksi industri di seluruh Indonesia.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/5 relative overflow-hidden">
        <Image
          unoptimized
          width={100}
          height={100}
          src="/bg5.png"
          alt="background2"
          className="h-full w-full"
        />
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-amber-600 opacity-50"></div>
        <div className="absolute left-0 right-0 top-0 bottom-0">
          <div className="flex h-full justify-center items-center">
            <div className="flex flex-col text-white px-16">
              <div className="font-bold pts-40">Mechanical & Electrical</div>
              <p>
                Lahir dari Satria Elektrik Group, SNE memberikan solusi
                terintegrasi untuk klien untuk menyelesaikan masalah limbah
                untuk industri.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Expand;
