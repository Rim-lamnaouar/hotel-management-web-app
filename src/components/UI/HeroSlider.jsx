import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/hero-slider.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    size: 2000,
    autoplaysize: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">GOLDEN SANDS HOTEL & RESORT</h4>
            <h1 className="text-light mb-4">It feels like staying in your own home.</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/room">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">MORE THAN A HOTEL... AN EXPERIENCE </h4>
            <h1 className="text-light mb-4">Hotel for the whole family, all year round.</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/room">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">ENJOY A LUXURY EXPERIENCE </h4>
            <h1 className="text-light mb-4">STAY WITH OUR LUXURY ROOMS</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/room">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
