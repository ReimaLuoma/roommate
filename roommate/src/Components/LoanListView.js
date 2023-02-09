import { Button } from "@mui/material";
import React from "react";
import { useRecoilValue } from "recoil";
import { moviesInfo } from '../Atoms/movieData';
import PosterImg from './PosterImg';

const LoanListView = ({ title, movieID, admin }) => {

    const movies = useRecoilValue(moviesInfo);
    const movie = movies.find(movie => movie.movieID === movieID);
    const posterpath = movie.posterpath;

    const handleReturn = () => {
        console.log('handling return');
    };

    const handleReturnRequest = () => {
        console.log('handling return request');
    };

    if(admin) {
        return (
            <div className="row mt-3 align-items-center">
                <div className="col-2">
                    {
                        posterpath !== null &&
                        <PosterImg size={500} posterpath={posterpath} />
                    }
                </div>
    
                <div className="col-6">
                    
                </div>
    
                <Button
                    className="col-3"
                    variant="contained"
                    sx={{
                        color: "black",
                        bgcolor: "#e2c34b",
                        mr: 3,
                        borderRadius: 2,
                        boxShadow: "3px 3px #1c1c1c",
                        ":hover": {
                        bgcolor: "#ffdc54",
                        color: "#2c2c2c",
                        boxShadow: "3px 3px #1c1c1c",
                        },
                    }}
                    onClick={handleReturnRequest}
                >
                  Request return
                </Button>
            </div>
        )
    }

    if(!admin) {
        return (
            <div className="row mt-3 align-items-center">
                <div className="col-2">
                    {
                        posterpath !== null &&
                        <PosterImg size={500} posterpath={posterpath} />
                    }
                </div>
    
                <div className="col-6 text-center">
                    {title}
                </div>
    
                <Button
                    className="col-3"
                    variant="contained"
                    sx={{
                        color: "black",
                        bgcolor: "#e2c34b",
                        mr: 3,
                        borderRadius: 2,
                        boxShadow: "3px 3px #1c1c1c",
                        ":hover": {
                        bgcolor: "#ffdc54",
                        color: "#2c2c2c",
                        boxShadow: "3px 3px #1c1c1c",
                        },
                    }}
                    onClick={handleReturn}
                >
                  Return
                </Button>
            </div>
        )
    }
    
}

export default LoanListView;