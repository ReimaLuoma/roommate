
import React from "react";
import { useRecoilValue } from "recoil";
import { moviesInfo } from '../Atoms/movieData';
import LoanStatusAction from "./LoanStatusAction";
import PosterImg from './PosterImg';

const LoanListView = ({ loanInstanceData, userData, admin }) => {

    const { title, movieID, availability, _id } = {...loanInstanceData};
    const { given_name, family_name, phone_number, email, userID} = {...userData[0]};

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
                    {given_name} {family_name}<br />
                    {email}<br />
                    {phone_number}
                </div>
    
                <LoanStatusAction status={availability} admin={admin} movieID={movieID} _id={_id} userID={userID}/>
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