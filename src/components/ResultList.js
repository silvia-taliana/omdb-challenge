import React, { useContext, useEffect } from "react";
import { MovieContext } from "../MovieContext";
import Axios from "axios";

function ResultList() {
    // using global state
    const [movies, setMovies] = useContext(MovieContext);

    // api call to get data for results list 
    useEffect(() => {
        let url_string = (window.location.href).toLowerCase();
        let url = new URL(url_string);
        let title = url.searchParams.get("title");

        // rendering search function only if user has entered a title to search
        if (title) {
            // let yearRange = url.searchParams.get("yearrange");
            // let type = url.searchParams.get("type");
            // let yearRangeStart = yearRange[0] + yearRange[1] + yearRange[2] + yearRange[3];
            // let yearRangeEnd = yearRange[5] + yearRange[6] + yearRange[7] + yearRange[8];
            // setSearch(currentSearch => getData(currentSearch));
            Axios.get(`http://www.omdbapi.com/?apikey=805cd57f&t=${title}`).then(
                (res) => {
                    console.log(res.data);
                    setMovies(res.data);
                })
                .catch(err => console.log(err));
        }
    }, [setMovies]);

    return (
        <div className="resultList" >
            <div>Result List</div>
            <p>{movies.Title}</p>
            {/* { movies.map(movie => (
                <p>name={movie.Title}</p>
            ))
            } */}
        </div >
    )
}

export default ResultList;