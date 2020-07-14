import React, { Component } from 'react';
import "../style/SpecialOffers.scss"

import pigImage from "../pictures-icons/skarbonka.jpg";


class SpecialOffers extends Component {
  render() {
    return (
    
    <section className="special-offers">
      <div className="first-offer">
          <div className="first-offer-pic">
            <img src={pigImage} alt="skarbonka"/>
          </div>
          <div className="first-offer-description flex-display">
              <span className="left-span"><p>OSZCZĘDZASZ DO 20%</p></span>
              <span className="right-span">
                  <div><b>Wyprzedaż już trwa</b></div>
                  <div>Wszystkie lokalizacje na świecie</div>
              </span>
          </div>
           </div>
      <div className="second-offer">
      <h3>LUKSUSOWY DOJAZD</h3>
          <p>Wybierz komfort ponad wszystko. Skorzystaj z usługi, a dowieziemy Cię na poklad samolotu limuzyną</p>
          <button>Dowiedz się więcej</button>
      </div>
      </section>
    )}
}
export default SpecialOffers;