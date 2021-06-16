import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Form } from 'react-bootstrap';
import RangeSlider from "./RangeSlider";
import { MovieContext } from "../MovieContext";

function Nav() {
    // using global state
    const [search, setSearch] = useContext(MovieContext);

    // handling form input 
    function handleInputChange(event) {
        const { name, value } = event.target;
        setSearch({ ...search, [name]: value });
        console.log(search);
    };

    return (
        <div className="navbarContainer">
            <Form>
                <Form.Group>
                    <button id="searchBtn"><FontAwesomeIcon id="searchIcon" icon={faSearch} /></button>
                    <input type="text" placeholder="Search.." onChange={handleInputChange} name="title"></input>
                </Form.Group>

                <Form.Group>
                    <RangeSlider />
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
                        value="Any"
                    />
                    <Form.Check
                        inline
                        name="type"
                        label="Movies"
                        type="radio"
                        id="checkBtnMovies"
                        onChange={handleInputChange}
                        value="Movies"
                    />
                    <Form.Check
                        inline
                        name="type"
                        label="Series"
                        type="radio"
                        id="checkBtnSeries"
                        onChange={handleInputChange}
                        value="Series"
                    />
                    <Form.Check
                        inline
                        name="type"
                        label="Episodes"
                        type="radio"
                        id="checkBtnEpisodes"
                        onChange={handleInputChange}
                        value="Episodes"
                    />
                </Form.Group>
            </Form>
        </div>
    )
}

export default Nav;