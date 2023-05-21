import { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";

import Slide1 from "../../assets/slide1.jpg";
import Slide2 from "../../assets/slide2.jpg";
import Slide3 from "../../assets/slide3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PageContainer } from "../../GlobalStyle";
import PropTypes from "prop-types"

const HeroSlider = ({ contact }) => {
  // eslint-disable-next-line no-unused-vars
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: Slide1,
      title: "Empowering Financial Success",
      text: "We are a bank that offers unparalleled expertise and services to help you achieve your financial and investment goals. Let us guide you towards unlocking new opportunities for financial growth.",
    },
    {
      image: Slide2,
      title: "Invest In Your Future",
      text: "We are a bank that offers unparalleled expertise and services to help you achieve your financial and investment goals. Let us guide you towards unlocking new opportunities for financial growth.",
    },
    {
      image: Slide3,
      title: "Keep Your Money Safe & Secured",
      text: "We are a bank that offers unparalleled expertise and services to help you achieve your financial and investment goals. Let us guide you towards unlocking new opportunities for financial growth.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <HeroSliderContainer>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Slide key={index}>
            <SlideContent style={{ backgroundImage: `url(${slide.image})` }}>
              <FullContent>
                <PageContainer>
                  <SlideTitle>{slide.title}</SlideTitle>
                  <SlideText>{slide.text}</SlideText>
                  <SlideButton onClick={contact}>Contact Us Today</SlideButton>
                </PageContainer>
              </FullContent>
            </SlideContent>
          </Slide>
        ))}
      </Slider>
    </HeroSliderContainer>
  );
};

HeroSlider.propTypes = {
  contact: PropTypes.func.isRequired,
};
export default HeroSlider;

const HeroSliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding-top: 85px;
`;

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  min-height: 500px;
  background-size: cover;
  background-position: center;
`;

// const SlideImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

const SlideContent = styled.div`
  margin-top: 20px;
  color: #fff;
  min-height: 500px;
  width: 100%;
  height: 80vh;
  object-fit: cover;
`;

const FullContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SlideTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
`;

const SlideText = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const SlideButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  color: #151f36;
  border: none;
  cursor: pointer;

  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(24, 25, 31, 0.2);
  border-radius: 6px;
`;
