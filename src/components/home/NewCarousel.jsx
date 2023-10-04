"use client";
import React, { Component } from "react";
import loadable from "@loadable/component";
const Carousel = loadable(() => import("react-spring-3d-carousel"));
// import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";

export default class Example extends Component {
  state = {
    goToSlide: 1,
    offsetRadius: 2,
    showNavigation: true,
    enableSwipe: true,
    config: config.slow,
  };

  slides = [
    {
      key: uuidv4(),
      content: <img src="/carousel/1e.jpg" alt="1" />,
    },
    {
      key: uuidv4(),
      content: <img src="/carousel/1c.jpg" alt="2" />,
    },
    {
      key: uuidv4(),
      content: <img src="/carousel/1b.jpg" alt="3" />,
    },
    {
      key: uuidv4(),
      content: (
        <img
          src="/carousel/1d.jpg"
          className="rounded-md shadow-md h-full"
          alt="4"
        />
      ),
    },
    {
      key: uuidv4(),
      content: <img src="/carousel/1f.jpg" alt="5" />,
    },
    {
      key: uuidv4(),
      content: <img src="/carousel/1g.jpg" alt="5" />,
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  render() {
    return (
      <div className="w-full h-[295px] lg:h-[700px] carousel-wrap ">
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}
