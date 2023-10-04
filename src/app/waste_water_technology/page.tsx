"use client";
import React from "react";
import Banner from "@/components/page/banner";
import Product from "@/components/page/Product";
import Translator from '@/utils/Translator';
import { useSearchParams } from 'next/navigation';

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || undefined;
  const product = [
    {
      title: Translator.t('membrane-bio-reactor-title', lang),
      image: "/img/product/product1.png",
      image2: "",
      text: Translator.t('membrane-bio-reactor-desc-1', lang),
      text2:
        "<p>" + Translator.t('membrane-bio-reactor-desc-2', lang) + "</p><p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;text-align:justify;'>" + Translator.t('membrane-bio-reactor-desc-3', lang) + "</p><ol style='list-style-type: decimal;'><li>" + Translator.t('membrane-bio-reactor-desc-3-1', lang) + "</li><li>" + Translator.t('membrane-bio-reactor-desc-3-2', lang) + "</li><li>" + Translator.t('membrane-bio-reactor-desc-3-3', lang) + "</li><li>" + Translator.t('membrane-bio-reactor-desc-3-4', lang) + "</li><li>" + Translator.t('membrane-bio-reactor-desc-3-5', lang) + "</li><li>" + Translator.t('membrane-bio-reactor-desc-3-6', lang) + "</li><li>" + Translator.t('membrane-bio-reactor-desc-3-7', lang) + "</li><li><span >" + Translator.t('membrane-bio-reactor-desc-3-8', lang) + "</span></li></ol>",
    },
    {
      title: Translator.t('reverse-osmosis-title', lang),
      image: "/img/product/product3.png",
      image2: "",
      text: Translator.t('reverse-osmosis-desc-1', lang),
      text2:
        "<p class='text-[#41444B]'>" + Translator.t('reverse-osmosis-desc-2', lang) + "</p> <p class='text-[#41444B]'>" + Translator.t('reverse-osmosis-desc-3', lang) + "</p> <p class='text-[#41444B]'>" + Translator.t('reverse-osmosis-desc-4', lang) + "</p> <p class='text-[#41444B]'>" + Translator.t('reverse-osmosis-desc-5', lang) + "</p>",
    },
    {
      title: Translator.t('dissolved-air-flotation', lang),
      image: "/img/product/product4.png",
      image2: "",
      text: Translator.t('dissolved-air-flotation-desc-1', lang),
      text2:
        "<div class='mt-5 text-[#41444B]'>" + Translator.t('dissolved-air-flotation-desc-2', lang) + "</div><div class='mt-5 text-[#41444B]'>" + Translator.t('dissolved-air-flotation-desc-3', lang) + "</div><div class='mt-5 text-[#41444B]'>" + Translator.t('dissolved-air-flotation-desc-4', lang) + "</div>",
    },
  ];
  const data = {
    path: "Home / Waste Water Technology",
  };
  return (
    <>
      <Banner
        path={data.path}
        title="Waste Water Technology"
        image="/img/product/bannerproduct.jpg"
      />
      <div className="max-w-7xl mx-auto my-10">
        {product.map((val, index) => (
          <Product key={index} data={val} />
        ))}
      </div>
    </>
  );
};

export default page;
