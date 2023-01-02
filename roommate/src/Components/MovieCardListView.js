import { Button, Card } from "@mui/material";
import React from "react";

const MovieCardListView = () => {
    
    return (
        <div className="row mt-5">
            <Card sx={{display: 'flex', bgcolor: '#2c2c2c', color: 'white', boxShadow: '3px 3px #1c1c1c', paddingLeft:0}}>
                <div>
                    <img src="https://via.placeholder.com/100"></img>
                </div>
                <div className="ms-5 d-flex justify-content-end align-items-center">
                    <h5>Title</h5>
                </div>
                <div className="col ms-5 d-flex justify-content-end align-items-center">
                    <Button variant='contained' sx={{color: 'black', bgcolor: '#e2c34b', mr:3, borderRadius: 2, ':hover': {bgcolor: '#ffdc54', color: '#3b66ab'} }}>Add</Button>
                </div>
            </Card>
        </div>
    )
};

export default MovieCardListView;