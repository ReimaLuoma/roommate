const PosterImg = ({ size, posterpath }) => {

    return (
        <img
            src={"https://image.tmdb.org/t/p/w" + size + posterpath}
            className="card-img-top img-fluid"
            alt="..."
          ></img>
    )
};

export default PosterImg;