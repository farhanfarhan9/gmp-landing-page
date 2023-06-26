import React from "react";
import Banner from "@/components/page/banner";
import Product from "@/components/page/Product";
import ProductSecondary from "@/components/page/ProductSecondary";

const page = () => {
  const machineries = [
    {
      title: "Aquahelix Surface Aerator",
      image: "/img/produk/productaquahelix.png",
      image2: "",
      text: "AQUAHELIX-TECO® SURFACE AERATOR dirancang untuk aerasi kolam limbah dengan kontaminan dan solid yang tinggi dimana sistem aerasi lainnya, seperti membran aerasi dan blower pada umumnya dapat gagal. AQUAHELIX-TECO® memiliki design dengan double-helix impeller dengan daya hisap dan high-sear energi kinetik yang besar. Dua hal ini yang menyebabkan AQUAHELIX-TECO® memiliki SAE (Standard Aeration Efficiency) yang mencapai 5-6 KgO2/Kwh, yang notabene jauh melebihi teknologi yang beredar. Standard SAE yang dimiliki oleh surface aerator lainnya hanyalah 1.2-2.4 KgO2/Kwh.",
      text2:
        "<div class='mt-5 text-[#41444B]'>AQUAHELIX-TECO® SURFACE AERATOR juga dirancang dengan pemikiran untuk kenyamanan user dan maintenance team sebagai acuan: warranty yang panjang, lifetime yang tinggi (material anti korosi untuk blade serta heavy-duty SS316, Polyeurethane dan Zn-Alum floater), serta spareparts yang selalu tersedia.</div> <div class='mt-5 text-[#41444B]'>AQUAHELIX-TECO® SURFACE AERATOR juga memiliki design range yang sangat besar, dimulai dari 7.5HP sampai dengan 100HP untuk semua kebutuhan aerasi dan industri serta memiliki kapasitas mixing depth yang dapat mencapai kedalaman 6m.</div>",
    },
    {
      title: "Lamella Clarifier Tank",
      image: "/img/produk/produk2.png",
      image2: "",
      text: "Inclined Plate Clarifier atau Lamella Clarifier adalah sistem clarifier yang memanfaatkan luasan bidang yang besar (high surface area) dari plat-plat yang disusun dengan kemiringan 45-70o. Keunggulan lamella clarifier adalah penghematan sampai dengan 40% dari luasan clarifier convensional serta tidak diperlukannya mechanical stirrer sehingga konsumsi listrik menjadi sangat rendah.",
      text2: "",
    },
    {
      title: "Membrane Bio Reactor (MBR)",
      image: "/img/product/product1.png",
      image2: "",
      text: "Membrane Bio Reactor (MBR) adalah sistem yang menggunakan kombinasi antara membrane proses seperti ultrafiltration/microfiltration dengan proses biologi. Sistem ini sangat membantu dalam menghemat tempat dan mempersingkat start-up bioreactor.",
      text2:
        "<p>Keunggulan Sistem MBR vs Sistem Conventional:</p> <ol> <li>Output quality yang sangat jernih dan konsisten</li> <li>Waktu tinggal sludge yang tinggi tanpa kekhawatiran akan masalah di pengendapan (karena clarifier tidak diperlukan)</li> <li>Sludge production yang rendah</li> <li>Waktu start-up yang sangat singkat</li> <li>Area yang dibutuhkan sangat kecil (karena clarifier tidak diperlukan)</li> <li>Penggunaan kimia yang sangat rendah (karena clarifier tidak diperlukan)</li> <li>Operasional Cost yang sangat rendah (automasi yang sangat tinggi)</li> <li>Capital Cost yang rendah (karena clarifier tidak diperlukan).</li> </ol>",
    },
    {
      title: "Dissolved Air Flotation",
      image: "/img/produk/produk4.png",
      image2: "",
      text: "DAF/Dissolved Air Floatation adalah sistem untuk memisahkan coagulated dan flocculated solid dengan menggunakan bubble udara yang sangat kecil yang akan mengapungkan zat-zat yang akan dipisahkan dari dalam air. Design DAF yang customizable dan akurat jugalah sangat krusial dalam teknologi IPAL.",
      text2:
        "<div class='mt-5 text-[#41444B]'>Pada dasarnya, prinsip kerja dissolved air flotation merupakan proses penambahan gelembung udara ke dalam air limbah yang tercampur dengan partikel minyak terdispersi. Penambahan gelembung udara pada unit dissolved air flotation akan mempercepat proses naiknya minyak ke lapisan atas air karena massa jenis udara yang jauh lebih kecil daripada air, sehingga gelembung udara tersebut secara otomatis akan naik ke permukaan air.</div><div class='mt-5 text-[#41444B]'>Metode dissolved air flotation telah digunakan secara luas untuk proses pengolahan air limbah yang dihasilkan dari industri pemurnian minyak, petrokimia, pabrik kimia, pengolahan air umum, dan lain-lain.</div><div class='mt-5 text-[#41444B]'>Instalasi dissolved air flotation terdiri dari beberapa buah peralatan, yaitu pompa, tangki air, tangki pencampur udara dan air (saturation tank), pipa penyalur udara, pipa penyalur air, saluran pemasukan air, compressor, dan saluran pengeluaran air, saluran pembuangan padatan, panel pengatur aliran udara (air control panel), dan lain-lain.</div>",
    },
    {
      title: "Filter Press",
      image: "/img/produk/produk5.png",
      image2: "",
      text: "Filter press adalah salah satu equipment yang banyak digunakan pada berbagai industri. Fungsi utama filter press ini adalah memisahkan dua fase yang berbeda dengan cara proses filtrasi menggunakan tekanan angin dan filter cloth. Air atau liquid yang hendak dipisahkan dari fase slurry dipompakan kedalam filter press untuk melewati selaput membrane.",
      text2: "<div class='mt-5 text-[#41444B]'>Kotoran atau sludge akan tertinggal pada cloth, sedangkan cairan yang bersih atau yang diinginkan akan tersaring dan keluar melalui pipa kapiler yang terhubung dengan filter cloth.</div> <div class='mt-5 text-[#41444B]'class='mt-5 text-[#41444B]'>Secara umum ada 3 fungsi utama dari sebuah filter press, yang ketiganya amat diperlukan di dunia industri. Ketiga fungsi tersebut antara lain :</div class='mt-5 text-[#41444B]'><p>1. Fungsi Filtrasi</p><p>Filter press, sesuai dengan namanya bisa menyaring kotoran ataupun sludge yang masuk sehingga berkumpul menjadi kumpulan lumpur yang lebih kental konsentrasinya. Dalam proses ini, air yang bersih atau lebih sedikit mengandung pengtor lumpur akan keluar melalui jalur pemipaan.</p><p>2. Fungsi Cake Forming</p><p>Dengan proses penekanan lumpur secara bertahap, akan terbentuk cake yang seragam dalam filter plate. Dimana ketika filter plate satu telah penuh maka proses cake forming akan berlanjut ke filter plate selanjutnya.</p><p>3. Fungsi Dewatering</p><p>Dengan bantuan kompressor, angin akan dipompakan memasuki rongga-rongga filter plates untuk membuat cake yang terbentuk tadi berkurang kadar airnya. Dengan proses dewatering ini akan didapatkan cake dengan kadar air kurang dari 40% sehingga cake yang dibuang menjadi lebih ringan.</p><div>",
    },
    {
      title: "Wet Scrubber",
      image: "/img/produk/produk6.png",
      image2: "",
      text: "Wet Scrubber adalah sistem untuk mengurangi/menghilangkan polutant udara dari pabrik anda. Scubber kami juga sangat customized dan dapat menargetkan secara spesifik polutant yang akan dipisahkan dari emisi asap pabrik anda.",
      text2: "",
    },
  ];

  const bacteria = [
    {
      title: "Wet Scrubber",
      image: "/img/produk/bakteri1.png",
    },
    {
      title: "Bacteria - Anaerob",
      image: "/img/produk/bakteri2.png",
    },
  ];
  const clotes = [
    {
      title: "Filter Clothes",
      image: "/img/produk/clotes1.png",
    },
  ];
  return (
    <>
      <Banner title="Product" path="Home / Products" image="/bg3.png" />
      <div className="mx-auto max-w-7xl my-14">
        <div className="font-bold text-blue-800 pts-24">Machineries</div>
        {machineries.map((data, index) => (
          <Product key={index} data={data} />
        ))}
      </div>
      <div className="mx-auto max-w-7xl my-14">
        <div className="font-bold text-blue-800 pts-24">
          Consumable - Bacteria
        </div>
        {bacteria.map((data, index) => (
          <ProductSecondary key={index} data={data} />
        ))}
      </div>
      <div className="mx-auto max-w-7xl my-14">
        <div className="font-bold text-blue-800 pts-24">
          Consumable - Filter Clotes
        </div>
        {clotes.map((data, index) => (
          <ProductSecondary key={index} data={data} />
        ))}
      </div>
    </>
  );
};

export default page;
