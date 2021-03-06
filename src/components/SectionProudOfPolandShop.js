import React from 'react';
import "../style/ShopBarStyle.scss";
import "../style/ShopBasicBox.scss";
import "../style/SectionProudOfPoland.scss";

import pic1 from "../pictures-icons/pop1.jpg"
import pic2 from "../pictures-icons/pop2.jpg"
import pic3 from "../pictures-icons/pop3.jpg"
import pic4 from "../pictures-icons/pop4.jpg"

import ShopBasicBox from "./ShopBasicBox"


const SectionProudOfPolandShop = (props) => {

    return (

        <div className={props.classNameProps}>

            <ShopBasicBox
                src={pic1}
                name={"LOREM IPSUM\nKOLORZE BIAŁYM"}
                priceCurrent={"59,00 PLN"}
            />
            <ShopBasicBox
                src={pic2}
                name={"LOREM IPSUM\nKOLORZE BIAŁYM"}
                priceCurrent={"6,00 PLN"}
            />
            <ShopBasicBox
                src={pic3}
                name={"LOREM IPSUM\nKOLORZE CZARNYM"}
                priceCurrent={"10,00 PLN"}
            />
            <div className="main-proudOP-box">
                <img src={pic4} alt="proudOfPoland" />
                <div className="text-shop-box">
                    <span className="text-line" />
                    <h5>PROUD OF POLAND</h5>
                    <span className="text-line" />
                </div>
                <p>Zobacz jak możesz poznać wszystkie elementy - poznaj nowe lorem lorem ipsum lorem ipsum</p>
                <button>Zobacz pozostale</button>
            </div>
        </div>
    )
}

export default SectionProudOfPolandShop;