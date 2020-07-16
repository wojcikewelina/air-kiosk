import React from "react";
import "../style/SectionJewelleryShop.scss";

const ShopStandardBox = props => {
  return (
    <div className={props.classNameProps}>
      <img src={props.src} alt="picture" />
      <h6>{props.name}</h6>
      <p>{props.pDescription}</p>
      <div className="price-part">
        <span className="price-current">{props.priceCurrent} PLN</span>
        <span className="price-before">{props.priceBefore} PLN</span>
      </div>
    </div>
  );
};

export default ShopStandardBox;
