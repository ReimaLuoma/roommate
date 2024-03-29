import { Auth } from "aws-amplify";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import React from "react";
import Button from "@mui/material/Button";

const signOut = async () => {
  try {
    await Auth.signOut({ global: true });
  } catch (error) {
    console.log("error signing out: ", error);
  }
};

const SignOutButton = () => {
  return (
    <Button
      variant="contained"
      sx={{
        color: "black",
        fontSize: "1.6rem",
        bgcolor: "#e2c34b",
        borderRadius: 2,
        ":hover": { bgcolor: "#ffdc54", color: "#3b66ab" },
      }}
      onClick={signOut}
    >
      <ExitToAppIcon sx={{ mr: 1, color: "#black", fontSize: "1.6rem" }} />
      Sign Out
    </Button>
  );
};

export default SignOutButton;
