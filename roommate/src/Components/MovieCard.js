import React, { useEffect } from 'react';
import PopularMovie from '../TMDB API/PopularMovie';

const MovieCard = () => {

    useEffect (() => {
        <PopularMovie />
    }, [])

    return (
        <div className='card box-shadow mb-5' style={{width: "12rem"}}>
            <img src='https://via.placeholder.com/200/e2c34b' className='card-img-top img-fluid' alt='...'></img>
            <div className='card-body'>
                <h5 className='card-title'>Movie title</h5>
                <p className='card-title'>hh.mm</p>
            </div>
        </div>
    );
}

export default MovieCard;