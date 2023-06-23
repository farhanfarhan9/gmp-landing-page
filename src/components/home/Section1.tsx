"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';


const millisecondsPerDay = 24 * 60 * 60 * 1000;
const additionalValuePerDay = 4090;

const Section1 = () => {

  const [value, setValue] = useState(0);

  useEffect(() => {
    const startDate = new Date('06/21/2023 00:00:00');
    const currentDate = new Date();
    const elapsedTime = currentDate.getTime() - startDate.getTime();
    const totalDays = Math.floor(elapsedTime / millisecondsPerDay);
    const additionalValue = totalDays * additionalValuePerDay;

    const storedValue = localStorage.getItem('counterValue');

    if (storedValue) {
      setValue(parseFloat(storedValue));
    } else {
      setValue(1783605 + additionalValue);
    }

    const interval = setInterval(() => {
      setValue((prevValue) => {
        const newValue = prevValue + additionalValuePerDay / millisecondsPerDay;
        localStorage.setItem('counterValue', newValue.toString());
        return newValue;
      });
    }, 1);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <section className="relative" id='impact'>
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
                  <div className="bg-stone-100 bg-opacity-40 rounded-xl px-3 py-1 mx-2 font-mono">
                    {value.toLocaleString(undefined, { minimumFractionDigits: 3 })}
                  </div>
                  <div className="text-superscript">
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