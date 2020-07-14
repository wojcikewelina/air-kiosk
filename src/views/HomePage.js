import React, { Component } from 'react';

import SliderTop from "../components/SliderTop";
import JewelleryShop from "../components/JewelleryShop";
import SpecialOffers from "../components/SpecialOffers";
import ProudOfPolandShop from "../components/ProudOfPolandShop";


class HomePage extends Component {
  render() {
    return (<section>
      <SliderTop />
      <JewelleryShop classNameProps="shop-bar-style div-covering" />
      <SpecialOffers />
      <ProudOfPolandShop classNameProps="shop-bar-style" />
    </section>
    )
  }
}
export default HomePage;