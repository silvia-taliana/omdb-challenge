// import React from "react";
import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../MovieContext";
import Axios from "axios";

function InfoBox() {
    // using global state
    const [movies, setMovies] = useContext(MovieContext);

    // setting local state to get info for selected movie
    const [movieInfo, setMovieInfo] = useState({});

    useEffect(() => {
        // getting id of selected movie
        let selectedMovie = movies.selectedMovieID;
        // api call searching for movie by id
        Axios.get(`http://www.omdbapi.com/?apikey=805cd57f&i=${selectedMovie}`).then(
            (res) => {
                setMovieInfo(res.data);
            })
            .catch(err => console.log(err));
    }, [movies]);

    return (
        <div className="infobox">
            <div>Info Box</div>
            <h1>{movieInfo.Title}</h1>
            <p>{movieInfo.Plot}</p>
        </div>
    )
}

export default InfoBox;