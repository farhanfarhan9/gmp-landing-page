import React from "react";
import Detail from "@/components/project/detail";
import Banner from "@/components/page/banner";
import Image from "next/image";

const mark_dynamic_indonesia = () => {
  const data = {
    title: "PT. Sumatera Baru",
    path: "Home / Project Portofolio / Company Details",
    image: "/img/project/sb1.jpg",
    nickname: "Glove Mold Factory",
    location: "Tanjung Morawa",
    desc: "Upgrade clarifier and water re-use 30 tonnes to 100 tonnes wastewater",
    picture1: "/img/project/sb1.jpg",
    picture2: "/img/project/sb2.jpg",
    picture3: "/img/project/sb3.jpg",
    picture4: "/img/project/sb4.jpg",
    picture5: "/img/project/sb5.jpg",
  };
  return (
    <>
      <Banner title={data.title} path={data.path} image={data.image} />
      <Detail data={data} />
    </>
  );
};

export default mark_dynamic_indonesia;
