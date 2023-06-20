import Image from 'next/image'
import React from 'react'

function Projects() {
  return (
    <div className="grid grid-cols-2">
          <div><Image unoptimized width={100} height={100} src="/pictureporto.png" alt="" /></div>
          <div className="bg-blue-800 text-white px-16 py-8">
            <div className="font-semibold my-2 pts-24" >
              PT. Mark Dynamics Indonesia, Tbk.
            </div>
            <div className="my-1">Glove Mold Factory</div>
            <div className="flex items-center space-x-2">
              <span><Image unoptimized width={100} height={100} src="/location.svg" alt="" /> </span>
              <span> Tanjung</span>
            </div>
            <p>
              Upgrade clarifier and water re-use 30 tonnes to 100 tonnes
              wastewater
            </p>
            <a href="/detail.html">
              <button
                className="bg-white text-green-800 font-semibold px-11 py-4 mt-7"
              >
                See Details
              </button>
            </a>
          </div>
          <div className="bg-green-800 text-white px-16 py-8">
            <div className="font-semibold my-2 pts-24">
              PT. Bumi Sati Prima
            </div>
            <div className="my-1">All-purpose Flour Mill</div>
            <div className="flex items-center space-x-2">
              <span><Image unoptimized width={100} height={100} src="/location.svg" alt="" /> </span>
              <span> Siantar </span>
            </div>
            <p>Capacity: 200 tonnes per day</p>
            <a href="/detail.html">
              <button
                className="bg-white text-green-800 font-semibold px-11 py-4 mt-7"
              >
                See Details
              </button>
            </a>
          </div>
          <div><Image unoptimized width={100} height={100} src="/pictureporto2.png" alt="" /></div>
          <div><Image unoptimized width={100} height={100} src="/pictureporto3.png" alt="" /></div>
          <div className="bg-blue-800 text-white px-16 py-8">
            <div className="font-semibold my-2 pts-24" >
              PT. Indowangi Nusantara
            </div>
            <div className="my-1">Patchouli Oil Refinery</div>
            <div className="flex items-center space-x-2">
              <span><Image unoptimized width={100} height={100} src="/location.svg" alt="" /> </span>
              <span> KIM, Medan</span>
            </div>
            <p>
              Upgrade clarifier and water re-use 30 tonnes to 100 tonnes
              wastewater
            </p>
            <a href="/detail.html">
              <button
                className="bg-white text-green-800 font-semibold px-11 py-4 mt-7"
              >
                See Details
              </button>
            </a>
          </div>
          <div className="bg-green-800 text-white px-16 py-8">
            <div className="font-semibold my-2 pts-24">
              PT. Sumatera Baru
            </div>
            <div className="my-1">Coconut Flour Mill</div>
            <div className="flex items-center space-x-2">
              <span><Image unoptimized width={100} height={100} src="/location.svg" alt="" /> </span>
              <span>Tanjung Balai, Asahan</span>
            </div>
            <p>Capacity: 100 tonnes wastewater per day</p>
            <a href="/detail.html">
              <button
                className="bg-white text-green-800 font-semibold px-11 py-4 mt-7"
              >
                See Details
              </button>
            </a>
          </div>
          <div><Image unoptimized width={100} height={100} src="/pictureporto4.png" alt="" /></div>
          <div><Image width={100} height={100} src="/pictureporto5.png" alt="" /></div>
          <div className="bg-blue-800 text-white px-16 py-8">
            <div className="font-semibold my-2 pts-24" >
                PLTU Banjarsari 2x 135 MW
            </div>
            <div className="flex items-center space-x-2">
              <span><Image unoptimized width={100} height={100} src="/location.svg" alt="" /> </span>
              <span> Lahat, Sumatera Selatan</span>
            </div>
            <p>
                Oil-Water System (OWS) Implemtation
            </p>
            <a href="/detail.html">
              <button
                className="bg-white text-green-800 font-semibold px-11 py-4 mt-7"
              >
                See Details
              </button>
            </a>
          </div>
          <div className="bg-green-800 text-white px-16 py-8">
            <div className="font-semibold my-2 pts-24" >
                PT. Mayora Indah Tbk
            </div>
            <div className="flex items-center space-x-2">
              <span><Image unoptimized width={100} height={100} src="/location.svg" alt="" /> </span>
              <span> Tangerang</span>
            </div>
            <p>
                Wastewater Treatment Plant
            </p>
            <a href="/detail.html">
              <button
                className="bg-white text-green-800 font-semibold px-11 py-4 mt-7"
              >
                See Details
              </button>
            </a>
          </div>
          <div><Image width={100} height={100} src="/pictureporto6.png" alt="" /></div>
        </div>
  )
}

export default Projects