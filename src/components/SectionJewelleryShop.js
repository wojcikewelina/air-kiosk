import React from "react";
import "../style/SectionJewelleryShop.scss";
import "../style/ShopBarStyle.scss";

import ShopMainBox from "./ShopMainBox"
import ShopStandardBox from "./ShopStandardBox"


const SectionJewelleryShop = (props) => {
  return (
    <div className={props.classNameProps}>
      <ShopMainBox src="https://images.unsplash.com/photo-1587334108051-1639d15a30e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60g"
        classNameProps="shop-main-box div-covering"
        mainName="SKLEP ONLINE"
        pValue="Produkty z oferty sklepu z dostawa pod wskazany adres do Polski"
        buttonText="Poznaj cała kolekcję >"
      />
      <ShopStandardBox
        src={"https://images.unsplash.com/photo-1587131782738-de30ea91a542?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}
        classNameProps="shop-standard-box div-covering"
        name={"CYNAMON"}
        pDescription={"cynamon, laska, słodkowodne 4-5cm, aromat"}
        priceCurrent={"79,00"}
        priceBefore={"83,00"}
      />
      <ShopStandardBox
        src={"https://images.unsplash.com/photo-1455134168668-4066045897c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}
        classNameProps="shop-standard-box div-covering"
        name={"ZESTAW KAWOWY"}
        pDescription={"zestaw do parzenia kawy, wersja limitowana"}
        priceCurrent={"89,00"}
        priceBefore={"129,00"}
      />
      <ShopStandardBox
        classNameProps="shop-standard-box div-covering"
        src={"https://images.unsplash.com/photo-1587302186428-d3753405ffed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}
        name={"KAWA"}
        pDescription={"Czarna parzona, świeżo palone ziarna"}
        priceCurrent={"149,00"}
        priceBefore={"189,00"}
      />
    </div>
  );
};

export default SectionJewelleryShop;
