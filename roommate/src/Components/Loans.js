import React from "react";
import Button from "@mui/material/Button";
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';

const Loans = () => {
    return (
        <Button variant='text' sx={{color: 'white', mr:3, borderRadius: 2}}>
            <BrowseGalleryIcon sx={{mr:1}}/>Loans
        </Button>
    )
}

export default Loans;