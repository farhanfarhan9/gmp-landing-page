import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  desc: string;
  image: string;
}

const banner = (props: Props) => {
  return (
    <section className="relative h-96 overflow-hidden">
      <Image
        width={100}
        height={100}
        unoptimized
        className="w-full"
        src={props.image}
        alt=""
      />
      <div className="absolute top-0 bottom-0 right-0 left-0">
        <div className="h-full container max-w-4xl flex flex-col justify-center mx-auto text-white">
          <div className="font-bold pts-40">{props.title}</div>
          <div>{props.desc}</div>
        </div>
      </div>
    </section>
  );
};

export default banner;
