import React, { useState, createContext } from 'react';

// creating the context for the data available in global state
export const MovieContext = createContext();

// data available in global state
export const MovieProvider = (props) => {
    // setting up global state
    const [movies, setMovies] = useState([
        { Poster: "", Title: "", Type: "", Year: "", imdbID: "" }
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}