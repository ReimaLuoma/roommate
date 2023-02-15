import React, {useEffect, useState} from 'react';
import { Modal, Box, Button } from '@mui/material';
import Search from "./Search";
import MovieCardListView from "./MovieCardListView";
import CloseIcon from "@mui/icons-material/Close";
import { useRecoilState, useRecoilValue } from "recoil";
import { movieDataUpdate, moviesInfo } from "../Atoms/movieData";

const RemoveModal = ({handleStatus}) => {

    const [movieUpdate, setMovieUpdate] = useRecoilState(movieDataUpdate);
    const movies = useRecoilValue(moviesInfo);

    const [open, setOpen] = useState(true);
    const handleClose = () => {
        handleStatus(false);
        setOpen(false);
        setFoundMovies([]);
        setSearchValue("");
        setMovieUpdate(!movieUpdate);
    };

    const [searchValue, setSearchValue] = useState("");
    const [foundMovies, setFoundMovies] = useState([]);

    const dataFromSearch = (data) => {
        setSearchValue(data);
    };

    useEffect(() => {
        const filterToDisplay = () => {
            let list = [...movies];

            if (searchValue.length !== 0) {
            let itemsOfMatch = [];

            itemsOfMatch.push(
                list.filter((movie) =>
                movie.title.toLowerCase().includes(searchValue.toLowerCase())
                )
            );

            let newlist = itemsOfMatch.flat(1);
            list = [...new Set(newlist)];
            }

            setFoundMovies(list);
        };

        filterToDisplay();
    }, [searchValue, movies]);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="add movie"
            aria-describedby="add movie by giving movie title and choosing from returned options"
        >
            <Box className="modalStyle no-scroll">
            <div className="d-flex justify-content-end">
                <Button sx={{ color: "white" }} onClick={handleClose}>
                <CloseIcon />
                </Button>
            </div>

            <br />
            <br />
            <br />

            <Search dataFromSearch={dataFromSearch} />
            <br />
                {foundMovies.map((movie, index) => {
                    return (
                        <MovieCardListView
                            key={index}
                            {...movie}
                            filterOn={true}
                            id={movie.movieID}
                        />
                    );
                })}
            </Box>
        </Modal>
    )
};

export default RemoveModal;