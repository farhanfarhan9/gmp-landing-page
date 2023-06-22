import React from "react";
import Detail from "@/components/project/detail";
import Banner from "@/components/page/banner";

const bumi_sati_prima = () => {
  const data = {
    title: "PT. Bumi Sati Prima",
    path: "Home / Project Portofolio / Company Details",
    image: "/img/project/bspbanner.jpg",
    nickname: "All-purpose Flour Mill",
    location: "Siantar",
    desc: "Capacity: 200 tonnes per day",
    picture1: "/img/project/bsp1.jpg",
    picture2: "/img/project/bsp2.jpg",
    picture3: "/img/project/bspbanner.jpg",
    picture4: "/img/project/bsp4.jpg",
    picture5: "/img/project/bsp5.jpg",
  };
  return (
    <>
      <Banner title={data.title} path={data.path} image={data.image} />
      <Detail data={data} />
    </>
  );
};

export default bumi_sati_prima;
