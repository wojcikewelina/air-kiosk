import React from "react";

const ShopBasicBox = props => {
  return (
    <div className="shop-basic-box">
      <img src={props.src} alt="shop01" />
      <h6>{props.name}</h6>
      <div className="price-part">
        <span>{props.priceCurrent}</span>
      </div>
    </div>
  );
};

export default ShopBasicBox;

