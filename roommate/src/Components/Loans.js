import React, { useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import BrowseGalleryIcon from "@mui/icons-material/BrowseGallery";
import style from "../Styles/modalStyle";

const Loans = () => {
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
        </Box>
      </Modal>
    </>
  );
};

export default Loans;
