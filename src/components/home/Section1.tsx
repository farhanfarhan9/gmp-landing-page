"use client"
import React from "react";
import ImageFade from './ImageFade.jsx';

const millisecondsPerDay = 24 * 60 * 60 * 1000;
const additionalValuePerDay = 4090;

interface Section1State {
  value: number;
}

interface Section1Props { }

class Section1 extends React.Component<Section1Props, Section1State> {
  private interval: NodeJS.Timeout | undefined;

  constructor(props: Section1Props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  componentDidMount() {
    const startDate = new Date("06/21/2023 00:00:00");
    const currentDate = new Date();
    const elapsedTime = currentDate.getTime() - startDate.getTime();
    const totalDays = Math.floor(elapsedTime / millisecondsPerDay);
    const additionalValue = totalDays * additionalValuePerDay;

    const storedValue = localStorage.getItem("counterValue");

    if (storedValue) {
      this.setState({ value: parseFloat(storedValue) });
    } else {
      this.setState({ value: 1783605 + additionalValue });
    }

    this.interval = setInterval(() => {
      this.setState((prevState) => {
        const newValue = prevState.value + additionalValuePerDay / millisecondsPerDay;
        localStorage.setItem("counterValue", newValue.toString());
        return { value: newValue };
      });
    }, 1);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { value } = this.state;

    if (window) {
      const isMobile = window.innerWidth <= 768; // Specifies whether the current view is a mobile view

      if (isMobile) {
        // Code for mobile view
        return <MobileView value={value} />;
      } else {
        // Code for desktop view
        return <DesktopView value={value} />;
      }
    }
  }
}

class MobileView extends React.Component<{ value: number }> {
  constructor(props: { value: number; } | Readonly<{ value: number; }>) {
    super(props);
    this.state = {
      imageHeight: 0,
    };
  }

  render() {
    return (
      <section className="relative" id="impact">
        <ImageFade images={["/img/home/impactfoto_mobile.png", "/img/home/impactfoto2_mobile.png"]} />
        <div className="absolute top-0 bottom-0 right-0 left-0">
          <div className="h-full flex items-center justify-start text-white max-w-7xl">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl ml-8">
              Sustainability Starts <br />
              from Reliable Engineering
            </h1>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 left-0 border-t-4 bg-blue-800 bg-opacity-50 border-blue-900 text-white">
          <div className="h-full flex ml-8 py-4 md:py-5">
            <span>
              <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl underline">Our Impact</h2>
              <div className="flex items-center justify-start text-xl md:text-2xl lg:text-4xl xl:text-5xl">
                Conserved Water:
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

class DesktopView extends React.Component<{ value: number }> {
  render() {
    return (
      <section className="relative" id="impact">
        <ImageFade images={["/img/home/impactfoto.png", "/img/home/impactfoto2.png"]} />
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
              <h2 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl underline font-semibold">Our Impact</h2>
              <div className="flex items-center justify-start text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold ">
                Conserved Water : &nbsp;
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