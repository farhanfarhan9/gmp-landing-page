import Image from "next/image";
import React from "react";

const Product = ({ data }: { data: any }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-10">
      <div>
        <Image
          className="w-full"
          src={data.image}
          unoptimized
          height={100}
          width={100}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center pl-10 mt-5 md:mt-0">
        <div className="mb-5 font-bold">{data.title}</div>
      </div>
    </div>
  );
};

export default Product;
