import React, { useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import env from 'react-dotenv';
import { useRecoilState } from 'recoil';
import { moviesInfo, moviesDisplay } from '../Atoms/movieData';
import { languageAndArea } from '../Atoms/LanguageSetting';

const Display = () => {

    const [movies, setMovies] = useRecoilState(moviesInfo);
    const [moviesToDisplay, setMoviesToDisplay] = useRecoilState(moviesDisplay);
    const [language, SetLanguage] = useRecoilState(languageAndArea);

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=' + env.REACT_APP_TMDB_API_KEY + '&language='+ language +'&page=1').then(response => {
            setMovies(response.data.results);
            setMoviesToDisplay(response.data.results);
        }).catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <section>
            <div className="row justify-content-around mt-3">
                {
                    moviesToDisplay.map((movie, index) => {
                        return <MovieCard key={index} {...movie} />
                    })
                }
            </div>
      </section>
    )
}

export default Display;