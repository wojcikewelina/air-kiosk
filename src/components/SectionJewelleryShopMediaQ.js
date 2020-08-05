import React from "react";
import "../style/SectionJewelleryShopMediaQ.scss";

const SectionJewelleryShopMediaQ = () => {
  return (
    <section className="mq-ewellery-shop">
      <div>
        <span>
          <img src="https://s1.artelioni.pl/products/jewellery/packshot/31631/apart-ar522-2784--0.jpg" />
          <h5>BRANSOLETKA VISANTI</h5>
          <div className="mq-price">279,00 PLN</div>
        </span><span>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdSQU0TPqDr3ZDv4zJ_yyAG2CwyKnLWJs3pw&usqp=CAU" />
          <h5>PIERŚCIONEK VISANTI</h5>
          <div className="mq-price">129,00 PLN</div>
        </span><span>
          <img src="https://s1.apart.pl/products/jewellery/packshot/28236/apart-ar128-7566--0.jpg" />
          <h5>NASZYJNIK VISANTI</h5>
          <div className="mq-price">169,00 PLN</div>
        </span>
      </div>
      <p>Zobacz wszystko &gt;</p>
    </section>
  ); 
};

export default SectionJewelleryShopMediaQ;
