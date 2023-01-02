import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Box from "@mui/material/Box";
import Modal from '@mui/material/Modal';
import Search from './Search';
import MovieCardListView from "./MovieCardListView";
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'relative',
    top: '50%',
    left: '49.7%',
    transform: 'translate(-50%, -50%)',
    width: '32rem',
    bgcolor: '#2c2c2c',
    borderRadius: '15px',
    boxShadow: 24,
    p: 4,
    color: 'white',
  };

const Add = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
        <Button variant='text' sx={{color: 'white', mr:3}} onClick={handleOpen}>
            <AddCircleIcon sx={{mr:1}}/>Add movie
        </Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='add movie'
            aria-describeby='add movie by giving movie title and choosing from returned options'
        >
            <Box sx={style}>
                <div className="d-flex justify-content-end">
                    <Button sx={{color: 'white'}} onClick={handleClose}><CloseIcon /></Button>
                </div>
                <br />
                <br />
                <br />
                <Search />
                <MovieCardListView />
            </Box>
        </Modal>
        </>
    )
}

export default Add;