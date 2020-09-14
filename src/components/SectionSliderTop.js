import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


import Picture1 from "../pictures-icons/Carousel-1.jpg"
import Picture2 from "../pictures-icons/Carousel-2.jpg"
import Picture3 from "../pictures-icons/Carousel-3.jpg"

import '../style/SectionSliderTop.scss'

const HASHTAG_NAME = "NOWE WYPRZEDAŻE";
const DESCRIPTION = "kup dzisiaj wszystko co tylko zechcesz!"
function SectionSliderTop() {

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Picture1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{HASHTAG_NAME}</h3>
          <p>{DESCRIPTION}</p>
          <button>Sprawdź to!</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Picture2}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>{HASHTAG_NAME}</h3>
          <p>{DESCRIPTION}</p>
          <button>Zobacz!</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Picture3}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>{HASHTAG_NAME}</h3>
          <p>{DESCRIPTION}</p>
          <button>Wybierz!</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
};

export default SectionSliderTop;