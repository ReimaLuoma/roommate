import React from "react";
import MovieCard from "./MovieCard";

const Display = () => {
    return (
        <div className="container">
        <div className="row">
          <div className="card-columns col text-end">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </div>
      </div>
    )
}

export default Display;