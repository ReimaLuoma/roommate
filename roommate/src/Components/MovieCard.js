import React from 'react';

const MovieCard = () => {
    return (
        <div className='card' style={{width: "12rem"}}>
            <img src='...' className='card-img-top' alt='...'></img>
            <div className='card-body'>
                <h5 className='card-title'>Movie title</h5>
                <p className='card-title'>hh.mm</p>
            </div>
        </div>
    );
}

export default MovieCard;