import React, { Component } from 'react';
import "../style/SectionNewsletter.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


class SectionNewsletter extends Component {
    render() {
        return (

            <section className="newsletter">
                <div className="left-part">
                    <div className="circle-div"><FontAwesomeIcon color="black" icon={faEnvelope} size="2x" /></div>
                    <div className="description">
                        <h3>ZOSTAŃ ŁOWCĄ OKAZJI</h3>
                        <p>Zostaw nam swój email i upoluj specjalne <br />oferty oraz zniżki na trasach LOT-u</p>
                    </div>
                </div>
                <div className="right-part">
                    <form action="">

                        <label for="">
                            <input type="text" placeholder="Twój adres email:" />
                        </label>
                        <button>Dołącz</button>
                    </form>
                    <div>
                        <input type="checkbox" /> <label>Zgadzam się na przetwarzanie moich danych przez LOT</label>
                    </div>
                    <div>
                        <input type="checkbox" /> <label>Zgadzam się na przetwarzanie moich danych przez Partnerów</label>
                    </div>
                </div>
                <div>

                </div>
            </section>
        )
    }
}
export default SectionNewsletter;