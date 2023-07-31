import React from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import { useState, useEffect } from "react";
import Moviecard from "./Moviecard";
// as we want to use get the data from the api we need to use useEffect
const API_URL='http://www.omdbapi.com?apikey=9b66f15c';

// 9b66f15c

const movie1={
    "Title": "Batman Begins",
    "Year": "2005",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}


const App = () => {
    const[movies, setMovies] = useState([]);
    const[searchTerm, setSearchTerm] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
let Poster = movie1.Poster;
useEffect(() => {
    searchMovies('batman');
}, []);
    return (
<div className="app">
    <h1>SILVER CITY</h1>
        <div className="search">
            <input 
                placeholder="Search for a Movie"
                value ={searchTerm}
                onChange={(e) =>setSearchTerm(e.target.value)}
            />
                <img 
                    src={SearchIcon}
                    alt="Search Icon"
                    onClick={() => searchMovies(searchTerm)}
                />
        </div>
        {
            movies.length > 0 ?  (
                 <div className="container">
                  {movies.map((movie)=> (
                   <Moviecard movie={movie} />
                   ))}                
                 </div>
            ) : (
                <div className="container">
                    <h2>Movie not found!</h2>
                </div>
            )}
        </div>
    );
    };
    export default App;