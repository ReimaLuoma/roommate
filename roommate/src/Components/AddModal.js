import { Modal, Box, Button } from '@mui/material';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { movieDataUpdate } from "../Atoms/movieData";
import CloseIcon from "@mui/icons-material/Close";
import Search from './Search';
import MovieCardListView from "./MovieCardListView";

const AddModal = ({handleStatus}) => {

    const [movieUpdate, setMovieUpdate] = useRecoilState(movieDataUpdate);
    const [open, setOpen] = useState(true);
    const handleClose = () => {
        handleStatus(false);
        setOpen(false);
        setFoundMovies([]);
        setMovieUpdate(!movieUpdate);
    };

    const [searchValue, setSearchValue] = useState("");
    const isInitialMount = useRef(true);
    const [foundMovies, setFoundMovies] = useState([]);
  
    const fetchSearchedMovies = useCallback (() => {
      if (isInitialMount.current) {
        isInitialMount.current = false;
      } else {
        fetch(
          process.env.REACT_APP_SERVER_API + "/tmdb/searchMovie/" + searchValue
        )
          .then((response) => response.json())
          .then((data) => {
            setFoundMovies(data.results);
          });
      }
    },[searchValue]);
  
    useEffect(() => {
      fetchSearchedMovies();
    }, [fetchSearchedMovies]);
  
    const dataFromSearch = (data) => {
      setSearchValue(data);
    };

    return (
        <Modal
          data-testid='modal'
          open={open}
          onClose={handleClose}
          aria-labelledby="add movie"
          aria-describedby="add movie by giving movie title and choosing from returned options"
        >
            <Box data-testid='box' className="modalStyle no-scroll">
              <div className="d-flex justify-content-end">
                  <Button data-testid='close-button' sx={{ color: "white" }} onClick={handleClose}>
                  <CloseIcon />
                  </Button>
              </div>

              <br />
              <br />
              <br />

              <Search dataFromSearch={dataFromSearch} />
              <br />
              {foundMovies !== undefined &&
                  foundMovies.map((movie, index) => {
                  return (
                      <MovieCardListView
                      key={index}
                      {...movie}
                      posterpath={movie.poster_path}
                      releaseDate={movie.release_date}
                      />
                  );
                  })}
            </Box>
        </Modal>
    )
}

export default AddModal;