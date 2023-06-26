import React from "react";
import Banner from "@/components/page/banner";
import Product from "@/components/page/Product";

const page = () => {
  const product = [
    {
      title: "Membrane Bio Reactor (MBR)",
      image: "/img/product/product1.png",
      image2: "",
      text: "Membrane Bio Reactor (MBR) adalah sebuah teknologi pengolahan air yang menggabungkan proses biologi dan filtrasi membran dalam satu sistem. MBR digunakan untuk mengolah air limbah, baik itu air limbah domestik maupun industri, dengan tujuan menghilangkan zat-zat pencemar dan menghasilkan air yang dapat digunakan kembali atau air yang memenuhi standar kualitas yang ditetapkan sebelumnya.",
      text2:
        "<p>Proses MBR melibatkan kolam atau tangki biologi di mana organisme mikroba seperti bakteri dan mikroorganisme lainnya menguraikan dan menghilangkan bahan organik dan zat-zat pencemar lainnya dalam air limbah. Selain itu, MBR juga melibatkan membran yang berfungsi sebagai penyaring untuk menangkap partikel-partikel tersuspensi dan bakteri yang tidak terangkat oleh organisme mikroba.</p><p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;text-align:justify;'>Keunggulan Sistem MBR vs Sistem Conventional:</p><ol style='list-style-type: decimal;'><li>Output quality yang sangat jernih dan konsisten</li><li>Waktu tinggal sludge yang tinggi tanpa kekhawatiran akan masalah di pengendapan (karena clarifier tidak diperlukan)</li><li>Sludge production yang rendah</li><li>Waktu start-up yang sangat singkat</li><li>Area yang dibutuhkan sangat kecil (karena clarifier tidak diperlukan)</li><li>Penggunaan kimia yang sangat rendah (karena clarifier tidak diperlukan)</li><li>Operasional Cost yang sangat rendah (automasi yang sangat tinggi)</li><li><span >Capital Cost yang rendah (karena clarifier tidak diperlukan).</span></li></ol>",
    },
    {
      title: "Reverse Osmosis",
      image: "/img/product/product3.png",
      image2: "",
      text: "Reverse Osmosis adalah suatu metode penyaringan yang dapat menyaring berbagai molekul besar dan ion-ion dari suatu larutan dengan cara memberi tekanan pada larutan ketika larutan itu berada di salah satu sisi membran seleksi (lapisan penyaring).",
      text2:
        "<p>Proses tersebut menjadikan zat terlarut terendap di lapisan yang dialiri tekanan sehingga zat pelarut murni bisa mengalir ke lapisan berikutnya. Membran seleksi itu harus bersifat selektif atau bisa memilah yang artinya bisa dilewati zat pelarutnya (atau bagian lebih kecil dari larutan) tetapi tidak bisa dilewati zat terlarut seperti molekul berukuran besar dan ion-ion.</p> <p>Osmosis adalah sebuah fenomena alam yang terjadi dalam sel makhluk hidup dimana molekul pelarut (biasanya air) akan mengalir dari daerah berkonsentrasi rendah ke daerah Berkonsentrasi tinggi melalui sebuah membran semipermeabel. Membran semipermeabel ini menunjuk ke membran sel atau membran apa pun yang memiliki struktur yang mirip atau bagian dari membran sel. Gerakan dari pelarut berlanjut sampai sebuah konsentrasi yang seimbang tercapai di kedua sisi membran.</p> <p>Reverse osmosis adalah sebuah proses pemaksaan sebuah terlarut dari sebuah daerah konsentrasi terlarut tinggi melalui sebuah membran ke sebuah daerah terlarut rendah dengan menggunakan sebuah tekanan melebihi tekanan osmotik. Dalam istilah lebih mudah, reverse osmosis adalah mendorong sebuah larutan melalui filter yang menangkap zat terlarut dari satu sisi dan membiarkan pendapatan pelarut murni dari sisi satunya.</p> <p>Untuk mendapatkan air tawar dari air laut bisa dilakukan dengan cara Reverse Osmosis, suatu proses penyaringan air laut dengan menggunakan tekanan dialirkan melalui suatu membran saring. Sistem ini disebut SWRO (Seawater Reverse Osmosis) dan banyak digunakan pada kapal laut atau instalasi air bersih di pantai dengan bahan baku air laut.</p>",
    },
    {
      title: "Dissolved Air Flotation",
      image: "/img/product/product4.png",
      image2: "",
      text: "Dissolved Air Flotation (DAF) adalah proses pengolahan air yang digunakan untuk menghilangkan partikel-partikel terlarut dan tersuspensi dari air atau air limbah dengan menggunakan gelembung-gelembung udara yang dihasilkan dalam air yang jenuh dengan udara. Prinsip dasar dari DAF adalah mengikat partikel-partikel tersebut ke gelembung-gelembung udara sehingga mereka naik ke permukaan air dan dapat dihapus.",
      text2:
        "<div class='mt-5 text-[#41444B]'>Pada dasarnya, prinsip kerja dissolved air flotation merupakan proses penambahan gelembung udara ke dalam air limbah yang tercampur dengan partikel minyak terdispersi. Penambahan gelembung udara pada unit dissolved air flotation akan mempercepat proses naiknya minyak ke lapisan atas air karena massa jenis udara yang jauh lebih kecil daripada air, sehingga gelembung udara tersebut secara otomatis akan naik ke permukaan air.</div><div class='mt-5 text-[#41444B]'>Metode dissolved air flotation telah digunakan secara luas untuk proses pengolahan air limbah yang dihasilkan dari industri pemurnian minyak, petrokimia, pabrik kimia, pengolahan air umum, dan lain-lain.</div><div class='mt-5 text-[#41444B]'>Instalasi dissolved air flotation terdiri dari beberapa buah peralatan, yaitu pompa, tangki air, tangki pencampur udara dan air (saturation tank), pipa penyalur udara, pipa penyalur air, saluran pemasukan air, compressor, dan saluran pengeluaran air, saluran pembuangan padatan, panel pengatur aliran udara (air control panel), dan lain-lain.</div>",
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
