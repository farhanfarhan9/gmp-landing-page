"use client"
import React, { useEffect, useState } from "react";
import ImageFade from './ImageFade.jsx';
import { useSearchParams } from 'next/navigation';
import Translator from '@/utils/Translator';

const millisecondsPerDay = 24 * 60 * 60 * 1000;
const additionalValuePerDay = 4090;

const Section1 = () => {
  const [isClient, setIsClient] = useState(false);
  const [value, setValue] = useState(0);
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || undefined;

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      const startDate = new Date("06/21/2023 00:00:00");
      const currentDate = new Date();
      const elapsedTime = currentDate.getTime() - startDate.getTime();
      const totalDays = Math.floor(elapsedTime / millisecondsPerDay);
      const additionalValue = totalDays * additionalValuePerDay;

      const storedValue = localStorage.getItem("counterValue");

      if (storedValue) {
        setValue(parseFloat(storedValue));
      } else {
        setValue(1783605 + additionalValue);
      }

      const interval = setInterval(() => {
        setValue((prevValue) => {
          const newValue = prevValue + additionalValuePerDay / millisecondsPerDay;
          localStorage.setItem("counterValue", newValue.toString());
          return newValue;
        });
      }, 1);

      return () => {
        clearInterval(interval);
      };
    }
  }, []);

  const props = { value, lang };

  return (
    <>
      {isClient && (
        <>
          {typeof window !== 'undefined' && window.innerWidth >= 768 ? (
              <DesktopView {...props} />
          ) : (
              <MobileView {...props} />
          )}
        </>
      )}
    </>
  );
};

class MobileView extends React.Component<{ value: number; lang?: string }> {
  constructor(props: { value: number; } | Readonly<{ value: number; }>) {
    super(props);
    this.state = {
      imageHeight: 0,
    };
  }

  render() {
    return (
      <section className="relative" id="impact">
        <ImageFade images={["/img/home/impactfoto_mobile.webp", "/img/home/impactfoto2_mobile.webp"]} />
        <div className="absolute top-0 bottom-0 right-0 left-0">
          <div className="h-full flex items-center justify-start text-white max-w-7xl">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl ml-8" style={{ lineHeight: '1.2' }}>
              Sustainability <br />Starts from <br />
              Reliable Engineering
            </h1>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 left-0 border-t-4 bg-blue-800 bg-opacity-50 border-blue-900 text-white">
          <div className="h-full justify-center flex py-4 md:py-5">
            <span>
              <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl underline">{Translator.t('our-impact', this.props.lang)}</h2>
              <div className="flex items-center justify-start text-xl md:text-2xl lg:text-4xl xl:text-5xl">
                {Translator.t('conserved-water', this.props.lang)}
              </div>
              <div className="flex items-center">
                <div className="bg-stone-100 bg-opacity-40 rounded-xl px-3 py-1 font-mono">
                  {this.props.value.toLocaleString(undefined, { minimumFractionDigits: 3 })}
                </div>
                <div className="text-superscript">
                  m<sup>3</sup>
                </div>
              </div>
            </span>
          </div>
        </div>
      </section>
    );
  }
}

class DesktopView extends React.Component<{ value: number; lang?: string }> {
  render() {
    return (
      <section className="relative" id="impact">
        <ImageFade images={["/img/home/impactfoto.webp", "/img/home/impactfoto2.webp"]} />
        <div className="absolute top-0 bottom-0 right-0 left-0">
          <div className="h-full flex items-center justify-start text-white max-w-7xl">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl mx-auto" style={{ lineHeight: '1.2' }}>
              Sustainability Starts <br />
              from Reliable Engineering
            </h1>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 left-0 border-t-4 bg-blue-800 bg-opacity-50 border-blue-900 text-white">
          <div className="h-full flex justify-center py-2 md:py-5">
            <span>
              <h2 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl underline font-semibold">{Translator.t('our-impact', this.props.lang)}</h2>
              <div className="flex items-center justify-start text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold ">
                {Translator.t('conserved-water', this.props.lang)}: &nbsp;
                <div className="flex items-center">
                  <div className="bg-stone-100 bg-opacity-40 rounded-xl px-3 py-1 mx-2 font-mono">
                    {this.props.value.toLocaleString(undefined, { minimumFractionDigits: 3 })}
                  </div>
                  <div className="text-superscript">
                    m<sup>3</sup>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>
      </section>
    );
  }
}

export default Section1;