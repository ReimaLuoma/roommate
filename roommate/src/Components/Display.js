import React, { useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import env from 'react-dotenv';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { moviesInfo, moviesDisplay } from '../Atoms/movieData';
import { languageAndArea } from '../Atoms/LanguageSetting';

const Display = () => {

    const setMovies = useSetRecoilState(moviesInfo);
    const [moviesToDisplay, setMoviesToDisplay] = useRecoilState(moviesDisplay);
    const language = useRecoilValue(languageAndArea);

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=' + env.REACT_APP_TMDB_API_KEY + '&language='+ language +'&page=1').then(response => {
            setMovies(response.data.results);
            setMoviesToDisplay(response.data.results);
        }).catch(err => {
            console.log(err);
        })
    }, [language]);

    return (
        <section>
            <div className="row justify-content-center">
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