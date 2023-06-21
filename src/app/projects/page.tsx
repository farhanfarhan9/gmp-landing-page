import Image from "next/image";
import React from "react";

function Projects() {
  return (
    <>
    <section className="relative">
        <img src="/portobackground.png" alt="" />
        <div className="absolute top-0 bottom-0 right-0 left-0">
          <div
            className="h-full container max-w-4xl flex flex-col justify-center mx-auto text-white"
          >
            <div className="font-bold pts-40">
              Project Portofolio
            </div>
            <div>Home / Project Portofolio</div>
          </div>
        </div>
      </section>
    <div className="grid grid-cols-2 my-24 max-w-7xl mx-auto">
      <div>
        <Image
          unoptimized
          width={100}
          height={100}
          className="w-full"
          src="/pictureporto.png"
          alt=""
        />
      </div>
      <div className="bg-blue-800 text-white px-16 py-8">
        <div className="font-semibold my-2 pts-24">
          PT. Mark Dynamics Indonesia, Tbk.
        </div>
        <div className="my-1">Glove Mold Factory</div>
        <div className="flex items-center space-x-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>{" "}
          </span>
          <span> Tanjung</span>
        </div>
        <p>
          Upgrade clarifier and water re-use 30 tonnes to 100 tonnes wastewater
        </p>
        <a href="/detail.html">
          <button className="bg-white text-green-800 font-semibold px-11 py-4 mt-7">
            See Details
          </button>
        </a>
      </div>
      <div className="bg-green-800 text-white px-16 py-8">
        <div className="font-semibold my-2 pts-24">PT. Bumi Sati Prima</div>
        <div className="my-1">All-purpose Flour Mill</div>
        <div className="flex items-center space-x-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>{" "}
          </span>
          <span> Siantar </span>
        </div>
        <p>Capacity: 200 tonnes per day</p>
        <a href="/detail.html">
          <button className="bg-white text-green-800 font-semibold px-11 py-4 mt-7">
            See Details
          </button>
        </a>
      </div>
      <div>
        <Image
          unoptimized
          width={100}
          height={100}
          className="w-full"
          src="/pictureporto2.png"
          alt=""
        />
      </div>
      <div>
        <Image
          unoptimized
          width={100}
          height={100}
          className="w-full"
          src="/pictureporto3.png"
          alt=""
        />
      </div>
      <div className="bg-blue-800 text-white px-16 py-8">
        <div className="font-semibold my-2 pts-24">PT. Indowangi Nusantara</div>
        <div className="my-1">Patchouli Oil Refinery</div>
        <div className="flex items-center space-x-2">
          <span>
            <Image
              unoptimized
              width={100}
              height={100}
              className="w-full"
              src="/location.svg"
              alt=""
            />{" "}
          </span>
          <span> KIM, Medan</span>
        </div>
        <p>
          Upgrade clarifier and water re-use 30 tonnes to 100 tonnes wastewater
        </p>
        <a href="/detail.html">
          <button className="bg-white text-green-800 font-semibold px-11 py-4 mt-7">
            See Details
          </button>
        </a>
      </div>
      <div className="bg-green-800 text-white px-16 py-8">
        <div className="font-semibold my-2 pts-24">PT. Sumatera Baru</div>
        <div className="my-1">Coconut Flour Mill</div>
        <div className="flex items-center space-x-2">
          <span>
            <Image
              unoptimized
              width={100}
              height={100}
              className="w-full"
              src="/location.svg"
              alt=""
            />{" "}
          </span>
          <span>Tanjung Balai, Asahan</span>
        </div>
        <p>Capacity: 100 tonnes wastewater per day</p>
        <a href="/detail.html">
          <button className="bg-white text-green-800 font-semibold px-11 py-4 mt-7">
            See Details
          </button>
        </a>
      </div>
      <div>
        <Image
          unoptimized
          width={100}
          height={100}
          className="w-full"
          src="/pictureporto4.png"
          alt=""
        />
      </div>
      <div>
        <Image
          unoptimized
          width={100}
          height={100}
          className="w-full"
          src="/pictureporto5.png"
          alt=""
        />
      </div>
      <div className="bg-blue-800 text-white px-16 py-8">
        <div className="font-semibold my-2 pts-24">
          PLTU Banjarsari 2x 135 MW
        </div>
        <div className="flex items-center space-x-2">
          <span>
            <Image
              unoptimized
              width={100}
              height={100}
              className="w-full"
              src="/location.svg"
              alt=""
            />{" "}
          </span>
          <span> Lahat, Sumatera Selatan</span>
        </div>
        <p>Oil-Water System (OWS) Implemtation</p>
        <a href="/detail.html">
          <button className="bg-white text-green-800 font-semibold px-11 py-4 mt-7">
            See Details
          </button>
        </a>
      </div>
      <div className="bg-green-800 text-white px-16 py-8">
        <div className="font-semibold my-2 pts-24">PT. Mayora Indah Tbk</div>
        <div className="flex items-center space-x-2">
          <span>
            <Image
              unoptimized
              width={100}
              height={100}
              className="w-full"
              src="/location.svg"
              alt=""
            />{" "}
          </span>
          <span> Tangerang</span>
        </div>
        <p>Wastewater Treatment Plant</p>
        <a href="/detail.html">
          <button className="bg-white text-green-800 font-semibold px-11 py-4 mt-7">
            See Details
          </button>
        </a>
      </div>
      <div>
        <Image
          width={100}
          height={100}
          unoptimized
          className="w-full"
          src="/pictureporto6.png"
          alt=""
        />
      </div>
    </div>
    </>
  );
}

export default Projects;
