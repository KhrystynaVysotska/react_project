import React, { useState } from "react";
import Slider from "react-slick";
import { slides } from "../constants/Constants";
import MainSliderStyled from "../styles/MainSlider.styled.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrevArrow from "./PrevArrow.js";
import NextArrow from "./NextArrow.js";
import Hero from "./Hero.js";

function MainSlider() {
  const hero = [
    {
      title: "Women Collection 2020",
      description: "New season",
    },
    {
      title: "Men Collection 2020",
      description: "New arrivals",
    },
    {
      title: "Men New-Season",
      description: "sweaters",
    },
  ];
  const settings = {
    adaptiveHeight: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <MainSliderStyled>
      <Slider {...settings}>
        {slides.map((slide, key) => {
          return (
            <div key={key}>
              <Hero
                title={hero[key].title}
                description={hero[key].description}
              />
              <img src={slide.url} alt="slide" />
            </div>
          );
        })}
      </Slider>
    </MainSliderStyled>
  );
}

export default MainSlider;
