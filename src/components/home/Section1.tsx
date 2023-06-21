import Image from 'next/image'
import React from 'react'

const Section1 = () => {
  return (
    <>
    <section className="relative">
        <Image
          width={100}
          height={100}
          unoptimized
          src="/landing.png"
          className="w-full"
          alt=""
        />
        <div className="absolute top-0 bottom-0 right-0 left-0">
          <div className="h-full">
            <div className="h-full">
              <div className="text-white h-full flex items-center max-w-7xl mx-auto">
                <div className="-mt-36">
                  <div
                    className="font-bold pts-80"
                    style={{ lineHeight: "84px" }}
                  >
                    Sustainability Starts <br />
                    from Reliable Engineering
                  </div>

                  <button className="bg-[#196DB6] px-11 py-4 mt-8">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 left-0 border-t-4 bg-blue-800 bg-opacity-50 border-blue-900 text-white">
          <div className="h-full flex justify-center py-5">
            <span>
              <div className="pts-40 text-2">Our Impact</div>
              <div className="pts-48 flex">
                Conserved Water :
                <div className="flex">
                  <div className="bg-stone-100 bg-opacity-40 rounded-xl px-3 py-1 mx-2">
                    714,923,129
                  </div>
                  <div className="text-superscript">
                    {" "}
                    m<sup>2</sup>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Section1