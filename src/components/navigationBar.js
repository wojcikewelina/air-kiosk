import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../style/navigationBar.css";


class NavigationBar extends Component {
  render() {
    return (
      <section className="navbar-section center-width">
        <nav >
          <ul className="nav-ul">
            <NavLink
              exact={true}
              activeClassName="activ-nav-element"
              className="nav-element"
              to="/board-delivery">
              <li>Dostawa na pokład</li>
            </NavLink>
            <NavLink
              exact={true}
              activeClassName="activ-nav-element"
              className="nav-element"
              to="/home-delivery">
              <li>Dostawa na adres</li>
            </NavLink>
            <NavLink
              exact={true}
              activeClassName="activ-nav-element"
              className="nav-element"
              to="/services">
              <li>Usługi</li>
            </NavLink>
            <NavLink
              exact={true}
              activeClassName="activ-nav-element"
              className="nav-element"
              to="/auctions">
              <li>Aukcje</li>
            </NavLink>
            <NavLink
              exact={true}
              activeClassName="activ-nav-element"
              className="nav-element"
              to="/new">
              <li className="nav-button">Nowości</li>
            </NavLink>
            <NavLink
              exact={true}
              activeClassName="activ-nav-element"
              className="nav-element"
              to="/sale">
              <li>Promocje</li>
            </NavLink>
          </ul>
        </nav>

        <form className="nav-search-form">
          <input type="text" placeholder="Search" />
          <button variant="outline-light">Search</button>
        </form>
      </section>
    )
  }
}

export default NavigationBar;
