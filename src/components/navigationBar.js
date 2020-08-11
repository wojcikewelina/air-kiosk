import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../style/navigationBar.scss";
import Dropdown from 'react-bootstrap/Dropdown'
import NavSearchElement from "./NavSearchElement.js"
import Media from 'react-media';

var firstChoice =
  < NavLink
    exact={true}
    activeClassName="activ-nav-element"
    className="nav-element"
    to="/board-delivery" >
    <li>Dostawa na pokład</li>
  </NavLink >;

var secondChoice =
  <NavLink
    exact={true}
    activeClassName="activ-nav-element"
    className="nav-element"
    to="/home-delivery">
    <li>Dostawa na adres</li>
  </NavLink>

var thirdChoice =
  <NavLink
    exact={true}
    activeClassName="activ-nav-element"
    className="nav-element"
    to="/services">
    <li>Usługi</li>
  </NavLink>

var fourthChoice =
  <NavLink
    exact={true}
    activeClassName="activ-nav-element"
    className="nav-element"
    to="/auctions">
    <li>Aukcje</li>
  </NavLink>

var fifthChoice =
  <NavLink
    exact={true}
    activeClassName="activ-nav-element"
    className="nav-element"
    to="/new">
    <li className="nav-button">Nowości</li>
  </NavLink>

var sixthChoice =
  <NavLink
    exact={true}
    activeClassName="activ-nav-element"
    className="nav-element"
    to="/sale">
    <li>Promocje</li>
  </NavLink>

class NavigationBar extends Component {
  render() {
    return (

      <section className="navbar-section center-width">
        <Media queries={{ small: { maxWidth: 1025 } }}>
          {matches =>
            matches.small ? (
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Menu
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>{firstChoice}</Dropdown.Item>
                  <Dropdown.Item>{secondChoice}</Dropdown.Item>
                  <Dropdown.Item>{thirdChoice}</Dropdown.Item>
                  <Dropdown.Item>{fourthChoice}</Dropdown.Item>
                  <Dropdown.Item>{fifthChoice}</Dropdown.Item>
                  <Dropdown.Item>{sixthChoice}</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
                <nav >
                  <ul className="nav-ul">
                    {firstChoice}
                    {secondChoice}
                    {thirdChoice}
                    {fourthChoice}
                    {fifthChoice}
                    {sixthChoice}
                  </ul>
                </nav>
              )
          }
        </Media>
        <NavSearchElement />
      </section>
    )
  }
}

export default NavigationBar;
