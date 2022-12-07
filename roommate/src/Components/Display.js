import React from "react";
import MovieCard from "./MovieCard";

const Display = () => {
    return (
        <section>
            <div className="row mt-3">
                <div className="col text-end card-columns">
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
      </section>
    )
}

export default Display;