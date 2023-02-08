import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { moviesInfo, moviesDisplay, movieDataUpdate } from '../Atoms/movieData';
import { languageAndArea } from '../Atoms/LanguageSetting';

const Display = () => {

    const setMovies = useSetRecoilState(moviesInfo);
    const updateMovies = useRecoilValue(movieDataUpdate);
    const [moviesToDisplay, setMoviesToDisplay] = useRecoilState(moviesDisplay);
    const language = useRecoilValue(languageAndArea);

    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER_API + '/movies/find/all')
            .then((response) => response.json())
            .then((data) => {
                data.sort(sortByTitle)
                setMovies(data);
                setMoviesToDisplay(data);
            });
    }, [language, updateMovies]);

    const sortByTitle = (a, b) => {

        if ( a.title < b.title ){
            return -1;
        }
        if ( a.title > b.title ){
            return 1;
        }
        return 0;

    }

    if(moviesToDisplay.length !== 0){
        return (
            <section>
                <div className="row justify-content-start">
                    {
                        moviesToDisplay.map((movie, index) => {
                            return <MovieCard key={index} {...movie}/>
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