import axios from "axios";
import env from "react-dotenv";
import { useRecoilValue, useRecoilState } from "recoil";
import { languageAndArea } from '../Atoms/LanguageSetting';

const GetMovies = () => {
    const language = useRecoilValue(languageAndArea);
    const [movies, setMovies] = useRecoilState(moviesInfo);
    const API_url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + env.REACT_APP_TMDB_API_KEY + '&language='+ language +'&page=1';

    axios.get(API_url).then(response => {
        setMovies(response.data.results);
    }).catch(err => {
        console.log(err);
    })
};