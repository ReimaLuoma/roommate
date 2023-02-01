import React from "react";
import { Card } from '@mui/material';

const poster_URL = (posterpath) => {
    return 'https://image.tmdb.org/t/p/w500' + posterpath;
};

const CastCard = ({ name, character, profile_path }) => {

    return (
        <Card sx={{display: 'flex', borderTop: 'solid 1px #3c3c3c', borderLeft: 'solid 1px #3c3c3c', bgcolor: '#2c2c2c', color: 'white', boxShadow: '3px 3px #1c1c1c', paddingLeft:0}}>
            <div className="col-1">
                    <img src={poster_URL(profile_path)} className='card-img-top img-fluid' alt='...'></img>
                </div>
        </Card>
    )
};

export default CastCard;