import React from "react";
import "../style/ElementNewsAirKiosk.scss";




const ElementNewsAirKiosk = props => {
    return (
        <div className="element-news">
            <div className="img-container">
                <img src={props.src} alt="airKiosk" />
            </div>
            <h6>{props.name}</h6>
            <p>{props.pDescription}</p>
            <div className="price-part">
                <span className="price-current">{props.price} PLN</span>
            </div>
        </div> 
    );
};

export default ElementNewsAirKiosk;