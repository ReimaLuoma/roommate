import env from 'react-dotenv';
const { MovieDb } = require('moviedb-promise');

const moviedb = new MovieDb(env.REACT_APP_TMDB_API_KEY);

const PopularMovie = () => {
    moviedb
    .moviePopular()
    .then((res) => {
        console.log(res);
    })
    .catch(console.error)
};

export default PopularMovie;