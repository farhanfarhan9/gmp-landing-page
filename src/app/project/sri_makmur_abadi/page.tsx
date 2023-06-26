import React from "react";
import Detail from "@/components/project/detail";
import Banner from "@/components/page/banner";

const sri_makmur_abadi = () => {
  const data = {
    title: "PT. Sri Makmur Abadi",
    path: "Home / Project Portofolio / Company Details",
    image: "/img/project/bannersma.jpg",
    nickname: "Coconut Flour Factory",
    location: "Air Batu, Asahan",
    desc: "Wastewater capacity of 100 tons of wastewater per day",
    picture1: "/img/project/sma1.jpg",
    picture2: "/img/project/sma2.jpg",
    picture3: "/img/project/sma3.jpg",
    picture4: "/img/project/sma4.jpg",
    picture5: "/img/project/sma5.jpg",
    video: "CKe3Kzbi-Ao"
  };
  return (
    <>
      <Banner title={data.title} path={data.path} image={data.image} />
      <Detail data={data} />
    </>
  );
};

export default sri_makmur_abadi;
