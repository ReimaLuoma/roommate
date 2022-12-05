import React from 'react';
import Button from '@mui/material/Button';
import { shadows } from '@mui/system';

const LoginRegister = () => {
    return (
        <Button variant='contained' sx={{ 
            padding:2,
            bgcolor: '#e2c34b',
            color: 'black',
            borderRadius: 4,
            '& fieldset':
                {border: 'none'},
            ":hover": {
                bgcolor: '#ffdc54',
                color: '#3b66ab'
            }
            }}>Login / Register</Button>
    )
};

export default LoginRegister;