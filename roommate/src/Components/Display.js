import React, { useEffect, useCallback } from "react";
import MovieCard from "./MovieCard";
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { moviesInfo, moviesDisplay, movieDataUpdate } from '../Atoms/movieData';
import { languageAndArea } from '../Atoms/LanguageSetting';

const Display = () => {

    const setMovies = useSetRecoilState(moviesInfo);
    const updateMovies = useRecoilValue(movieDataUpdate);
    const [moviesToDisplay, setMoviesToDisplay] = useRecoilState(moviesDisplay);
    const language = useRecoilValue(languageAndArea);

    const fetchMovieDataFromDatabase = useCallback (() => {
        fetch(process.env.REACT_APP_SERVER_API + '/movies/find/all')
        .then((response) => response.json())
        .then((data) => {
            data.sort(sortByTitle)
            setMovies(data);
            setMoviesToDisplay(data);
        });
    },[setMovies, setMoviesToDisplay]);

    useEffect(() => {
        fetchMovieDataFromDatabase();
    }, [language, updateMovies, fetchMovieDataFromDatabase]);

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
                            return <MovieCard key={index} movie={movie}/>
                        })
                    }
                </div>
          </section>
        )
    }else{
        return <section className="loading">
            <div className="books">

                <div className="book shadow" style={{animationDelay: '-20s', width: '2rem', background: 'chocolate', margin: '.5rem', height: '17rem'}}>
                    <div className="bookTop">
                        <div className="bgNeg"></div>
                    </div>
                </div>

                <div className="book shadow" style={{animationDelay: '-15s', width: '4rem', background: 'hotpink', margin: '.6rem', height: '15rem'}}>
                    <div className="bookTop">
                        <div className="bgNeg"></div>
                    </div>
                </div>

                <div className="book shadow" style={{animationDelay: '-10s', width: '3rem', background: 'coral', margin: '.4rem', height: '20rem'}}>
                    <div className="bookTop">
                        <div className="bgNeg"></div>
                    </div>
                </div>

                <div className="book shadow" style={{animationDelay: '-5s', width: '3rem', background: 'mediumslateblue', margin: '.3rem', height: '18rem'}}>
                    <div className="bookTop">
                        <div className="bgNeg"></div>
                    </div>
                    <p style={{marginTop: '5.5em'}}>loading</p>
                </div>

            </div>
        </section>
    }
}

export default Display;