import React from "react";
import Banner from "@/components/page/banner";
import Product from "@/components/page/Product";

const page = () => {
  const product = [
    {
      title: "Membrane Bio Reactor (MBR)",
      image: "/img/product/product1.png",
      image2: "",
      text: "Membrane Bio Reactor (MBR) adalah sistem yang menggunakan kombinasi antara membrane proses seperti ultrafiltration/microfiltration dengan proses biologi. Sistem ini sangat membantu dalam menghemat tempat dan mempersingkat start-up bioreactor.",
      text2:
        "<p>Keunggulan Sistem MBR vs Sistem Conventional:</p> <ol> <li>Output quality yang sangat jernih dan konsisten</li> <li>Waktu tinggal sludge yang tinggi tanpa kekhawatiran akan masalah di pengendapan (karena clarifier tidak diperlukan)</li> <li>Sludge production yang rendah</li> <li>Waktu start-up yang sangat singkat</li> <li>Area yang dibutuhkan sangat kecil (karena clarifier tidak diperlukan)</li> <li>Penggunaan kimia yang sangat rendah (karena clarifier tidak diperlukan)</li> <li>Operasional Cost yang sangat rendah (automasi yang sangat tinggi)</li> <li>Capital Cost yang rendah (karena clarifier tidak diperlukan).</li> </ol>",
    },
    // {
    //   title: "Moving Bed Biofilm Reactor (MBBR)",
    //   image: "/img/product/product2.png",
    //   image2: "",
    //   text: "Moving bed biofilm reactor (MBBR) merupakan solusi dari permasalahan kapasitas limbah yang bertambah akan tetapi ada kendala untuk melakukan penambahan unit bangunan. MBBR ini termasuk dalam kelompok attached growth reactor, yaitu reaktor dimana mikrobiologi tumbuh di permukaan media tertentu kemudian membentuk lapisan film yang berfungsi sebagai semacam filter untuk air limbah.",
    //   text2: "",
    // },
    {
      title: "Reverse Osmosis",
      image: "/img/product/product3.png",
      image2: "",
      text: "Reverse Osmosis adalah suatu metode penyaringan yang dapat menyaring berbagai molekul besar dan ion-ion dari suatu larutan dengan cara memberi tekanan pada larutan ketika larutan itu berada di salah satu sisi membran seleksi (lapisan penyaring).",
      text2: "",
    },
    {
      title: "Dissolved Air Flotation",
      image: "/img/product/product4.png",
      image2: "",
      text: "DAF/Dissolved Air Floatation adalah sistem untuk memisahkan coagulated dan flocculated solid dengan menggunakan bubble udara yang sangat kecil yang akan mengapungkan zat-zat yang akan dipisahkan dari dalam air. Design DAF yang customizable dan akurat jugalah sangat krusial dalam teknologi IPAL.",
      text2: "",
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
