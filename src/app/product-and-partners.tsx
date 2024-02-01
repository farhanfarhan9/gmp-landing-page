import Image from "next/image";
import Marquee from "react-fast-marquee";

function ProductAndPartners() {
  return (
    <section className="flex flex-col justify-center">
      <div className="uppercase font-bold text-center mt-14 text-3xl md:text-4xl lg:text-5xl">
        our Products & Partners
      </div>
      <span className="w-5/6 md:w-1/2 mx-auto mb-36 md:mb-0">
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
            <Image unoptimized width={100} height={100} src="/sge.png" alt="" />
            <Image
              unoptimized
              width={100}
              height={100}
              src="/nadic.png"
              alt=""
            />
            <Image unoptimized width={100} height={100} src="/seg.png" alt="" />
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
  );
}

export default ProductAndPartners;
