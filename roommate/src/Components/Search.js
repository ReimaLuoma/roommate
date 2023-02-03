import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

const Search = ({ dataFromSearch }) => {
  return (
    <div className="search">
      <TextField
        fullWidth
        id="outlined-basic"
        variant="outlined"
        sx={{
          input: {
            color: "white",
            mr: 3,
            textAlign: "right",
            fontSize: "1.6rem",
          },
          "& fieldset": { border: "none" },
        }}
        InputProps={{
          placeholder: "title",
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon sx={{ color: "white", fontSize: "2rem" }} />
            </InputAdornment>
          ),
        }}
        onChange={(e) => dataFromSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
