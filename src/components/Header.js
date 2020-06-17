import React from "react";
import "./Header.css";
import PersonIcon from "../pictures-icons/PersonIcon";
import CartIcon from "../pictures-icons/CartIcon";
import PlaneIcon from "../pictures-icons/PlaneIcon";

const Header = () => {
    return (
        <header className="center-width">
            <div className="header-top">
                <div></div>
                <div className="my-account-div">
                    <label>
                        <span>
                            <PersonIcon />
                        </span>
                        <span>Moje konto</span>
                    </label>
                    <label>
                        <span>
                            <CartIcon />
                        </span>
                        <span>Koszyk</span>
                    </label>
                    <label>
                        <span>
                            <select name="currency" id="currency-select">
                                <option value="pln">PLN</option>
                                <option value="gbp">GBP</option>
                                <option value="eur">EUR</option>
                                <option value="usd">USD</option>
                            </select>
                        </span>
                        <span><select name="country" id="country-select">
                            <option value="pl">PL</option>
                            <option value="gb">GB</option>
                            <option value="de">DE</option>
                            <option value="usa">USA</option>
                        </select></span>
                    </label>
                </div>
            </div>
            <div className="header-bottom">
                <a href="/home-delivery"> <h1 className="lot-logo" /></a>
                <div className="my-reserv-div">
                    <PlaneIcon />
                    <div>
                        <div>Numer twojej rezerwacji</div>
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

