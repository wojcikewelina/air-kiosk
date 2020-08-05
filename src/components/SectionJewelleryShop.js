import React from "react";
import "../style/SectionJewelleryShop.scss";
import "../style/ShopBarStyle.scss";

import ShopMainBox from "./ShopMainBox"
import ShopStandardBox from "./ShopStandardBox"


const SectionJewelleryShop = (props) => {
  return (
    <div className={props.classNameProps}>
      <ShopMainBox src="https://bnsec.bluenile.com/bluenile/is/image/bluenile/-akoya-pearl-necklace-18k-white-gold-/40941_main?$phab_detailmain$"
        classNameProps="shop-main-box div-covering"
        mainName="BIŻUTERIA VISANTI"
        pValue="Produkty z oferty SHOP&MORE z dostawa pod wskazany adres do Polski"
        buttonText="Poznaj cała kolekcję >"
      />
      <ShopStandardBox
        src={"https://s1.artelioni.pl/products/jewellery/packshot/31631/apart-ar522-2784--0.jpg"}
        classNameProps="shop-standard-box div-covering"
        name={"BRANSOLETKA VISANTI"}
        pDescription={"perły łososiowe hodowane, słodkowodne 4-5mm, srebrne"}
        priceCurrent={"79,00"}
        priceBefore={"83,00"}
      />
      <ShopStandardBox
        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdSQU0TPqDr3ZDv4zJ_yyAG2CwyKnLWJs3pw&usqp=CAU"}
        classNameProps="shop-standard-box div-covering"
        name={"PIERŚCIONEK VISANTI"}
        pDescription={"srebrny pierścionek z białą perłą słodkowodną,  ok. 6 mm"}
        priceCurrent={"89,00"}
        priceBefore={"129,00"}
      />
      <ShopStandardBox
        classNameProps="shop-standard-box div-covering"
        src={"https://s1.apart.pl/products/jewellery/packshot/28236/apart-ar128-7566--0.jpg"}
        name={"NASZYJNIK"}
        pDescription={"Naszyjnik z perłą shell wielkości 20 mm w kolorze białym"}
        priceCurrent={"149,00"}
        priceBefore={"189,00"}
      />
    </div>
  );
};

export default SectionJewelleryShop;
