import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

const Search = () => {
    return (
        <div className='search'>
            <TextField
                fullWidth
                id='outlined-basic'
                variant='outlined'
                sx={{ className: 'search', '& fieldset': {border: 'none'} }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon sx={{color: 'white'}}/>
                        </InputAdornment>
                    )
                }}
             />
        </div>
    );
}

export default Search;