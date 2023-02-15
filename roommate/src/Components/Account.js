import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";
import AccountModal from "./AccountModal";

const Account = ({ user }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleStatus = (status) => {
    setOpen(status)
  };

  return (
    <>
      <Button
        data-testid='account-button'
        variant="text"
        sx={{ color: "white", mr: 3, borderRadius: 2, fontSize: "1.6rem" }}
        onClick={handleOpen}
      >
        <AccountCircleIcon sx={{ mr: 1, fontSize: "1.6rem" }} />
        {user.given_name}
      </Button>

      {
        open && <AccountModal user={user} handleStatus={handleStatus} />
      }
    </>
  );
};

export default Account;
