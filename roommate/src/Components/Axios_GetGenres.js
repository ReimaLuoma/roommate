import axios from "axios";
import env from "react-dotenv";
import { useRecoilValue } from "recoil";
import { languageAndArea } from '../Atoms/LanguageSetting';

const GetGenres = () => {

    const language = useRecoilValue(languageAndArea);
    const API_url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=' + env.REACT_APP_TMDB_API_KEY + '&language='+ language;

    axios.get(API_url).then((response) => {
        const arr = response.data.genres;
  
        //List for 'genres'-filter dropdown element
        const arr2 = arr.map(item => {return item.name});
        
        return arr2;
  
      }).catch(err => {
        console.log(err);
      })
};

const GetGenresRaw = () => {

    const language = useRecoilValue(languageAndArea);
    const API_url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=' + env.REACT_APP_TMDB_API_KEY + '&language='+ language;

    axios.get(API_url).then((response) => {
        const arr = response.data.genres;
        
        return arr;
  
      }).catch(err => {
        console.log(err);
      })
};

export {GetGenres, GetGenresRaw};