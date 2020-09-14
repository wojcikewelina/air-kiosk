import React from "react";
import "../style/SectionJewelleryShopMediaQ.scss";

const SectionJewelleryShopMediaQ = () => {
  return (
    <section className="mq-ewellery-shop">
      <div>
        <span>
          <img src="https://images.unsplash.com/photo-1587334108051-1639d15a30e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80g" />
          <h5>OWOC<br/>POMIDOR</h5>
          <div className="mq-price">279,00 PLN</div>
        </span><span>
          <img src="https://images.unsplash.com/photo-1587131782738-de30ea91a542?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
          <h5>OWOC<br/>POMARAŃCZA</h5>
          <div className="mq-price">129,00 PLN</div>
        </span><span>
          <img src="https://images.unsplash.com/photo-1455134168668-4066045897c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
          <h5>OWOC<br/>POMIDOR</h5>
          <div className="mq-price">169,00 PLN</div>
        </span>
      </div>
      <p>Zobacz wszystko &gt;</p>
    </section>
  ); 
};

export default SectionJewelleryShopMediaQ;
