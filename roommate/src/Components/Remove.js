import React, { useEffect, useState, useRef } from "react";
import Button from "@mui/material/Button";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useRecoilState } from "recoil";
import { movieDataUpdate, moviesInfo } from "../Atoms/movieData";
import Box from "@mui/material/Box";
import Modal from '@mui/material/Modal';
import Search from './Search';
import MovieCardListView from "./MovieCardListView";
import CloseIcon from '@mui/icons-material/Close';
import style from '../Styles/modalStyle';

const Remove = () => {

    const [movieUpdate, setMovieUpdate] = useRecoilState(movieDataUpdate);
    const [movies, setMovies] = useRecoilState(moviesInfo);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setMovieUpdate(!movieUpdate);
    };

    const [searchValue, setSearchValue] = useState("");
    const [foundMovies, setFoundMovies] = useState([]);
    const isInitialMount = useRef(true);

    const dataFromSearch = (data) => {
        setSearchValue(data);
    };

    const filterToDisplay = () => {
        let list = [...movies];

        if(searchValue.length !== 0){

            let itemsOfMatch = [];

            itemsOfMatch.push(list.filter(movie => movie.title.toLowerCase().includes(searchValue.toLowerCase())));

            let newlist = itemsOfMatch.flat(1);
            list = [...new Set(newlist)];

            console.log('list', list);
        }
    
        setFoundMovies(list);
    };

    useEffect(() => {
        if(isInitialMount.current){
            isInitialMount.current = false;
        }else{
            filterToDisplay();
        }
    }, [searchValue]);

    return (
        <>
        <Button variant='text' sx={{color: 'white', mr:3}} onClick={handleOpen}>
            <RemoveCircleIcon sx={{mr:1}}/>Remove movie
        </Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='add movie'
            aria-describedby='add movie by giving movie title and choosing from returned options'
        >
            <Box sx={style}>
                <div className="d-flex justify-content-end">
                    <Button sx={{color: 'white'}} onClick={handleClose}><CloseIcon /></Button>
                </div>
                <br />
                <br />
                <br />
                <Search dataFromSearch={dataFromSearch} />
                <br />
                {
                    foundMovies.map((movie, index) => {
                        return <MovieCardListView key={index} {...movie} filterOn={true}/>
                    })
                }

            </Box>
        </Modal>
        </>
    )
}

export default Remove;