import React, { useCallback, useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddModal from "./AddModal";

const Add = () => {
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleStatus = (status) => {
    setOpen(status)
  };

  return (
    <>
      <Button
        data-testid='add-button'
        variant="text"
        sx={{ color: "white", mr: 3, fontSize: "1.6rem" }}
        onClick={handleOpen}
      >
        <AddCircleIcon sx={{ mr: 1, fontSize: "1.6rem" }} />
        Add movie
      </Button>
      
      {
        open && <AddModal handleStatus={handleStatus}/>
      }
    </>
  );
};

export default Add;
