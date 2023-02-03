import React from "react";
import { Card } from "@mui/material";

const poster_URL = (posterpath) => {
  return "https://image.tmdb.org/t/p/w780" + posterpath;
};

const CastCard = ({ name, character, profile_path }) => {
  return (
    <Card
      className="col-11 align-items-center height-10 ms-3 mb-3 castCard"
      sx={{
        display: "flex",
        borderTop: "solid 1px #3c3c3c",
        borderLeft: "solid 1px #3c3c3c",
        bgcolor: "#2c2c2c",
        color: "white",
        boxShadow: "3px 3px #1c1c1c",
        paddingLeft: 0,
      }}
    >
      <div className="col-md-2 col-5">
        <img
          src={poster_URL(profile_path)}
          className="card-img-top img-fluid"
          alt="..."
        ></img>
      </div>
      <div className="col-md-8 ps-5 pt-3">
        <h2>
          <b>{name}</b>
        </h2>
        <p>{character}</p>
      </div>
    </Card>
  );
};

export default CastCard;
