import React from "react";
import "../style/SectionJewelleryShopMediaQ.scss";

const SectionJewelleryShopMediaQ = () => {
  return (
    <section className="mq-ewellery-shop">
      <div>
        <span>
          <img src="https://s1.artelioni.pl/products/jewellery/packshot/31631/apart-ar522-2784--0.jpg" />
          <h5>BRANSOLETKA<br/>VISANTI</h5>
          <div className="mq-price">279,00 PLN</div>
        </span><span>
          <img src="https://s1.apart.pl/products/jewellery/packshot/33856/apart-ap523-1056--0.jpg" />
          <h5>PIERŚCIONEK<br/>VISANTI</h5>
          <div className="mq-price">129,00 PLN</div>
        </span><span>
          <img src="https://s1.apart.pl/products/jewellery/packshot/26264/apart-ap127-9769--0.jpg" />
          <h5>NASZYJNIK<br/>VISANTI</h5>
          <div className="mq-price">169,00 PLN</div>
        </span>
      </div>
      <p>Zobacz wszystko &gt;</p>
    </section>
  ); 
};

export default SectionJewelleryShopMediaQ;
