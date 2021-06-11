import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Nav() {
    return (
        <div className="navbarContainer">
            <button id="searchBtn"><FontAwesomeIcon id="searchIcon" icon={faSearch} /></button>
            <input type="text" placeholder="Search.."></input>
        </div>
    )
}

export default Nav;