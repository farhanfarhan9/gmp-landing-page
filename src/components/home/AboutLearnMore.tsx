"use client";
import { Transition } from "@headlessui/react";
import React, { useState } from "react";

const AboutLearnMore = () => {
  const [show, setshow] = useState(false);
  return (
    <>
      <Transition
        show={show}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="mt-5 text-[#41444B]"
      >
        <p className="mb-7 mt-6 ">
          Jasa ini terbukti hanya dapat dilakukan
          oleh Satria Nusa dengan pengalaman dan kapabilitas teknik yang lintas
          disiplin. Sehingga Satria Nusa, tidak hanya menjual unit, tetapi
          menjadi mitra dari pelanggan kami untuk investasi yang optimal.
        </p>
        <p className="mb-7 ">
          Bermodalkan pengalaman dan kepercayaan ini, kami didukung oleh para
          pemilik pabrik, akademisi dan principals untuk mengembangkan solusi
          limbah industri dan domestik. Satria Nusa berhasil mengolah limbah
          dengan pencapaian melebihi baku mutu sehingga pada banyak contoh kasus
          dari pengalaman kami dapat digunakan kembali untuk kebutuhan produksi.
        </p>
        <p>
          Satria Nusa dipimpin oleh Bapak Feli Zulhendri Msc yang merupakan
          wastewater engineer dari Illnois Institute of Technology, Chicago,
          USA. Beliau juga mempublikasikan jurnal teknis berjudul “Evaluation of
          the Capability of Advanced Treatment Process to Redyce Ultimate BOD
          and Provide a Self-sustaining Effluent with Respect to Dissolved
          Oxygen”.
        </p>
      </Transition>

      <button
        onClick={() => {
          setshow(!show);
        }}
        className="px-11 py-4 text-white bg-green-700 mt-7"
      >
        {show ? 'Read Less' : 'Read More'}
      </button>
    </>
  );
};

export default AboutLearnMore;
