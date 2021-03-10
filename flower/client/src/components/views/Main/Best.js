import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import img1 from "../images/Best/01.jpg"
import img2 from "../images/Best/02.jpg"
import img3 from "../images/Best/03.jpg"
import img4 from "../images/Best/04.jpg"
import img5 from "../images/Best/05.jpg"
import styled from 'styled-components';

const Sliderbox =  styled.div`
    margin: 50px;
    width : 100%;
    
`;


export default class CenterMode extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 600,
        cssEase: "linear"

    };

    
    
    return (
      <div>
          <Sliderbox>
        <h2>Best 상품</h2>
        <Slider {...settings}>
          <div>
            <img src={img1} width='315px' height='300px' alt='호잉'/>
          </div>
          <div>
          <img src={img2} width='315px' height='300px' alt='호잉' />
          </div>
          <div>
          <img src={img3} width='315px' height='300px' alt='호잉' />
          </div>
          <div>
          <img src={img4} width='315px' height='300px' alt='호잉' />
          </div>
          <div>
          <img src={img5} width='315px' height='300px' alt='호잉' />
          </div>
          
        </Slider>
        </Sliderbox>
      </div>
    );
  }
}