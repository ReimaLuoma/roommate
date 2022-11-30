import React from 'react';

const MovieCard = () => {
    return (
        <div className='card shadow-sm' style={{width: "12rem"}}>
            <img src='https://via.placeholder.com/150/e2c34b' className='card-img-top img-fluid' alt='...'></img>
            <div className='card-body'>
                <h5 className='card-title'>Movie title</h5>
                <p className='card-title'>hh.mm</p>
            </div>
        </div>
    );
}

export default MovieCard;