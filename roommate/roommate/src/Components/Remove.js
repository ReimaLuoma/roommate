import React from "react";
import Button from "@mui/material/Button";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const Remove = () => {
    return (
        <Button variant='text' sx={{color: 'white', mr:3}}>
            <RemoveCircleIcon sx={{mr:1}}/>Remove movie
        </Button>
    )
}

export default Remove;