import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React from "react";

const ArrowButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  z-index: 2; /* Ensures arrows are above the image */
  background: rgba(0, 0, 0, 0.6);
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: 0.3s ease-in-out;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 6px;
  }
`;

const NextArrow = ({ onClick }) => (
  <ArrowButton style={{ right: "20px" }} onClick={onClick}>
    <FaChevronRight />
  </ArrowButton>
);

const PrevArrow = ({ onClick }) => (
  <ArrowButton style={{ left: "20px" }} onClick={onClick}>
    <FaChevronLeft />
  </ArrowButton>
);

const SliderContainer = styled.div`
  
  margin: 0;
  padding: 0;
  position: relative;
`;

const SlideImage = styled.img`
  width: 100vw;
  height: 400px;
  object-fit: cover;
  object-position: top;
  z-index: -1;

  @media (max-width: 1024px) {
    height: 350px;
  }

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 480px) {
    height: 180px;
  }
`;

const PrimeSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {[
          "https://m.media-amazon.com/images/I/71cp9PVuTfL._SX3000_.jpg",
          "https://m.media-amazon.com/images/I/61GnAucagBL._SX3000_.png",
          "https://m.media-amazon.com/images/I/71qlKqpJnlL._SX3000_.jpg",
          "https://m.media-amazon.com/images/I/71cQMXCLSvL._SX3000_.jpg",
          "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",
          "https://m.media-amazon.com/images/I/61UrRx+3LLL._SX3000_.jpg",
        ].map((src, index) => (
          <div key={index}>
            <SlideImage src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default PrimeSlider;
