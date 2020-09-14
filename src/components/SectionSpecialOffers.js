import React, { Component } from 'react';
import "../style/SectionSpecialOffers.scss"

import pigImage from "../pictures-icons/skarbonka.jpg";


class SectionSpecialOffers extends Component {
  render() {
    return (

      <section className="special-offers">
        <div className="first-offer">
          <div className="first-offer-pic">
            <img src={pigImage} alt="skarbonka" />
          </div>
          <div className="first-offer-description flex-display">
            <span className="left-span"><p>WYDAWAJ MNIEJ</p></span>
            <span className="right-span">
              <div><b>Wyprzedaż już trwa</b></div>
              <div>Gdzie tylko chcsz się dostać!</div>
            </span>
          </div>
        </div>
        <div className="second-offer">
          <h3>KLAMKI SAMOCHODOWE</h3>
          <p>lorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem lorem
          </p>
          <button>Dowiedz się więcej</button>
        </div>
      </section>
    )
  }
}
export default SectionSpecialOffers;