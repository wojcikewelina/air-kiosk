import Carousel from 'react-bootstrap/Carousel'
import React, { Component } from 'react';

import CarouselFirst from "../pictures-icons/Carousel-1.jpg"
import CarouselSecond from "../pictures-icons/Carousel-2.jpg"
import CarouselThird from "../pictures-icons/Carousel-3.jpg"

const ACTION_NAME = "#akcjalicytacja"

class CarouselPart extends Component {
    render() {
        return (<Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={CarouselFirst}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>{ACTION_NAME}</h3>
                    <button>Licytuj</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={CarouselSecond}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>{ACTION_NAME}</h3>
                    <button>Licytuj</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={CarouselThird}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>{ACTION_NAME}</h3>
                    <button>Licytuj</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>)
    }
}

export default CarouselPart;