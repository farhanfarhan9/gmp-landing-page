import React from "react";
import Detail from "@/components/project/detail";
import Banner from "@/components/page/banner";

const indowangi_nusajaya = () => {
  const data = {
    title: "PT. Indowangi Nusajaya",
    path: "Home / Project Portofolio / Company Details",
    image: "/img/project/bspbanner.jpg",
    nickname: "Patchouli Oil Refinery",
    location: "KIM, Medan",
    desc: "Upgrade clarifier and water re-use 30 tonnes to 100 tonnes wastewater",
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

export default indowangi_nusajaya;
