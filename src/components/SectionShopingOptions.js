import React, { Component } from 'react';
import "../style/SectionShopingOptions.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faCreditCard, faDesktop, faEnvelope } from '@fortawesome/free-solid-svg-icons'


class SectionShopingOptions extends Component {
    render() {
        return (

            <section className="shoping-options">
                <div className="content-div">

                    <div className="option-div">
                        <div className="circle-div"><FontAwesomeIcon color="black" icon={faPlane} size="2x" /></div>
                        <h6>DOSTAWA</h6>
                    </div>
                    <div className="option-div">
                        <div className="circle-div"><FontAwesomeIcon color="black" icon={faCreditCard} size="2x" /></div>
                        <h6>PATNOŚCI</h6>
                    </div>
                    <div className="option-div">
                        <div className="circle-div"><FontAwesomeIcon color="black" icon={faDesktop} size="2x" /></div>
                        <h6>ZAKUPY</h6>
                    </div>
                    <div className="option-div">
                        <div className="circle-div"><FontAwesomeIcon color="black" icon={faEnvelope} size="2x" /></div>
                        <h6>WYSYŁKA</h6>
                    </div>
                </div>

            </section>
        )
    }
}
export default SectionShopingOptions;