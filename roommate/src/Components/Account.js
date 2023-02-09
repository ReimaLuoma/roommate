import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Modal, Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Account = ({ user }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        variant="text"
        sx={{ color: "white", mr: 3, borderRadius: 2, fontSize: "1.6rem" }}
        onClick={handleOpen}
      >
        <AccountCircleIcon sx={{ mr: 1, fontSize: "1.6rem" }} />
        {user.given_name}
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="add movie"
        aria-describedby="add movie by giving movie title and choosing from returned options"
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
                <h5>{user.given_name}</h5>
              </div>
            </div>

            <div className="row">
              <div className="col-4">
                <h5>Family Name:</h5>
              </div>
              <div className="col">
                <h5>{user.family_name}</h5>
              </div>
            </div>

            <div className="row">
              <div className="col-4">
                <h5>Email:</h5>
              </div>
              <div className="col">
                <h5>{user.email}</h5>
              </div>
            </div>

            <div className="row">
              <div className="col-4">
                <h5>Phone:</h5>
              </div>
              <div className="col">
                <h5>{user.phone_number}</h5>
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
    </>
  );
};

export default Account;
