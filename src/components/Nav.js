import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Form } from 'react-bootstrap';

function Nav() {
    return (
        <div className="navbarContainer">
            <Form>
                <Form.Group>
                    <button id="searchBtn"><FontAwesomeIcon id="searchIcon" icon={faSearch} /></button>
                    <input type="text" placeholder="Search.."></input>
                </Form.Group>

                <Form.Group id="typeRadio">
                    <Form.Label>TYPE</Form.Label><br />
                    <Form.Check
                        inline
                        name="type"
                        label="Any"
                        type="radio"
                        id="checkBtnAny"
                    />
                    <Form.Check
                        inline
                        name="type"
                        label="Movies"
                        type="radio"
                        id="checkBtnMovies"
                    />
                    <Form.Check
                        inline
                        name="type"
                        label="Series"
                        type="radio"
                        id="checkBtnSeries"
                    />
                    <Form.Check
                        inline
                        name="type"
                        label="Episodes"
                        type="radio"
                        id="checkBtnEpisodes"
                    />
                </Form.Group>
            </Form>
        </div>
    )
}

export default Nav;