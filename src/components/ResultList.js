import React, { useContext, useEffect } from "react";
import { MovieContext } from "../MovieContext";
import Axios from "axios";

function ResultList() {
    // using global state
    const [movies, setMovies] = useContext(MovieContext);

    // api call to get data for results list 
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
            Axios.get(`http://www.omdbapi.com/?apikey=805cd57f&s=${title}&y=${yearRangeStart}-${yearRangeEnd}&type=${type}`).then(
                (res) => {
                    console.log(res.data.Search);
                    setMovies(res.data.Search);
                })
                .catch(err => console.log(err));
        }
    }, [setMovies]);

    return (
        <div className="resultList" >
            <div>Result List</div>
            { movies.map(movie => (
                <div className="resultListItem" key={movie.imdbID}>
                    <img className="resultListMoviePic" src={movie.Poster} alt="movie poster" /><p>{movie.Title} released {movie.Year}</p>
                </div>
            ))
            }
        </div >
    )
}

export default ResultList;