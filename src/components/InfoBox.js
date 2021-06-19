// import React from "react";
import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../MovieContext";
import Axios from "axios";
import { Row, Col } from "react-bootstrap";

function InfoBox() {
    // using global state
    const [movies, setMovies] = useContext(MovieContext);

    // setting local state to get info for selected movie
    const [movieInfo, setMovieInfo] = useState({});

    // setting local state for ratings 
    // not all movies have ratings for all 3 websites
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        // getting id of selected movie
        let selectedMovie = movies.selectedMovieID;
        // api call searching for movie by id if movie has been selected
        if (!selectedMovie) {
            return;
        }
        else {
            Axios.get(`http://www.omdbapi.com/?apikey=805cd57f&i=${selectedMovie}`).then(
                (res) => {
                    setMovieInfo(res.data);
                    setRatings(res.data.Ratings);
                })
                .catch(err => console.log(err));
        }
    }, [movies]);

    // returning results if movie has been selected 
    if (movieInfo.Title) {
        return (
            <div className="infobox">
                <Row>
                    <Col className="col-md-4" id="infoBoxPosterContainer">
                        <img className="infoBoxMoviePic" src={movieInfo.Poster} alt="movie poster" />
                    </Col>
                    <Col className="col-md-8">
                        <div id="infoBoxTitleContainer">
                            <div id="titleInfo">
                                <h1>{movieInfo.Title}</h1>
                                <br />
                                <p>{movieInfo.Rated} {movieInfo.Year} {movieInfo.Genre} {movieInfo.Runtime}</p>
                                <p>{movieInfo.Actors}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col id="plotContainer">
                        <p>{movieInfo.Plot}</p>
                    </Col>
                </Row>

                <Row>
                    {ratings.map(rating => (
                        <Col>
                            <Row>
                                <Col className="ratingsContainer">
                                    <p>{rating.Source}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="ratingsContainer">
                                    <p>{rating.Value}</p>
                                </Col>
                            </Row>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
    else {
        return (
            <div className="infobox"><p>select a movie</p></div>
        )
    }
}

export default InfoBox;