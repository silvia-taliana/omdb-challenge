import React, { useContext, useEffect } from "react";
// import { MovieContext } from "../MovieContext";
import Axios from "axios";

function ResultList() {
    // using global state
    // const [movies, setMovies] = useContext(MovieContext);
    // const [search, setSearch] = useContext(MovieContext);

    // api call to get data for results list 
    // useEffect(() => {
    //     Axios.get("http://www.omdbapi.com/?apikey=805cd57f&t=red").then(
    //         (res) => {
    //             console.log(res.data);
    //             setMovies(res.data);
    //         })
    //         .catch(err => console.log(err));
    // }, [setMovies]);

    return (
        <div className="resultList" >
            <div>Result List</div>
            {/* <p>{movies.Title}</p> */}
            {/* { movies.map(movie => (
                <p>name={movie.Title}</p>
            ))
            } */}
        </div >
    )
}

export default ResultList;