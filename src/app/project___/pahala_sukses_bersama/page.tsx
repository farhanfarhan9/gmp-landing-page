import React from "react";
import Detail from "@/components/project/detail";
import Banner from "@/components/page/banner";

const bumi_sati_prima = () => {
  const data = {
    title: "PT. Pahala Sukses Bersama",
    path: "Home / Project Portofolio / Company Details",
    image: "/img/project/bspbanner.jpg",
    nickname: "All-purpose Flour Mill",
    location: "Cikande, Banten",
    desc: "WWTP System MBR (Membrane Bio Reactor)",
    picture1: "/img/project/Pahala-Sukses-Bersama-1.jpg",
    picture2: "/img/project/Pahala-Sukses-Bersama-2.jpg",
    picture3: "/img/project/Pahala-Sukses-Bersama-3.jpg",
    picture4: "/img/project/Pahala-Sukses-Bersama-4.jpg",
    picture5: "/img/project/Pahala-Sukses-Bersama-5.jpg",
  };
  return (
    <>
      <Banner title={data.title} path={data.path} image={data.image} />
      <Detail data={data} />
    </>
  );
};

export default bumi_sati_prima;
