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
    picture1: "/img/project/mdibanner.jpg",
    picture2: "/img/project/mdi2.jpg",
    picture3: "/img/project/mdi3.jpeg",
    picture4: "/img/project/mdi4.jpg",
    picture5: "/img/project/mdi5.jpg",
    videopicture: "",
    video: "BhhUBdMsnCA",
  };
  return (
    <>
      <Banner title={data.title} path={data.path} image={data.image} />
      <Detail data={data} />
    </>
  );
};

export default mark_dynamic_indonesia;
