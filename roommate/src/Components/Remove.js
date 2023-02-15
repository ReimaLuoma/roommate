import React, { useState } from "react";
import Button from "@mui/material/Button";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import RemoveModal from "./RemoveModal";

const Remove = () => {
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleStatus = (status) => {
    setOpen(status)
  };

  return (
    <>
      <Button
      data-testid='remove-button'
        variant="text"
        sx={{ color: "white", mr: 3, fontSize: "1.6rem" }}
        onClick={handleOpen}
      >
        <RemoveCircleIcon sx={{ mr: 1, fontSize: "1.6rem" }} />
        Remove movie
      </Button>

      {
        open && <RemoveModal handleStatus={handleStatus} />
      }

    </>
  );
};

export default Remove;
