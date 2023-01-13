import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { moviesInfo, moviesDisplay } from '../Atoms/movieData';
import { languageAndArea } from '../Atoms/LanguageSetting';
import { API } from "aws-amplify";

const Display = () => {

    const setMovies = useSetRecoilState(moviesInfo);
    const [moviesToDisplay, setMoviesToDisplay] = useRecoilState(moviesDisplay);
    const language = useRecoilValue(languageAndArea);

    useEffect(() => {
        const popular = API.get('myapi', '/tmdb/popular');
        setMovies(popular);
        setMoviesToDisplay(popular);
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