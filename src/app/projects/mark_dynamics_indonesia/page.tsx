import React from "react";
import Detail from "@/components/project/detail";
import Banner from "@/components/page/banner";
import Image from "next/image";

const data = {
  title: "PT. Mark Dynamics Indonesia, Tbk.",
  desc: "Home / Project Portofolio / Company Details",
  image: "/pictureporto.png"
}


const mark_dynamic_indonesia = () => {
  return (
    <>
      <Banner title={data.title} desc={data.desc} image={data.image} />
      <Detail
        pt="PT. Mark Dynamics Indonesia, Tbk."
        title="Glove Mold Factory"
        location="Tanjung Morawa"
        desc="Upgrade clarifier and water re-use 30 tonnes to 100 tonnes wastewater"
      >
        <Image
          src="/pictureporto.png"
          unoptimized
          height={100}
          width={100}
          className="w-full"
          alt=""
        />
      </Detail>
    </>
  );
};

export default mark_dynamic_indonesia;
