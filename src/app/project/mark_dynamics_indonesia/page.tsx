import React from "react";
import Detail from "@/components/project/detail";
import Banner from "@/components/page/banner";
import Image from "next/image";

const mark_dynamic_indonesia = () => {
  const data = {
    title: "PT. Mark Dynamics Indonesia, Tbk.",
    path: "Home / Project Portofolio / Company Details",
    image: "/img/project/mdibanner.jpg",
    nickname: "Glove Mold Factory",
    location: "Tanjung Morawa",
    desc: "Upgrade clarifier and water re-use 30 tonnes to 100 tonnes wastewater",
  };
  return (
    <>
      <Banner title={data.title} path={data.path} image={data.image} />
      <Detail
        pt={data.title}
        title={data.nickname}
        location={data.location}
        desc={data.desc}
      >
        <Image
          src="/img/project/mdibanner.jpg"
          unoptimized
          height={100}
          width={100}
          className="w-full"
          alt=""
        />
        <div className="grid grid-cols-2 gap-3 my-3">
          <Image
            src="/img/project/mdi2.jpg"
            unoptimized
            height={100}
            width={100}
            className="w-full h-80 object-cover"
            alt=""
          />
          <Image
            src="/img/project/mdi3.jpeg"
            unoptimized
            height={100}
            width={100}
            className="w-full h-80 object-cover"
            alt=""
          />
        </div>
      </Detail>
    </>
  );
};

export default mark_dynamic_indonesia;
