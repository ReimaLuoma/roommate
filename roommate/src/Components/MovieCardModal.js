import React, { useState } from "react";
import { Modal, Box, Chip, Button } from "@mui/material";
import CastCard from "./CastCard";
import PosterImg from "./PosterImg";
import ImdbButton from "./ImdbButton";

const MovieCardModal = ({ handleStatus, movie, userInfo, loggedIn }) => {

    const {movieID, posterpath, releaseDate, runtime, title, genres, description, cast, imdbID} = {...movie};

    const [open, setOpen] = useState(true);
    const handleClose = () => {
        handleStatus(false);
        setOpen(false);
    };

    const handleLoan = () => {
        fetch(process.env.REACT_APP_SERVER_API + 'loanInstance/createLoan/'+ userInfo.sub +'/'+ userInfo.given_name +'/'+ userInfo.family_name +'/'+ userInfo.phone_number +'/'+ userInfo.email +'/'+ movieID +'/'+ title, {method: 'POST'})
        .then((response) => response.json())
        .then((data) => {
            // does something happen here?
        });
    };

    return (
        <Modal
        data-testid='modal'
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
            <h1>{title} ({releaseDate.slice(0, 4)})</h1>
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
                  data-testid='borrow'
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
                    Ask to borrow
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
    )
};

export default MovieCardModal;