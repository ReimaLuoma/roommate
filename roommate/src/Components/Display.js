import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { moviesInfo, moviesDisplay } from '../Atoms/movieData';
import { languageAndArea } from '../Atoms/LanguageSetting';

const Display = () => {

    const setMovies = useSetRecoilState(moviesInfo);
    const [moviesToDisplay, setMoviesToDisplay] = useRecoilState(moviesDisplay);
    const language = useRecoilValue(languageAndArea);

    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER_API + '/tmdb/popular')
            .then((response) => response.json())
            .then((data) => {
                setMovies(data);
                setMoviesToDisplay(data);
            });
    }, [language]);

    if(moviesToDisplay.length !== 0){
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
    }else{
        return <section>
            <h1 style={{color: 'white'}}>wow! such empty place...</h1>
        </section>
    }
}

export default Display;