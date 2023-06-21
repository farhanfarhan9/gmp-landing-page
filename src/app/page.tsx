import Section1 from "@/components/home/Section1";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Section1 />
      <section className="grid grid-cols-2 gap-3 py-28 items-center" id="about">
        <div className="md:pl-36 md:pr-12">
          <div className="font-bold text-4xl">ABOUT US</div>
          <div className="mt-6">
            <span className="font-bold">Satria Nusa</span> didirikan oleh
            engineer yang sudah berpengalaman di industri manufaktur dengan
            jejaring teknisi dan workshop di Jawa dan Sumatra.
          </div>
          <div className="mt-7">
            <span className="font-bold">Satria Nusa</span> Satria Nusa merupakan
            salah satu perusahaan teknik dengan ekosistem industri yang terpadu.
          </div>
          <button className="px-11 py-4 text-white bg-green-700 mt-7">
            Learn more
          </button>
        </div>
        <div className="flex">
          <div className="flex items-center">
            <Image
              unoptimized
              width={100}
              height={100}
              src="/foto2.png"
              alt="foto2"
              className="w-72"
            />
          </div>
          <div className="flex items-center ml-3">
            <Image
              unoptimized
              width={100}
              height={100}
              src="/foto1.png"
              alt="foto1"
              className="w-96"
            />
          </div>
          <div className="flex items-center ml-3">
            <Image
              unoptimized
              width={100}
              height={100}
              src="/foto3.png"
              alt="foto2"
              className="w-72"
            />
          </div>
        </div>
      </section>
      <section className="relative flex justify-center">
        <div className="w-2/5 relative">
          <Image
            unoptimized
            width={100}
            height={100}
            src="/background2.png"
            alt="background2"
            className="w-full"
          />
          <div className="absolute left-0 right-0 top-0 bottom-0">
            <div className="flex h-full justify-center items-center">
              <div className="flex flex-col text-white px-16">
                <div className="font-bold pts-40">Service Kami</div>
                <p>
                  Satria Nusa has integrated internal capabilities in the fields
                  of mechatronic, civil and chemical engineering for quality
                  assurance. Our experts are spread across Sumatra Island and
                  Java Island to serve the following:
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/5 relative overflow-hidden">
          <Image
            unoptimized
            width={100}
            height={100}
            src="/bg3.png"
            alt="background2"
            className="h-full w-full"
          />
          <div className="absolute left-0 right-0 top-0 bottom-0 bg-blue-600 opacity-50"></div>
          <div className="absolute left-0 right-0 top-0 bottom-0">
            <div className="flex h-full justify-center items-center">
              <div className="flex flex-col text-white px-16">
                <div className="font-bold pts-40">
                  Water & Wastewater Technology
                </div>
                <p>
                  PT. SATRIA NUSA ENJINERING (SNE) adalah sebuah perusahaan
                  teknik yang berada dibawah naungan Satria Elektrik Group.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/5 relative overflow-hidden">
          <Image
            unoptimized
            width={100}
            height={100}
            src="/bg4.png"
            alt="background2"
            className="h-full w-full"
          />
          <div className="absolute left-0 right-0 top-0 bottom-0 bg-green-600 opacity-50"></div>
          <div className="absolute left-0 right-0 top-0 bottom-0">
            <div className="flex h-full justify-center items-center">
              <div className="flex flex-col text-white px-16">
                <div className="font-bold pts-40">Civil & Fabrications</div>
                <p>
                  SNE memiliki kapabilitas internal untuk konstruksi sipil dan
                  mekanikal. Dengan pengalaman selama 11 tahun, SNE sudah
                  terlibat dalam berbagai konstruksi industri di seluruh
                  Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/5 relative overflow-hidden">
          <Image
            unoptimized
            width={100}
            height={100}
            src="/bg5.png"
            alt="background2"
            className="h-full w-full"
          />
          <div className="absolute left-0 right-0 top-0 bottom-0 bg-amber-600 opacity-50"></div>
          <div className="absolute left-0 right-0 top-0 bottom-0">
            <div className="flex h-full justify-center items-center">
              <div className="flex flex-col text-white px-16">
                <div className="font-bold pts-40">Mechanical & Electrical</div>
                <p>
                  Lahir dari Satria Elektrik Group, SNE memberikan solusi
                  terintegrasi untuk klien untuk menyelesaikan masalah limbah
                  untuk industri.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center py-12" id="portofolio">
        <div className="flex flex-col max-w-7xl">
          <div className="text-center uppercase pts-40">project Portofolio</div>
          <p className="text-center my-3">
            orem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero
            nibh, pulvinar imperdiet porttitor eu, vulputate scelerisque nunc.
            Pellentesque eu nisl sed metus elementum ultrices. Morbi a libero
            massa. Etiam non diam sit amet sapien sagittis hendrerit. Nulla eu
            consectetur eros. Maecenas imperdiet sit amet libero et vehicula.
          </p>
          <Image
            unoptimized
            width={100}
            height={100}
            className="w-full"
            src="/indonesia.png"
            alt=""
          />
        </div>
      </section>
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <Image
              unoptimized
              width={100}
              height={100}
              className="w-full"
              src="/porto1.png"
              style={{ height: "720px" }}
              alt=""
            />
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="">
              <Image
                unoptimized
                width={100}
                height={100}
                className="w-full"
                src="/porto2.png"
                alt=""
              />
            </div>
            <div className="relative">
              <Image
                unoptimized
                width={100}
                height={100}
                className="w-full"
                src="/porto3.png"
                alt=""
              />
              <div className="absolute left-0 right-0 top-0 bottom-0 bg-blue-600 opacity-30"></div>
              <div className="absolute top-12 right-0 left-0 text-center text-white pts-24">
                PT. Toba pulp LESTARI
              </div>
              <div className="absolute top-0 bottom-0 right-0 left-0">
                <div className="flex justify-center h-full items-center">
                  <button className="hover:scale-110">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 125 125"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_97_745)">
                        <rect width="125" height="125" fill="white" />
                        <path
                          d="M84.9844 61.9707C88.3145 64.0117 88.3145 68.8457 84.9844 70.8867L47.1719 93.2305C43.7344 95.2715 39.4375 92.8008 39.4375 88.7188V44.0312C39.4375 39.627 44.0566 37.8008 47.1719 39.627L84.9844 61.9707Z"
                          fill="#0E6A37"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_97_745">
                          <rect width="125" height="125" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              unoptimized
              width={100}
              height={100}
              className="w-full"
              src="/porto4.png"
              style={{ height: "720px" }}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="flex justify-center my-4">
        <Link href="/projects">
          <button className="bg-green-700 text-white px-11 py-4 mt-8">
            See Other Project
          </button>
        </Link>
      </section>
      <section className="flex flex-col justify-center">
        <div className="uppercase font-bold text-center mt-14 pts-40">
          our Product & Partner
        </div>
        <div className="flex justify-center space-x-9 py-12 mb-36 items-center">
          <Image
            unoptimized
            width={100}
            height={100}
            src="/smi.png"
            className="h-16"
            alt=""
          />
          <Image
            unoptimized
            width={100}
            height={100}
            className="h-16"
            src="/aquahelix-mbr-pump.png"
            alt=""
          />
          <Image
            unoptimized
            width={100}
            height={100}
            src="/aquahelix.png"
            alt=""
          />
          <Image unoptimized width={100} height={100} src="/teco.png" alt="" />
          <Image unoptimized width={100} height={100} src="/nadic.png" alt="" />
          <Image unoptimized width={100} height={100} src="/seg.png" alt="" />
          <Image unoptimized width={100} height={100} src="/yuema.png" alt="" />
          <Image
            unoptimized
            width={100}
            height={100}
            src="/transm.png"
            alt=""
          />
        </div>
      </section>
    </>
  );
}
