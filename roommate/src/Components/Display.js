import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import env from 'react-dotenv';

const Display = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=' + env.REACT_APP_TMDB_API_KEY + '&language=en-US&page=1').then(response => {
            setMovies(response.data.results);
        }).catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <section>
            <div className="row mt-3">
                <div className="col justify-content-evenly text-end card-columns">
                    {
                        movies.map((movie, index) => {
                            return <MovieCard key={index} {...movie} />
                        })
                    }
                </div>
            </div>
      </section>
    )
}

export default Display;