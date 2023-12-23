import React, { useState } from "react";
import {
  Image,
  Slide,
  SlideWrapper,
  SliderButton,
  SliderContainer,
} from "./Slider.style";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

const slides = [
    "https://i.ibb.co/WGfV09q/Co5.jpg",
    "https://i.ibb.co/GQhrqBK/0-Zcqt-Qi-ROn-LIxn-Le.png",
    "https://i.ibb.co/kmQqnfV/banner-galaxy-a31-a11-1.jpg",
    "https://i.ibb.co/TqLYCmQ/6-C187-CCB-C065-4-BD8-8916-7-A398-E440516-scaled-e1665114654992.jpg",
  ];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <SliderContainer>
      <SliderButton direction="prev" onClick={prevSlide}>
        <FaAnglesLeft />
      </SliderButton>
      <SlideWrapper
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <Slide key={index}>
            <Image src={slide} alt={`Slide ${index + 1}`} />
          </Slide>
        ))}
      </SlideWrapper>
      <SliderButton direction="next" onClick={nextSlide}>
        <FaAnglesRight />
      </SliderButton>
    </SliderContainer>
  );
};

export default Slider;
