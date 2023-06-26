import React from "react";
import Banner from "@/components/page/banner";
import BlueView from "@/components/project/BlueView";
import GreenView from "@/components/project/GreenView";

function Projects() {
  return (
    <>
      <Banner
        title="Project Portofolio"
        path="Home / Project Portofolio"
        image="/img/project/bannerproject.jpg"
      />

      <div className=" my-24 max-w-7xl mx-auto">
        <BlueView
          title="PT. Mark Dynamics Indonesia, Tbk."
          nickname="Glove Mold Factory"
          location="Tanjung"
          image="/pictureporto.png"
          desc="Upgrade clarifier and water re-use 30 tonnes to 100 tonnes
            wastewater"
          url="/project/mark_dynamics_indonesia"
        />

        <GreenView
          title="PT. Bumi Sari Prima"
          image="/pictureporto2.png"
          nickname="All-purpose Flour Mill"
          location="Siantar"
          desc="Capacity: 200 tonnes per day"
          url="/project/bumi_sari_prima"
        />

        <BlueView
          title="PT. Indowangi Nusajaya"
          image="/pictureporto3.png"
          nickname="Patchouli Oil Refinery"
          location="KIM, Medan"
          desc="Upgrade clarifier and water re-use 30 tonnes to 100 tonnes wastewater"
          url="/project/indowangi_nusajaya"
        />

        <GreenView
          title="PT. Sumatera Baru"
          image="/pictureporto4.png"
          nickname="Coconut Flour Mill"
          location="Tanjung Balai, Asahan"
          desc="Capacity: 200 tonnes per day"
          url="/project/sumatera_baru"
        />

        <BlueView
          title="PLTU Banjarsari 2x 135 MW"
          image="/pictureporto5.png"
          nickname=""
          location="Lahat, Sumatera Selatan"
          desc="Oil-Water System (OWS) Implemtation"
          url="#"
        />

        <GreenView
          title="PT. Mayora Indah Tbk"
          image="/pictureporto6.png"
          nickname=""
          location="Tangerang"
          desc="Wastewater Treatment Plant"
          url="#"
        />

        <BlueView
          title="PT. Sri Makmur Abadi"
          image="/img/project/pictureporto7.jpg"
          nickname="Coconut Flour Factory"
          location="Air Batu, Asahan"
          desc="Wastewater capacity of 100 tons of wastewater per day"
          url="/project/sri_makmur_abadi"
        />

        <GreenView
          title="PT. Angso Duo Sawit"
          image="/img/project/pictureporto8.jpg"
          nickname="Palm Oil Factory"
          location="Jambi"
          desc="Reducing siltation and Improving Anaerobic and Aerobic"
          url="#"
        />

        <BlueView
          title="PT. Toba Pulp Lestari Tbk."
          image="/img/project/pictureporto9.jpg"
          nickname=""
          location="Toba Samosir, Sumatera Utara"
          desc="Implementasi Sewage Treatment Plant"
          url="#"
        />

        <GreenView
          title="PT. Kilang Mie Gunung Mas"
          image="/img/project/pictureporto10.jpg"
          nickname="Noodle Factory"
          location="Tanjung Morawa, Sumut"
          desc="Pergantian Media Filter dan Pompa"
          url="#"
        />

        <BlueView
          title="PT. Pahala Sukses Bersama"
          image="/img/project/pictureporto11.jpg"
          nickname="Flour Factory"
          location="Cikande, Banten"
          desc="WWTP System MBR (Membrane Bio Reactor)"
          url="/project/pahala_sukses_bersama"
        />

        <GreenView
          title="CV. Aroma"
          image="/img/project/pictureporto12.jpeg"
          nickname="Refinery Oil ilam"
          location="KIM, Medan"
          desc="Wastewater capacity of 10 tons of water waste per day"
          url="#"
        />

        <BlueView
          title="PT. Gunung Mas Giok Lie"
          image="/img/project/pictureporto13.jpeg"
          nickname="Dry Noodle Factory"
          location="Tanjong Morawa, Sumut"
          desc="Wastewater capacity of 5 tons of water waste per day"
          url="#"
        />
        <GreenView
          title="Astra Group"
          image="/img/project/pictureporto14.jpeg"
          nickname="Palm Oil Factory"
          location="Jakarta Timur, Jakarta"
          desc="Reduction of siltation and Improving Anaerobic and Aerobic"
          url="#"
        />

        <BlueView
          title="PT. Buana Wirasubur Sakti"
          image="/img/project/pictureporto15.jpeg"
          nickname="Palm Oil Factory"
          location="Kalimantan Timut"
          desc="Wastewater capacity of 5 tons of water waste per day"
          url="#"
        />
      </div>
    </>
  );
}

export default Projects;
