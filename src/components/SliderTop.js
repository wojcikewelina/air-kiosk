import React, { useState } from 'react';
import "../style/sliderTop.scss";

import Pictue1 from "../pictures-icons/Carousel-1.jpg"
import Pictue2 from "../pictures-icons/Carousel-2.jpg"
import Pictue3 from "../pictures-icons/Carousel-3.jpg"
import SliderTopImage from './SliderTopImage';

function SliderTop() {

    let sliderArr = [
        <SliderTopImage src={Pictue1} />,
        <SliderTopImage src={Pictue2} />,
        <SliderTopImage src={Pictue3} />
    ];
    const [x, setX] = useState(0);
    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100)
    }
    const goRight = () => {
        (x === -100 * (sliderArr.length - 1)) ? setX(0) : setX(x - 100)
    }

    return (
        <div className="slider-top">
            {
                sliderArr.map((item, index) => {
                    return (
                        <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>
                            {item}
                        </div>
                    )
                })
            }
            <button id="goLeft" onClick={goLeft}>
                back
            </button>
            <button id="goRight" onClick={goRight}>
                next
            </button>
        </div>

    )


};

export default SliderTop;