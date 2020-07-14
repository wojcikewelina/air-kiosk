import React, { Component } from 'react';
import "../style/ShopBarStyle.scss";

import pic1 from "../pictures-icons/pop1.jpg"
import pic2 from "../pictures-icons/pop2.jpg"
import pic3 from "../pictures-icons/pop3.jpg"
import pic4 from "../pictures-icons/pop4.jpg"

import ShopMainBox from "./ShopMainBox"
import ShopStandardBox from "./ShopStandardBox"


const ProudOfPolandShop = (props) => {

    return (

        <div className={props.classNameProps}>


            <ShopStandardBox
                classNameProps="shop-standard-box"
                src={pic1}
                name={"BRANSOLETKA VISANTI"}
                pDescription={"perły łososiowe hodowane, słodkowodne 4-5mm, zapięcie srebrne"}
                priceCurrent={"79,00"}
            />
            <ShopStandardBox
                classNameProps="shop-standard-box"
                src={pic2}
                name={"PIERŚCIONEK VISANTI"}
                pDescription={"srebrny z białą perłą słodkowodną ok. 6 mm"}
                priceCurrent={"89,00"}
            />
            <ShopStandardBox
                classNameProps="shop-standard-box"
                src={pic3}
                name={"NASZYJNIK"}
                pDescription={"z perłą shell wielkości 20 mm w kolorze białym"}
                priceCurrent={"149,00"}
            />
            <ShopMainBox
                classNameProps="shop-main-box"
                src={pic4}
                mainName="BIŻUTERIA VISANTI"
                pValue="Produkty z oferty SHOP&MORE z dostawa pod wskazany adres do Polski"
                buttonText="Poznaj cała kolekcję >"
            />
        </div>
    )
}

export default ProudOfPolandShop;