import { Button, Card } from "@mui/material";
import React from "react";

const poster_URL = (posterpath) => {
    return 'https://image.tmdb.org/t/p/w500' + posterpath;
};

const MovieCardListView = ({ poster_path, title }) => {
    
    return (
        <div className="row mt-2">
            <Card sx={{display: 'flex', bgcolor: '#2c2c2c', color: 'white', boxShadow: '3px 3px #1c1c1c', paddingLeft:0}}>
                <div className="col-2">
                    <img src={poster_URL(poster_path)} className='card-img-top img-fluid' alt='...'></img>
                </div>
                <div className="ms-5 d-flex justify-content-end align-items-center">
                    <h5>{title}</h5>
                </div>
                <div className="col ms-5 d-flex justify-content-end align-items-center">
                    <Button variant='contained' sx={{color: 'black', bgcolor: '#e2c34b', mr:3, borderRadius: 2, boxShadow: '3px 3px #1c1c1c', ':hover': {bgcolor: '#ffdc54', color: '#2c2c2c', boxShadow: '3px 3px #1c1c1c'} }}>Add</Button>
                </div>
            </Card>
        </div>
    )
};

export default MovieCardListView;