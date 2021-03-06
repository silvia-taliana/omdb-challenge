import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../MovieContext";
import Axios from "axios";
import { Scrollbars } from "react-custom-scrollbars";
import { Row, Col } from "react-bootstrap";

function ResultList() {
    // using global state
    const [movies, setMovies] = useContext(MovieContext);

    // setting local state for results list
    const [resultList, setResultList] = useState([
        {
            Poster: "",
            Title: "",
            Type: "",
            Year: "",
            imdbID: "",
        }
    ]);

    // setting state so selected movie will be set to active on click 
    const [active, setActive] = useState("");

    // initialising active state to false
    useEffect(() => {
        setActive("false");
    }, [active]);

    // setting state to give a message for no result being found in search
    const [message, setMessage] = useState("Please search for a movie or television show");

    useEffect(() => {
        // getting search parameters from url 
        let url_string = (window.location.href).toLowerCase();
        let url = new URL(url_string);
        let title = url.searchParams.get("title");

        // rendering search function only if user has entered a title to search
        if (title) {
            let yearRange = url.searchParams.get("yearrange");
            let yearRangeStart = yearRange[0] + yearRange[1] + yearRange[2] + yearRange[3];
            let yearRangeEnd = yearRange[5] + yearRange[6] + yearRange[7] + yearRange[8];
            let type = url.searchParams.get("type");
            // setting type = any option to empty string as "any" is not a valid search option, the api defaults to search all types when no type is chosen
            if (type === "any") {
                type = "";
            }

            // api call and setting movie state with search results
            Axios.get(`http://www.omdbapi.com/?apikey=805cd57f&s=${title}&type=${type}`).then(
                (res) => {
                    // filtering for year range 
                    let movieList = res.data.Search;
                    let newMovieList = movieList.filter(movie => movie.Year >= yearRangeStart);
                    let filteredMovieList = newMovieList.filter(movie => movie.Year <= yearRangeEnd);

                    // setting movie and result states 
                    if (filteredMovieList.length === 0) {
                        setMessage("No result found with that title, please try again");
                        setResultList([
                            {
                                Poster: "",
                                Title: "not found",
                                Type: "",
                                Year: "",
                                imdbID: "",
                            }
                        ]);
                    } else {
                        setResultList(filteredMovieList);
                        setMovies(filteredMovieList);
                    }
                })
                .catch(err => console.log(err));
        }
    }, [setMovies]);

    // getting movie id of selected movie and saving in state
    function getMovieID(id) {
        let movieSelection = { ...movies, selectedMovieID: id }
        setMovies(movieSelection);
    }

    // returning results if movie has been searched and not found message if no result returned
    if (resultList[0].Title === "") {
        return (
            <div className="resultList" id="resultMessagePleaseSearch">
                <p>{message}</p>
            </div>
        )
    }
    else if (resultList[0].Title === "not found") {
        return (
            <div className="resultList" id="resultMessageNotFound" >
                <p>{message}</p>
            </div>
        )
    }
    else {
        return (
            <div className="resultList" >
                <Scrollbars style={{ width: "100%", height: "100%" }}>
                    <div id="totalResults">
                        <p>{resultList.length} RESULTS</p>
                    </div>
                    {resultList.map(movie => (
                        <div className="resultListItemContainer" key={movie.imdbID}>
                            <button className="resultListItem" name="selectedMovieID" value={movie.imdbID} active={active} onClick={() => getMovieID(movie.imdbID)}>
                                <Row>
                                    <Col className="col-md-3">
                                        <img className="resultListMoviePic" src={movie.Poster} alt="movie poster" />
                                    </Col>
                                    <Col className="col-md-9 resultMovieInfo">
                                        <p id="resultTitle">{movie.Title}</p>
                                        <p id="resultYear">{movie.Year}</p>
                                    </Col>
                                </Row>
                            </button>
                        </div>
                    ))
                    }
                </Scrollbars>
            </div >
        )
    }
}

export default ResultList;