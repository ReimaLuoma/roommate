import React from "react";
import Button from "@mui/material/Button";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Add = () => {
    return (
        <Button variant='text' sx={{color: 'white', mr:3}}>
            <AddCircleIcon sx={{mr:1}}/>Add movie
        </Button>
    )
}

export default Add;