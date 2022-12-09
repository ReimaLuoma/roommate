import React from 'react';
import Button from '@mui/material/Button';
import { atom, useRecoilState } from 'recoil';
import { loginState } from '../Atoms/login';

const LoginRegister = () => {

    const [isLogged, setIsLogged] = useRecoilState(loginState);

    const loginUser = () => {
        setIsLogged(!isLogged);
    };

    return (
        <Button variant='contained' sx={{ 
            padding:2,
            bgcolor: '#e2c34b',
            color: 'black',
            borderRadius: 4,
            '& fieldset':
                {border: 'none'},
            ':hover': {
                bgcolor: '#ffdc54',
                color: '#3b66ab'
            }
            }} onClick={loginUser}>Login / Register</Button>
    )
};

export default LoginRegister;