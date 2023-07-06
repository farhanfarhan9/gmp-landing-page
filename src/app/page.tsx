import About from "@/components/home/About";
import Expand from "@/components/home/Expand";
import Section1 from "@/components/home/Section1";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";
import OurProject from "./ourproject";

export default function Home() {
  return (
    <>
      <Section1 />
      <About />
      <section  id="our-service-section">
      <Expand />
      </section>
      <section className="flex justify-center py-12" id="portofolio">
        <div className="flex flex-col max-w-7xl mx-4">
          <div className="uppercase font-bold text-center mt-7 text-3xl md:text-4xl lg:text-5xl">
            project Portofolio
          </div>
          <p className="text-center mt-8 mb-10 text-base md:text-lg lg:text-xl">
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
            src="/map.png"
            alt=""
          />
        </div>
      </section>
      <OurProject/>
      <section className="flex flex-col justify-center">
        <div className="uppercase font-bold text-center mt-14 text-3xl md:text-4xl lg:text-5xl">
          our Products & Partners
        </div>
        <span className="w-5/6 md:w-1/2 mx-auto mb-36">
          <Marquee speed={100}>
            <div className="flex justify-center space-x-9 py-12 items-center mx-5">
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
              <Image
                unoptimized
                width={100}
                height={100}
                src="/teco.png"
                alt=""
              />
              <Image
                unoptimized
                width={100}
                height={100}
                src="/nadic.png"
                alt=""
              />
              <Image
                unoptimized
                width={100}
                height={100}
                src="/seg.png"
                alt=""
              />
              <Image
                unoptimized
                width={100}
                height={100}
                src="/yuema.png"
                alt=""
              />
              <Image
                unoptimized
                width={100}
                height={100}
                src="/transm.png"
                alt=""
              />
            </div>
          </Marquee>
        </span>
      </section>
    </>
  );
}
