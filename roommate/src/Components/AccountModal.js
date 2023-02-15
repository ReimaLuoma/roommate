import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Modal, Box, Button } from '@mui/material';

const AccountModal = ({user, handleStatus}) => {

    const [open, setOpen] = useState(true);
    const handleClose = () => {
        handleStatus(false);
        setOpen(false);
    }

    return (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Account details"
        aria-describedby="Check your account details"
        >
        
        <Box className="modalStyle no-scroll">
            <div className="d-flex justify-content-end">
            <Button sx={{ color: "white" }} onClick={handleClose}>
                <CloseIcon sx={{ fontSize: "3rem" }} />
            </Button>
            </div>

            <br />

            <div className="profilePage">
            <AccountCircleIcon sx={{ fontSize: "9.6rem" }} />
            <h1>Profile</h1>
            <br />

            <div className="row">
                <div className="col-4">
                <h5>First Name:</h5>
                </div>
                <div className="col">
                <h5 data-testid='user-info-1'>{user.given_name}</h5>
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                <h5 >Family Name:</h5>
                </div>
                <div className="col">
                <h5 data-testid='user-info-2'>{user.family_name}</h5>
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                <h5>Email:</h5>
                </div>
                <div className="col">
                <h5 data-testid='user-info-3'>{user.email}</h5>
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                <h5>Phone:</h5>
                </div>
                <div className="col">
                <h5 data-testid='user-info-4'>{user.phone_number}</h5>
                </div>
            </div>

            <br />
            <div className="col">
                <Button
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
                >
                Edit
                </Button>
                
                <div className="opacity-25">
                <p>{user.sub}</p>
                </div>
            </div>
            </div>
        </Box>
        </Modal>
    )
    
}

export default AccountModal;