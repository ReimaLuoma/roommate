import React, { useEffect, useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import BrowseGalleryIcon from "@mui/icons-material/BrowseGallery";
import style from "../Styles/modalStyle";
import LoanListView from "./LoanListView";

const Loans = ({ user, admin }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    if(admin){
      fetch(process.env.REACT_APP_SERVER_API + '/loans/all')
      .then((response) => response.json())
      .then((data) => {
          setLoans(data);
      });
    } else {
      fetch(process.env.REACT_APP_SERVER_API + '/loans/' + user.attributes.sub)
      .then((response) => response.json())
      .then((data) => {
          setLoans(data);
      });
    }
    
  }, [open]);

  return (
    <>
      <Button
        variant="text"
        sx={{ color: "white", mr: 3, borderRadius: 2, fontSize: "1.6rem" }}
        onClick={handleOpen}
      >
        <BrowseGalleryIcon sx={{ mr: 1, fontSize: "1.6rem" }} />
        Loans
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="no-scroll">
          <div className="d-flex justify-content-end">
            <Button sx={{ color: "white" }} onClick={handleClose}>
              <CloseIcon />
            </Button>
          </div>

          <div>
            <p className="opacity-25">{user.attributes.sub}</p>
          </div>

          <div>
            <h1>Loans</h1>
          </div>

          <br />

          <div className="row">

            <div className="col-4">
              Movie
            </div>

            <div className="col-4">
              Borrower
            </div>

            <div className="col">
              Request return
            </div>

            <hr />

          </div>

          {
            loans.map((loan, index) => {
              return <LoanListView key={index} {...loan}/>
            })
          }
          
        </Box>
      </Modal>
    </>
  );
};

export default Loans;
