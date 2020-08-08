import React from "react";
import "../style/SectionJewelleryShop.scss";
import "../style/ShopBarStyle.scss";

import ShopMainBox from "./ShopMainBox"
import ShopStandardBox from "./ShopStandardBox"


const SectionJewelleryShop = (props) => {
  return (
    <div className={props.classNameProps}>
      <ShopMainBox src="https://s1.apart.pl/products/jewellery/packshot/34825/apart-ap523-9781--0.jpg"
        classNameProps="shop-main-box div-covering"
        mainName="BIŻUTERIA VISANTI"
        pValue="Produkty z oferty SHOP&MORE z dostawa pod wskazany adres do Polski"
        buttonText="Poznaj cała kolekcję >"
      />
      <ShopStandardBox
        src={"https://s1.apart.pl/products/jewellery/packshot/26264/apart-ap127-9769--0.jpg"}
        classNameProps="shop-standard-box div-covering"
        name={"BRANSOLETKA VISANTI"}
        pDescription={"perły łososiowe hodowane, słodkowodne 4-5mm, srebrne"}
        priceCurrent={"79,00"}
        priceBefore={"83,00"}
      />
      <ShopStandardBox
        src={"https://s1.apart.pl/products/jewellery/packshot/33856/apart-ap523-1056--0.jpg"}
        classNameProps="shop-standard-box div-covering"
        name={"PIERŚCIONEK VISANTI"}
        pDescription={"srebrny pierścionek z białą perłą słodkowodną,  ok. 6 mm"}
        priceCurrent={"89,00"}
        priceBefore={"129,00"}
      />
      <ShopStandardBox
        classNameProps="shop-standard-box div-covering"
        src={"https://s1.apart.pl/products/jewellery/packshot/22277/apart-103-582--0.jpg"}
        name={"NASZYJNIK"}
        pDescription={"Naszyjnik z perłą shell wielkości 20 mm w kolorze białym"}
        priceCurrent={"149,00"}
        priceBefore={"189,00"}
      />
    </div>
  );
};

export default SectionJewelleryShop;
