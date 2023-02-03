import React, { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Search from "./Search";
import MovieCardListView from "./MovieCardListView";
import CloseIcon from "@mui/icons-material/Close";
import style from "../Styles/modalStyle";
import { movieDataUpdate } from "../Atoms/movieData";
import { useRecoilState } from "recoil";

const Add = () => {
  const [movieUpdate, setMovieUpdate] = useRecoilState(movieDataUpdate);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFoundMovies([]);
    setMovieUpdate(!movieUpdate);
  };

  const [searchValue, setSearchValue] = useState("");
  const isInitialMount = useRef(true);
  const [foundMovies, setFoundMovies] = useState([]);

  useEffect(() => {
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
  }, [searchValue]);

  const dataFromSearch = (data) => {
    setSearchValue(data);
  };

  return (
    <>
      <Button
        variant="text"
        sx={{ color: "white", mr: 3, fontSize: "1.6rem" }}
        onClick={handleOpen}
      >
        <AddCircleIcon sx={{ mr: 1, fontSize: "1.6rem" }} />
        Add movie
      </Button>
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
    </>
  );
};

export default Add;
