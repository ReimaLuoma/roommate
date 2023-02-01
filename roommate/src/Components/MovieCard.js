import React, { useEffect, useState, useRef } from 'react';
import { Modal, Box, Chip, Accordion } from '@mui/material';
import { style_moviecard } from "../Styles/modalStyle";
import CastCard from './CastCard';

const poster_URL = (posterpath) => {
    return 'https://image.tmdb.org/t/p/w780' + posterpath;
};

const MovieCard = ({ movieID, posterpath, releaseDate, runtime, title, genres, description }) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const isInitialMount = useRef(true);
    const [cast, setCast] = useState([]);

    useEffect(() => {
        if(isInitialMount.current){
            isInitialMount.current = false;
        }else {
            fetch(process.env.REACT_APP_SERVER_API + '/tmdb/cast/' + movieID)
            .then((response) => response.json())
            .then((data) => {
                setCast(data.cast);
            });
        }
    }, [open])

    return (
        <>
        <div className='col-lg-2 col-md-3 col-sm-6 card-column'>
            <div className='card box-shadow me-nd-3 mb-md-5 text-end' onClick={handleOpen}>
                <img src={poster_URL(posterpath)} className='card-img-top img-fluid' alt='...'></img>
                <div className='card-body'>
                    <p className='card-title'>{runtime} min</p>
                    <p className='card-title'>{releaseDate.slice(0,4)}</p>
                </div>
            </div>
        </div>

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style_moviecard} className='movieDetails no-scroll'>
                <div className='image-container'>
                    <img src={poster_URL(posterpath)} className='img-fluid' alt='...'></img>
                </div>
                
                <br />
                <div className='row ms-4'>
                    <h3>{title}</h3>
                </div>

                <br />
                <div className='row ms-4'>
                    <div>
                        {
                            genres.map((genre, index) => {
                                return <Chip key={index} label={genre.name} sx={{ bgcolor: '#e2c34b', boxShadow: '2px 2px 3px black', marginRight: 1 }}/>
                            })
                        }
                    </div>
                </div>

                <br />
                <div className='row ms-4'>
                    <h5>Description</h5>
                    <p>{description}</p>
                    <h5>Runtime:</h5>
                    <p>{runtime} min</p>
                </div>

                <div className='row ms-4'>
                    <div className='col'>
                        {
                            cast !== undefined &&
                            cast.map((actor, index) => {
                                <CastCard key={index} {...actor} />
                            })
                        }
                    </div>
                    
                </div>
                
            
            </Box>
        </Modal>
      </>
    );
}

export default MovieCard;