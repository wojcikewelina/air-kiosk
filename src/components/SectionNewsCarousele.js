import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/SectionNewsCarousele.scss";

import ElementNewsAirKiosk from "./ElementNewsAirKiosk.js"
import { getNewsData } from "../services/LoadJson"

export default class Resizable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allNewsData: [],
      display: true,
      marginLeft: 5,
      width: 90
    };
  }

  componentDidMount() {
    getNewsData().then(result => {
      this.setState({
        allNewsData: result
      });
    }).then(() => console.log(this.state.allNewsData));
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

    const allNewsElements = this.state.allNewsData.map((element, i) => {
      return (
        <div>
          <ElementNewsAirKiosk
            src={element.src}
            name={element.name}
            pDescription={element.pDescription}
            price={element.price}
          />
        </div>
      )
    });


    return (
      <div className="section-news-c">
        <h5> NOWOŚCI W AIRKIOSKU </h5>
        <div
          style={{
            width: this.state.width + "%",
            marginLeft: this.state.marginLeft + "%",
            display: this.state.display ? "block" : "none"
          }}
        >
          <Slider {...settings}>
            {allNewsElements}
          </Slider>

        </div>
        <div className="center"><button className="more-news-button">Więcej nowości&gt;</button></div>
      </div>
    );
  }
}