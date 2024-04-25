"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const ShoppingCenter = () => {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  return (
    <div>
      <div className="relative">
        <div style={{ position: "relative" }}>
          <Image
            unoptimized
            width={100}
            height={100}
            className="w-full brightness-50"
            src="/img/project/shopping-center.png"
            alt=""
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <h1 style={{ color: "white" }} className="text-5xl font-extrabold">
              {Translator.t("sc", lang)}
            </h1>
          </div>
        </div>
        <div className="flex justify-center w-full px-5 xl:px-0">
          <div className="w-full py-20 max-w-7xl">
            <div>
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                PT. PALARUDHIBI TEGUH MAKMUR
              </div>
              <div className="mt-5 text-xl font-extrabold uppercase ">
                {Translator.t("sc", lang)}
              </div>
              <div className="mt-5 text-base">Medan</div>
              <div className="mt-8 text-base">
                Submarsible Pump Relay Changeover
              </div>
            </div>
            <hr className="mt-10 border-[#DFF5FF]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCenter;
