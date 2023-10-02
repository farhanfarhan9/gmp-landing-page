import React from "react";
import AboutLearnMore from "./AboutLearnMore";
import NewCarousel from "./NewCarousel";

const About = () => {
  return (
    <section
      className="flex justify-center mt-10 px-10 md:mx-0 items-center"
      id="about"
    >
      <div className="w-full lg:w-1/2 items-center justify-center relative mb-4">
        <NewCarousel />
      </div>
    </section>
  );
};

export default About;
