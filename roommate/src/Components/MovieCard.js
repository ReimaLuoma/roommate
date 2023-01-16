import React, { useEffect, useState } from 'react';

const poster_URL = (posterpath) => {
    return 'https://image.tmdb.org/t/p/w500' + posterpath;
};

const MovieCard = ({ poster_path, id = 0, release_date }) => {

    const [runtime, setRuntime] = useState([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER_API + '/tmdb/movie/'+id, {method: 'GET'})
            .then((response) => response.json())
            .then((data) => {
                setRuntime(data.runtime)
            });
    })

    return (
        <div className='col-lg-2 col-md-3 col-sm-6 card-column'>
            <div className='card box-shadow me-nd-3 mb-md-5 text-end'>
                <img src={poster_URL(poster_path)} className='card-img-top img-fluid' alt='...'></img>
                <div className='card-body'>
                    <p className='card-title'>{runtime} min</p>
                    <p className='card-title'>{release_date.slice(0,4)}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;