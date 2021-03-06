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
                                <p><span id="movieRating">{movieInfo.Rated}</span> {movieInfo.Year} &#8231; {movieInfo.Genre} &#8231; {movieInfo.Runtime}</p>
                                <p>{movieInfo.Actors}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col id="plotContainer">
                        <div className="plotBorder"></div>
                        <p id="plot">{movieInfo.Plot}</p>
                        <div className="plotBorder"></div>
                    </Col>
                </Row>

                <Row id="ratingsRow">
                    {ratings.map(rating => (
                        <Col key={rating.Source}>
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
            <div className="infobox"></div>
        )
    }
}

export default InfoBox;