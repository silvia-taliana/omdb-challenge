import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            name: 'harry potter',
            year: '2001',
            category: 'fantasy'
        },
        {
            name: 'game of thrones',
            year: '2010',
            category: 'fantasy'
        },
        {
            name: 'inception',
            year: '2004',
            category: 'sci-fi'
        }
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}