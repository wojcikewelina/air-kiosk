import React, { Component } from 'react';
import "../style/SectionBottomMenu.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

class SectionBottomMenu extends Component {
    render() {
        return (
            <section className="bottom-menu">
                <div>
                    <div id="firstPart">
                        <h6>PRZYDATNE INFORMACJE</h6>
                        <ul>
                            <li>Regulamin Sklepu</li>
                            <li>Regulamin Aukcji biletów lotniczych</li>
                            <li>Regulamin Aukcji Bagażu</li>
                            <li>Regulamin Aukcji</li>
                        </ul>
                    </div>

                    <div id="secondPart">
                        <h6>DLA KUPUJĄCEGO</h6>
                        <ul>
                            <li>Pomoc</li>
                            <li>Sposoby dostawy</li>
                            <li>Zwroty i gwarancje</li>
                            <li>Oferta Miles More</li>
                            <li>Mapa serwisu</li>
                        </ul>
                    </div>

                    <div id="thirdPart">
                        <h6>KONTAKT</h6>
                        <div className="phone-number">
                            <FontAwesomeIcon color="black" icon={faPhoneAlt} size="2x" />
                            <span className="phone-span">
                                <div>Telefon</div>
                                <div><a href="tel:12-525-252-25">12 525-252-25</a></div>
                            </span>
                        </div>
                        <div className="contact-form">
                            <FontAwesomeIcon color="black" icon={faEnvelope} size="2x" />
                            <a href="mailto:...">Formularz kontaktowy</a>
                        </div>
                    </div>

                    <div id="fourthPart">
                        <h6>METODY PŁATNOŚCI</h6>
                        <span className="credit-cards">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png" alt="master-card" />
                            <img src="https://purepng.com/public/uploads/large/purepng.com-visa-logologobrand-logoiconslogos-251519938794uqvcz.png" alt="visa-card" />
                            <img src="https://www.freepnglogos.com/uploads/paypal-logo-png-7.png" alt="pay-pal" />
                        </span>
                        <span className="credit-cards">
                            <img src="https://www.jing.fm/clipimg/full/180-1801334_free-vector-maestro-logo-logo-visa-mastercard-vector.png" alt="maestro-card" />
                            <img src="https://seeklogo.com/images/V/visa-electron-logo-71BEC57E8F-seeklogo.com.png" alt="visamaestro-card" />
                            <img src="https://i.ya-webdesign.com/images/bank-of-america-icon-png-7.png" alt="american-express" />
                        </span>
                    </div>
                </div>
            </section>
        )
    }
}
export default SectionBottomMenu;