import React, { useContext } from "react";
import { MovieContext } from "../MovieContext";

function ResultList() {
    const [movies, setMovies] = useContext(MovieContext);

    return (
        <div className="resultList">
            <div>Result List</div>
            {movies.map(movie => (
                <p>name={movie.name} year={movie.year} category={movie.category}</p>
            ))}
        </div>
    )
}

export default ResultList;