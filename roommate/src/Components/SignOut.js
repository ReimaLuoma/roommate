import { Auth } from 'aws-amplify';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import React from "react";
import Button from "@mui/material/Button";

const signOut = async () => {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

const SignOutButton = () => {
    return (
        <Button variant='text' sx={{color: 'white', mr:3, borderRadius: 2}} onClick={signOut}>
            <ExitToAppIcon sx={{mr:1}} />Sign Out
        </Button>
    )
}

export default SignOutButton;