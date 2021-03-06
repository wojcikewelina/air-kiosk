import React from "react";
import "../style/SectionJewelleryShop.scss";

const ShopMainBox = (props) => {
  return (
    <div className={props.classNameProps}>
      <img src={props.src} alt="Jewellery" />
      <div className="text-shop-box">
        <span className="text-line"/>
        <h3>{props.mainName}</h3> 
        <span className="text-line"/>
      </div>
      <p>{props.pValue}</p>
      <button>{props.buttonText}</button>
    </div>
  );
};

export default ShopMainBox;
