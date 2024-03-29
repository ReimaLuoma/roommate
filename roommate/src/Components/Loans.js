import React, { useCallback, useEffect, useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import BrowseGalleryIcon from "@mui/icons-material/BrowseGallery";
import style from "../Styles/modalStyle";
import LoanListView from "./LoanListView";
import { loanUpdate } from "../Atoms/LoanUpdate";
import { useRecoilValue } from "recoil";

const Loans = ({ user, admin }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loans, setLoans] = useState([]);
  const updateLoans = useRecoilValue(loanUpdate);

  const fetchLoansByAccessLevel = useCallback(() => {
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
  }, [admin, user]);

  useEffect(() => {
    fetchLoansByAccessLevel();
  }, [open, updateLoans, fetchLoansByAccessLevel]);

  if(admin){
    return (
      <>
        <Button
          data-testid='admin-button-loans'
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
          <Box className="no-scroll modalStyle">
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
                User
              </div>
  
              <div className="col">
                Status / Action
              </div>
  
              <hr />
  
            </div>
  
            {
              loans.length > 0 &&
              loans.map((loan, index) => {
                return <LoanListView key={index} {...loan} admin={admin}/>
              })
            }
            
          </Box>
        </Modal>
      </>
    );
  }

  if(!admin){
    return (
      <>
        <Button
          data-testid='user-button-loans'
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
          aria-labelledby="loans"
          aria-describedby="check loans"
        >
          <Box className="no-scroll modalStyle">
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
                Title
              </div>
  
              <div className="col">
                Status / Action
              </div>
  
              <hr />
  
            </div>
  
            {
              loans.map((loan, index) => {
                return <LoanListView key={index} {...loan} admin={admin}/>
              })
            }
            
          </Box>
        </Modal>
      </>
    );
  }
};

export default Loans;
