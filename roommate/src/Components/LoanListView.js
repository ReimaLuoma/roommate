
import React from "react";
import { useRecoilValue } from "recoil";
import { moviesInfo } from '../Atoms/movieData';
import LoanStatusAction from "./LoanStatusAction";
import PosterImg from './PosterImg';

const LoanListView = ({ title, movieID, admin, availability, _id }) => {

    const movies = useRecoilValue(moviesInfo);
    const movie = movies.find(movie => movie.movieID === movieID);
    const posterpath = movie.posterpath;

    if(admin) {
        return (
            <div className="row mt-3 align-items-center">
                <div className="col-2">
                    {
                        posterpath !== null &&
                        <PosterImg size={500} posterpath={posterpath} />
                    }
                </div>
    
                <div className="col-6 text-center">
                    
                </div>
    
                <LoanStatusAction status={availability} admin={admin} movieID={movieID} _id={_id}/>
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

                <LoanStatusAction status={availability} movieID={movieID} _id={_id}/>
            </div>
        )
    }
    
}

export default LoanListView;