import React, { Component } from 'react';
import "../style/NavSearchElement.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



class NavSearchElement extends Component {
    render() {
        return (
            <div id="searchingInNav">
                <form className="nav-search-form">
                    <input type="text" placeholder="Szukaj produktu..." />
                    <button variant="outline-light">
                        <FontAwesomeIcon color="black" icon={faSearch} size="1.5x" /></button>
                </form>
            </div>
        )
    }
}
export default NavSearchElement;