import { Button, Card } from "@mui/material";
import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { moviesInfo, movieDataUpdate } from "../Atoms/movieData";

const poster_URL = (posterpath) => {
    return 'https://image.tmdb.org/t/p/w500' + posterpath;
};

const MovieCardListView = ({ id, posterpath, title, releaseDate, filterOn = false }) => {

    const movies = useRecoilValue(moviesInfo);
    const [movieUpdate, setMovieUpdate] = useRecoilState(movieDataUpdate);

    const addMovie = () => {
        fetch(process.env.REACT_APP_SERVER_API + '/movies/addMovie/' + id, {method: 'POST'})
            .then((response) => {
                if(!response.ok){
                    console.log(response.status, 'something went wrong');
                }
                console.log(response.status);
            });
        setMovieUpdate(!movieUpdate);
    }

    const removeMovie = () => {
        fetch(process.env.REACT_APP_SERVER_API + '/movies/removeMovie/' + id, {method: 'POST'})
            .then((response) => {
                if(!response.ok){
                    console.log(response.status, 'something went wrong');
                }
                console.log(response.status);
            });
        setMovieUpdate(!movieUpdate);
    }
    
    return (
        <div className="row mt-2">
            <Card sx={{display: 'flex', borderTop: 'solid 1px #3c3c3c', borderLeft: 'solid 1px #3c3c3c', bgcolor: '#2c2c2c', color: 'white', boxShadow: '3px 3px #1c1c1c', paddingLeft:0}}>
                <div className="col-2">
                    <img src={poster_URL(posterpath)} className='card-img-top img-fluid' alt='...'></img>
                </div>
                
                <div className="col-5 ms-5 d-flex align-items-center">
                    <h5 className="pe-2">{title}</h5>
                    {
                        releaseDate !== '' &&
                        <h5>({releaseDate.slice(0,4)})</h5>
                    }
                </div>

                <div className="col ms-5 d-flex justify-content-end align-items-center">
                    {
                        filterOn
                        ?
                            movies.filter(movie => movie.movieID === id) &&
                            <Button variant='contained' id={id} onClick={removeMovie} sx={{color: 'white', bgcolor: '#ff0000', mr:3, borderRadius: 2, boxShadow: '3px 3px #1c1c1c', ':hover': {bgcolor: '#990000', color: '#fff', boxShadow: '3px 3px #1c1c1c'} }}>Remove</Button>
                        :
                            movies.some(movie => movie.movieID === id)
                            ?<Button variant='contained' id={id} onClick={removeMovie} sx={{color: 'white', bgcolor: '#ff0000', mr:3, borderRadius: 2, boxShadow: '3px 3px #1c1c1c', ':hover': {bgcolor: '#990000', color: '#fff', boxShadow: '3px 3px #1c1c1c'} }}>Remove</Button>
                            :<Button variant='contained' id={id} onClick={addMovie} sx={{color: 'black', bgcolor: '#e2c34b', mr:3, borderRadius: 2, boxShadow: '3px 3px #1c1c1c', ':hover': {bgcolor: '#ffdc54', color: '#2c2c2c', boxShadow: '3px 3px #1c1c1c'} }}>Add</Button>
                    }
                    
                </div>
            </Card>
        </div>
    )
};

export default MovieCardListView;