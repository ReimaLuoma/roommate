import React, { useEffect, useState} from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import MultipleSelectPlaceholder from './MultipleSelectPlaceholder';
import Search from './Search';
import { moviesInfo, moviesDisplay } from '../Atoms/movieData';
import { languageAndArea } from '../Atoms/LanguageSetting';
import axios from 'axios';
import env from 'react-dotenv';

const duration = [
    'less than 90 min',
    '90 - 150 min',
    'over 150 min',
  ];

const genres = [
    'Action',
    'Adventure',
    'Animation',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Family',
    'Fantasy',
    'History',
    'Horror',
    'Music',
    'Mystery',
    'Romance',
    'Science Fiction',
    'TV movie',
    'Thriller',
    'War',
    'Western',
];

const Filters = () => {
    const [selectedItem, setSelectedItem] = useState([]);
    const [movies] = useRecoilState(moviesInfo);
    const [moviesToDisplay, setMoviesToDisplay] = useRecoilState(moviesDisplay);
    const [filterItems, setFilterItems] = useState([]);
    const [genresListRaw, setGenresListRaw] = useState([]);
    const [genresList, setGenresList] = useState(genres);
    const language = useRecoilValue(languageAndArea);
    const genreMap = new Map();

    //Fetch initial data
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=' + env.REACT_APP_TMDB_API_KEY + '&language='+ language).then((response) => {
        const arr = response.data.genres;

        //List for 'genres'-filter dropdown element
        const arr2 = arr.map(item => {return item.name});
        setGenresList(arr2);
        setGenresListRaw(arr);

        }).catch(err => {
        console.log(err);
        })
    }, []);

    useEffect(() => {
        filterGenres();
    },[selectedItem, filterItems]);
    
    const filterGenres = () => {
        // reset
        setMoviesToDisplay(movies);
        // generate dictionary for genre/id
        genresListRaw.map(item => genreMap.set(item.name,item.id));
        // generate filter items into state
        setFilterItems(genreMap.get(selectedItem[selectedItem.length-1]));
        // create new list based on filtered items
        const newList = movies.filter(movie => movie.genre_ids.includes(filterItems));
        // display new list of items
        if(newList == ""){
          setMoviesToDisplay(movies);
        }else {
          setMoviesToDisplay(newList);
        }
    };

    const onFilterSelect = (dataFromMultipleSelectPlaceholder) => {
        setSelectedItem(dataFromMultipleSelectPlaceholder);
    };

    return (
        <section>
            <div className="row">
                <div className="col-6 col-lg-8 col-md-12 filter-columns mb-lg-5">
                    <MultipleSelectPlaceholder placeholder={"genres"} selectionItems={genresList} onFilterSelect={onFilterSelect}/>
                    <MultipleSelectPlaceholder placeholder={"duration"} selectionItems={duration} />
                </div>
                <div className="col-6 col-lg-4 col-md-12 d-flex justify-content-end mb-5 mt-5">
                    <Search />
                </div>
            </div>
      </section>
    )
}

export default Filters;