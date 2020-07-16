import React, { Component } from 'react';

import SectionSliderTop from "../components/SectionSliderTop";
import SectionJewelleryShop from "../components/SectionJewelleryShop";
import SectionSpecialOffers from "../components/SectionSpecialOffers";
import SectionProudOfPolandShop from "../components/SectionProudOfPolandShop";
import SectionShopingOptions from "../components/SectionShopingOptions";


class HomePage extends Component {
  render() {
    return (<section>
      <SectionSliderTop />
      <SectionJewelleryShop classNameProps="shop-bar-style div-covering" />
      <SectionSpecialOffers />
      <SectionProudOfPolandShop classNameProps="shop-bar-style" />
      <SectionShopingOptions/>
    </section>
    )
  }
}
export default HomePage;