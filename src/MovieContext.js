import React, { useState, createContext } from 'react';

// creating the context for the data available in global state
export const MovieContext = createContext();

// data available in global state
export const MovieProvider = (props) => {
    // setting up global state
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState({
        title: "null", yearRange: [1900, 2021], yearRangeStart: 1900, yearRangeEnd: 2021, type: "Any"
    });

    return (
        <MovieContext.Provider value={[movies, setMovies, search, setSearch]}>
            {props.children}
        </MovieContext.Provider>
    )
}