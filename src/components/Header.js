import React from "react";
import "../style/Header.scss";

import { FaUserAlt,FaShoppingCart} from "react-icons/fa";

import PlaneIcon from "../pictures-icons/PlaneIcon";
import { NavLink } from "react-router-dom";



const Header = () => {
    return (
        <header className="center-width">
            <div className="header-top">
              
              
              
              
                <div></div>
                <div className="my-account-div">
                    <label>
                        <span>
                        <FaUserAlt/>
                        </span>
                        <span>Moje konto</span>

                        <span className="chart-icon">
                        <FaShoppingCart/>

                        </span>
                        <span>0 PLN</span>
                    </label>
                    <label>
                        <span>
                            <select name="country" id="country-select">
                                <option value="pl">PL</option>
                                <option value="gb">FR</option>
                                <option value="de">DE</option>
                                <option value="usa">EN</option>
                            </select>
                        <select name="currency" id="currency-select">
                            <option value="pln">PLN</option>
                            <option value="gbp">GBP</option>
                            <option value="eur">EUR</option>
                            <option value="usd">USD</option>
                        </select>
                        </span>
                    </label>
                </div>
            </div>
            <div className="header-bottom">
                <NavLink
                    exact={true}
                    to="/">
                    <h1 className="lot-logo" ></h1>
                </NavLink>

                <div className="my-reserv-div">
                    <PlaneIcon />
                    <div>
                        <div className="reserv-text">Numer twojej rezerwacji</div>
                        <div className="reserv-number">
                            <span>233A2455</span>
                            <a href=""><span>zmień</span></a></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

