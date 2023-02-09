import React, { useState } from "react";
import { Modal, Box, Chip, Button } from "@mui/material";
import CastCard from "./CastCard";
import { loginState, userData } from '../Atoms/login';
import { useRecoilValue } from "recoil";
import PosterImg from "./PosterImg";
import ImdbButton from "./ImdbButton";

const MovieCard = ({
  movieID,
  posterpath,
  releaseDate,
  runtime,
  title,
  genres,
  description,
  cast,
  imdbID
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const loggedIn = useRecoilValue(loginState);
  const userInfo = useRecoilValue(userData);

  const handleLoan = () => {
    fetch(process.env.REACT_APP_SERVER_API + 'loanInstance/createLoan/'+ userInfo.sub +'/'+ movieID +'/'+ title, {method: 'POST'})
      .then((response) => response.json())
      .then((data) => {
        // does something happen here?
    });
  };

  return (
    <>
      <div className="col-lg-2 col-md-3 col-sm-6 movieCard">
        <div
          className="card box-shadow me-nd-3 mb-md-5 text-end"
          onClick={handleOpen}
        >
          <PosterImg size={500} posterpath={posterpath} />
          <div className="card-body">
            <p className="card-title">{runtime} min</p>
            <p className="card-title">{releaseDate.slice(0, 4)}</p>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="movieDetails no-scroll">
          <div className="image-container">
          <PosterImg size={1280} posterpath={posterpath} />
          </div>

          <br />
          <div className="row ms-4 me-4">
            <h1>{title}</h1>
          </div>

          <br />
          <div className="row ms-4 me-4">
            <div className="col-8">
              {genres.map((genre, index) => {
                return (
                  <Chip
                    key={index}
                    label={genre.name}
                    sx={{
                      bgcolor: "#e2c34b",
                      boxShadow: "2px 2px 3px black",
                      marginRight: 1,
                      marginBottom: 1,
                      fontSize: "1.2rem",
                    }}
                  />
                );
              })}
            </div>
            <div className="col-4 d-flex flex-column align-self-start justify-content-end">
            {
              loggedIn &&
                  <Button
                    variant="contained"
                    sx={{
                      color: "black",
                      bgcolor: "#3a92c2",
                      mr: 3,
                      mb: 1,
                      borderRadius: 2,
                      boxShadow: "3px 3px #1c1c1c",
                      ":hover": {
                        bgcolor: "#3b66ab",
                        color: "white",
                        boxShadow: "3px 3px #1c1c1c",
                      },
                    }}
                    onClick={handleLoan}
                  >
                    Request a borrowing
                  </Button>
            }
            <ImdbButton imdbID={imdbID} />
            </div>
          </div>

          <br />
          <div className="row ms-4 me-4">
            <h3>Description</h3>
            <p>{description}</p>
            <h3>Runtime:</h3>
            <p>{runtime} min</p>
          </div>

          <div className="row ms-4 me-4 mb-4 justify-content-start-safe">
            <h3>Cast:</h3>
            {cast !== undefined &&
              cast.map((actor, index) => {
                return <CastCard key={index} {...actor} />;
              })}
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default MovieCard;
