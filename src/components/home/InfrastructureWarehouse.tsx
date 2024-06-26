"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function InfrastructureWarehouse() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  const [activeservice, setactiveservice] = useState(0);
  return (
    <div className="py-5 mt-5 space-y-10 md:py-10 md:mt-10 md:mx-auto md:max-w-7xl" id="infrasctructure">
      <div className="text-xl md:text-4xl font-semibold text-[#098AD2] text-center flex justify-center gap-3 md:gap-5">
        <span className="border-r-2 md:border-r-4 border-[#098AD2] pr-3">{Translator.t("infrastructure", lang)}</span>
        <span>{Translator.t("warehouse", lang)}</span>
      </div>
      <div className="grid grid-cols-1 px-2 md:grid-cols-3 gap-14">
        <div className="w-full pl-6 border-l-2 border-l-[#77C3ED] space-y-5">
            <h2 className="text-[#098AD2] font-semibold">Medan</h2>  
            <p className="">Jl. Budi Luhur No. 196 , Medan 20123</p>
        </div>
        <div className="w-full pl-6 border-l-2 border-l-[#77C3ED] space-y-5">
            <h2 className="text-[#098AD2] font-semibold">P. Siantar</h2>  
            <p className="">Jl. Lau Cimba (Samping Perumahan Graha Harmoni), Pematang Siantar</p>
        </div>
        <div className="w-full pl-6 border-l-2 border-l-[#77C3ED] space-y-5">
            <h2 className="text-[#098AD2] font-semibold">Banda Aceh</h2>  
            <p className="">Jl. Blang Bintang Krueng Raya, Desa/Kelurahan Data Makmur, Kec. Blang Bintang, Aceh Besar - Aceh</p>
        </div>
        <div className="w-full pl-6 border-l-2 border-l-[#77C3ED] space-y-5">
            <h2 className="text-[#098AD2] font-semibold">Lhokseumawe</h2>  
            <p className="">Jl. Elak, Desa Jeulikat Kec. Blang Mangat, Kota Lhoksemauwe 24375</p>
        </div>
        <div className="w-full pl-6 border-l-2 border-l-[#77C3ED] space-y-5">
            <h2 className="text-[#098AD2] font-semibold">Rantau Prapat</h2>  
            <p className="">Komp. Pergudangan Kesuma Wijaya Jl. H. Adam Malik / Jl. By Pass No. 1,2,3 Blok III Kel. Sirondurung, Kec. Rantau Utara</p>
        </div>
        <div className="w-full pl-6 border-l-2 border-l-[#77C3ED] space-y-5">
            <h2 className="text-[#098AD2] font-semibold">Langsa</h2>  
            <p className="">Jl. A. Yani, Ruko No 1 s/d 6, Kel. Birem Puntong, Kec. Langsa Baro - Kota Langsa 24415</p>
        </div>
      </div>
    </div>
  );
}

export default InfrastructureWarehouse;
