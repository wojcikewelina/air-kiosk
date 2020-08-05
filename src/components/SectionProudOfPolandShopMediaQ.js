import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/SectionNewsCarousele.scss";

import pic1 from "../pictures-icons/pop1.jpg"
import pic2 from "../pictures-icons/pop2.jpg"
import pic3 from "../pictures-icons/pop3.jpg"
import pic4 from "../pictures-icons/pop4.jpg"

import ElementNewsAirKiosk from "./ElementNewsAirKiosk.js"

export default class SectionProudOfPolandMdiaQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allNewsData: [],
      display: true,
      marginLeft: 5,
      width: 90
    };
  }

  

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 530,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        }]
    };

    
    
     

    return (
      <div className="section-news-c">
        <h5> PROUD OF POLAND </h5>
        <div
          style={{
            width: this.state.width + "%",
            marginLeft: this.state.marginLeft + "%",
            display: this.state.display ? "block" : "none"
          }}
        >
          <Slider {...settings}>
          
          <ElementNewsAirKiosk
            src={pic1}
            name={"BUDZIK ŁOWICKI \nW KOLORZE BIAŁYM"}
            pDescription={""}
            price={"59,00 PLN"}
          />
          <ElementNewsAirKiosk
            src={pic2}
            name={"MAGNES ŁOWICKI W KOLORZE BIAŁYM"}
            pDescription={""}
            price={"59,00 PLN"}
          /><ElementNewsAirKiosk
          src={pic2}
          name={"MAGNES ŁOWICKI W KOLORZE BIAŁYM"}
          pDescription={""}
          price={"59,00 PLN"}
        />
          <ElementNewsAirKiosk
            src={pic3}
            name={"SMYCZ ŁOWICKA W KOLORZE CZARNYM"}
            pDescription={""}
            price={"59,00 PLN"}
          />
          
        
          </Slider>

        </div>
      </div>
    );
  }
}

