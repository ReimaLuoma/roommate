import React, { useState } from "react";
import PosterImg from "./PosterImg";
import MovieCardModal from "./MovieCardModal";

const MovieCard = ({ movie }) => {

  const { posterpath, releaseDate, runtime } = {...movie};
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleStatus = (status) => {
    setOpen(status)
  };

  return (
    <>
      <div className="col-lg-2 col-md-3 col-sm-6 movieCard">
        <div
          data-testid='moviecard'
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

      {
        open && <MovieCardModal movie={movie} handleStatus={handleStatus} />
      }
      
    </>
  );
};

export default MovieCard;
