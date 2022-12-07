import React from "react";
import Button from "@mui/material/Button";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Account = ({userName}) => {
    return (
        <Button variant='text' sx={{color: 'white', mr:3}}>
            <AccountCircleIcon sx={{mr:1}}/>{userName}
        </Button>
    )
}

export default Account;