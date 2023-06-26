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
      text2: "<div class='mt-5'>Proses DAF melibatkan beberapa tahapan utama. Pertama, air atau air limbah masuk ke tangki pengolahan di mana udara terlarut diberikan ke dalam air dengan tekanan tinggi melalui suatu sistem pengatur. Kemudian, tekanan udara tiba-tiba berkurang saat air memasuki tangki pengendapan, sehingga udara yang terlarut dalam air terlepas dan membentuk gelembung-gelembung kecil.</div><div class='mt-5'>Gelembung-gelembung udara tersebut menempel pada partikel-partikel terlarut dan tersuspensi dalam air limbah, sehingga partikel-partikel tersebut menjadi lebih ringan dan naik ke permukaan air dalam bentuk busa. Busa tersebut kemudian dikumpulkan dan dihapus dari permukaan air dengan menggunakan pengumpul busa.</div><div class='mt-5'>Keunggulan utama dari proses DAF adalah sebagai berikut:</div><div><ol style='list-style-type: decimal;'><li>Penghilangan Partikel Efektif: DAF mampu menghilangkan partikel-partikel terlarut dan tersuspensi dengan ukuran yang sangat kecil dan beragam, termasuk partikel berat seperti minyak, lemak, padatan terendap, zat organik, dan logam berat.</li><li>Kualitas Air yang Tinggi: Proses DAF menghasilkan air yang jernih dan bersih dengan konsentrasi partikel yang sangat rendah. Ini membuatnya cocok untuk aplikasi yang memerlukan air dengan kualitas tinggi, seperti industri makanan dan minuman, industri farmasi, dan pemurnian air minum.</li><li>Efisiensi Tinggi: DAF memiliki efisiensi tinggi dalam penghilangan partikel dan zat-zat terlarut, serta kemampuan untuk mengatasi fluktuasi beban air limbah yang tinggi. Hal ini membuatnya dapat beradaptasi dengan baik dalam mengolah air limbah dengan karakteristik yang berbeda.</li><li>Proses Sederhana: DAF memiliki desain dan operasi yang relatif sederhana dibandingkan dengan beberapa teknologi pengolahan air limbah lainnya. Ini membuatnya lebih mudah untuk dioperasikan dan dikelola, serta membutuhkan ruang yang relatif kecil.</li><li>Penggunaan Bahan Kimia yang Rendah: DAF mengurangi kebutuhan akan bahan kimia pengendap yang mahal dan berpotensi berbahaya. Meskipun DAF masih memerlukan bahan kimia tertentu, penggunaannya biasanya lebih rendah dibandingkan dengan proses pengendapan konvensional.</li></ol></div>",
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
