import About from "@/components/home/About";
import CarouselComponent from "@/components/home/CarouselComponent";
import Expand from "@/components/home/Expand";
import Section1 from "@/components/home/Section1";
import ModalVideo from "@/components/modal/ModalVideo";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Section1 />
      <About />
      <Expand />
      <section className="flex justify-center py-12" id="portofolio">
        <div className="flex flex-col max-w-7xl">
          <div className="text-center uppercase pts-40">project Portofolio</div>
          <p className="text-center mt-3 mb-10">
            Kami bangga telah menjadi mitra yang dipercaya oleh berbagai
            perusahaan di Indonesia untuk memenuhi kebutuhan mereka dalam
            pengolahan air limbah. Dengan pengetahuan mendalam, pengalaman yang
            kaya, dan komitmen kami terhadap kualitas dan keberlanjutan, kami
            terus berinovasi untuk menjawab tantangan baru dalam industri
            pengolahan air limbah.
          </p>
          <Image
            unoptimized
            width={100}
            height={100}
            className="w-full my-5"
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
                    <ModalVideo>
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
                    </ModalVideo>
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
