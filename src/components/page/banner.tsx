import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  path: string;
  image: string;
}

const banner = (props: Props) => {
  return (
    <section className="relative h-96 overflow-hidden">
      <Image
        width={100}
        height={100}
        unoptimized
        className="w-full h-full object-cover"
        src={props.image}
        alt=""
      />
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-50">
        <div className="h-full container max-w-4xl flex flex-col justify-center mx-auto text-white">
          <div className="font-bold pts-40 ml-10 md:ml-0">{props.title}</div>
          <div className="ml-10 md:ml-0">{props.path}</div>
        </div>
      </div>
    </section>
  );
};

export default banner;
