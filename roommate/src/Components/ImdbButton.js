import { Button } from "@mui/material";
//https://www.imdb.com/title/

const ImdbButton = ({ imdbID }) => {

    const handleOpen = () => {
        window.open("https://www.imdb.com/title/" + imdbID);
    };

    return (
        <Button
            variant="contained"
            sx={{
            color: "black",
            bgcolor: "#e2c34b",
            mr: 3,
            borderRadius: 2,
            boxShadow: "3px 3px #1c1c1c",
            ":hover": {
                bgcolor: "#b2a866",
                color: "#2c2c2c",
                boxShadow: "3px 3px #1c1c1c",
            },
            }}
            onClick={handleOpen}
        >
            IMDB
        </Button>
    )
};

export default ImdbButton;