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
      text: "AQUAHELIX-TECO® SURFACE AERATOR dirancang untuk aerasi kolam limbah dengan kontaminan dan solid yang tinggi dimana sistem aerasi lainnya, seperti membran aerasi dan blower pada umumnya dapat gagal. AQUAHELIX-TECO® memiliki design dengan double-helix impeller dengan daya hisap dan high-sear energi kinetik yang besar.",
      text2: "",
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
      text2: "",
    },
    {
      title: "Filter Press",
      image: "/img/produk/produk5.png",
      image2: "",
      text: "Sistem dewatering yang paling umum serta sangat rendah opex dan capex adalah filter press.",
      text2: "",
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
