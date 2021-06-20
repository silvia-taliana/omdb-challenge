import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Form } from 'react-bootstrap';
import RangeSlider from "./RangeSlider";

function Nav() {
    // setting state
    const [search, setSearch] = useState({
        title: "null", yearRange: [1900, 2021], type: "Any"
    });

    // handling form input 
    function handleInputChange(event) {
        const { name, value } = event.target;
        setSearch({ ...search, [name]: value });
    };

    return (
        <div className="navbarContainer">
            <Form>
                <Form.Group>
                    <button id="searchBtn"><FontAwesomeIcon id="searchIcon" icon={faSearch} /></button>
                    <input type="text" placeholder="Search.." onChange={handleInputChange} name="title"></input>
                </Form.Group>

                <Form.Group>
                    <RangeSlider getYearRangeData={search} />
                </Form.Group>

                <Form.Group id="typeRadio">
                    <Form.Label>TYPE</Form.Label><br />
                    <Form.Check
                        inline
                        name="type"
                        label="Any"
                        type="radio"
                        id="checkBtnAny"
                        onChange={handleInputChange}
                        value="any"
                        defaultChecked
                    />
                    <Form.Check
                        inline
                        name="type"
                        label="Movies"
                        type="radio"
                        id="checkBtnMovies"
                        onChange={handleInputChange}
                        value="movie"
                    />
                    <Form.Check
                        inline
                        name="type"
                        label="Series"
                        type="radio"
                        id="checkBtnSeries"
                        onChange={handleInputChange}
                        value="series"
                    />
                    <Form.Check
                        inline
                        name="type"
                        label="Episodes"
                        type="radio"
                        id="checkBtnEpisodes"
                        onChange={handleInputChange}
                        value="episode"
                    />
                </Form.Group>
            </Form>
        </div>
    )
}

export default Nav;