import React, { useEffect } from 'react';
import axios from 'axios';
import env from 'react-dotenv';

const poster_URL = (posterpath) => {
    return 'https://image.tmdb.org/t/p/w500' + posterpath;
};

const GetRuntimeByMovieId = (id) => {
    axios.get('https://api.themoviedb.org/3/movie/'+id+'?api_key=' + env.REACT_APP_TMDB_API_KEY + '&language=en-US').then(response => {
        console.log(response.data.runtime, typeof response.data.runtime);
        return response.data.runtime;
    }).catch(err => {
        console.log(err);
    })
};

const MovieCard = ({title, poster_path, id}) => {

    return (
        <div className='card box-shadow mb-5' style={{width: "12rem", height: "25rem"}}>
            <img src={poster_URL(poster_path)} className='card-img-top img-fluid' alt='...'></img>
            <div className='card-body'>
                <h5 className='card-title'><b>{title}</b></h5>
                <p className='card-title'>{GetRuntimeByMovieId(id)} min</p>
            </div>
        </div>
    );
}

export default MovieCard;