import React, { useState, useEffect, useRef } from "react";
import Slide from "./Slide";
import styled from "styled-components";
import img1 from "../images/Birthflower/January.jpg"; //자신이 원하는 이미지를 import 하세요.
import img2 from "../images/Birthflower/February.jpg";
import img3 from "../images/Birthflower/March.jpg";
import img4 from "../images/Birthflower/April.jpg";
import img5 from "../images/Birthflower/May.jpg";
import img6 from "../images/Birthflower/June.jpg";
import img7 from "../images/Birthflower/July.jpg";
import img8 from "../images/Birthflower/August.jpg";
import img9 from "../images/Birthflower/September.jpg";
import img10 from "../images/Birthflower/October.jpg";
import img11 from "../images/Birthflower/November.jpg";
import img12 from "../images/Birthflower/December.jpg";


const Container = styled.div`
  width: 700px;
  overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리합니다.
  padding : 100px;
  margin: 0 auto;
  color: white;
  
`;
const Button = styled.button`
  all: unset;
  border: 1px solid #FEC824;
  margin : 15px 5px;
  padding: 15px;
  color: #FEC824;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #FEC824;
    color: #fff;
  }
`;
const SliderContainer = styled.div`
  width: 800px;
  display: flex; //이미지들을 가로로 나열합니다.
  background-color: #F9EBD1;
`;


const TOTAL_SLIDES = 11;
export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);
return (
    <Container>
      {currentSlide}
      <SliderContainer ref={slideRef}>
        <Slide img={img1} />
        <Slide img={img2} />
        <Slide img={img3} />
        <Slide img={img4} />
        <Slide img={img5} />
        <Slide img={img6} />
        <Slide img={img7} />
        <Slide img={img8} />
        <Slide img={img9} />
        <Slide img={img10} />
        <Slide img={img11} />
        <Slide img={img12} />
      </SliderContainer>
      <Button onClick={prevSlide}>Previous</Button>
      <Button onClick={nextSlide}>Next</Button>
    </Container>
    
  );
}