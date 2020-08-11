import React, { Component } from 'react';
import Media from 'react-media';

import SectionSliderTop from "../components/SectionSliderTop";
import SectionJewelleryShop from "../components/SectionJewelleryShop";
import SectionSpecialOffers from "../components/SectionSpecialOffers";
import SectionProudOfPolandShop from "../components/SectionProudOfPolandShop";
import SectionShopingOptions from "../components/SectionShopingOptions";
import SectionNewsCarousel from "../components/SectionNewsCarousele";
import SectionNewsletter from "../components/SectionNewsletter";
import SectionBottomMenu from "../components/SectionBottomMenu";
import SectionJewelleryShopMediaQ from '../components/SectionJewelleryShopMediaQ';
import SectionProudOfPolandShopMediaQ from "../components/SectionProudOfPolandShopMediaQ";

class HomePage extends Component {
  render() {
    return (
      <section>
        <SectionSliderTop />
        <Media queries={{ small: { maxWidth: 800 } }}>
          {matches =>
            matches.small ? (
              <SectionJewelleryShopMediaQ />
            ) : (
                <SectionJewelleryShop classNameProps="shop-bar-style div-covering" />
              )
          }
        </Media>
        <SectionSpecialOffers />
        <Media queries={{ small: { maxWidth: 900 } }}>
          {matches =>
            matches.small ? (
              <SectionProudOfPolandShopMediaQ />
            ) : (
                <SectionProudOfPolandShop classNameProps="shop-bar-style" />
              )
          }
        </Media>
        <SectionShopingOptions />
        <SectionNewsCarousel />
        <SectionNewsletter />
        <SectionBottomMenu />
      </section>
    )
  }
}
export default HomePage;