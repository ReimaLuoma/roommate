import React, { useEffect, useState} from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import MultipleSelectPlaceholder from './MultipleSelectPlaceholder';
import Search from './Search';
import { languageAndArea } from '../Atoms/LanguageSetting';
import { Chip } from '@mui/material';
import { selectedFilter, selectedGenreFilter } from '../Atoms/FilterSelectionItems';
import { moviesInfo, moviesDisplay } from '../Atoms/movieData';

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
    const [genresList, setGenresList] = useState(genres);
    const [selectedGenreFilterItem, setSelectedGenreFilterItem] = useRecoilState(selectedGenreFilter);
    const language = useRecoilValue(languageAndArea);
    const movies = useRecoilValue(moviesInfo);

    const setMoviesToDisplay = useSetRecoilState(moviesDisplay);

    //Fetch initial data
    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER_API + '/tmdb/genres')
            .then((response) => response.json())
            .then((data) => {
                //List for 'genres'-filter dropdown element
                const arr = data.map(item => {return item.name});
                setGenresList(arr);
            });
    }, [language]);

    useEffect(() => {
        filterToDisplay();
    }, [selectedGenreFilterItem])

    const handleDelete = (e) => {

        const arr = [...selectedGenreFilterItem];
        const index = arr.indexOf(e.item);

        if(e.item === undefined){
            setSelectedGenreFilterItem([]);
        }

        if(index !== -1){
            arr.splice(index, 1);
            setSelectedGenreFilterItem(arr);
        }

        filterToDisplay();
    };

    const filterToDisplay = () => {
        
        // reset movies for filttering
        let list = [...movies];
    
        // check if genre items to filter
        if(selectedGenreFilterItem.length !== 0){
            
            // set new filter list from selected items
            // Genres:

            // create new list based on filter items array

            let itemsOfMatch = [];
            for(let i = 0; i < selectedGenreFilterItem.length; i++){
                itemsOfMatch.push(movies.filter(movie => movie.genres.filter(e => e.name === selectedGenreFilterItem[i]).length > 0));
            }

            // flatten itemsOfMatch into single array and set only uniques in list
            let newlist = itemsOfMatch.flat(1);
            list = [...new Set(newlist)];
        }
    
        setMoviesToDisplay(list);
    };

    return (
        <section>
            <div className="row mb-3">
                <div className="col-6 col-lg-8 col-md-12 filter-columns">
                    <MultipleSelectPlaceholder placeholder={"genres"} selectionItems={genresList} />
                    <MultipleSelectPlaceholder placeholder={"duration"} selectionItems={duration} />
                </div>
                <div className="col-6 col-lg-4 col-md-12 d-flex justify-content-end mt-5">
                    <Search />
                </div>
            </div>
            <div className='row mb-3'>
                <div>
                    {
                        // generate 'selected genres' tag if selecterFilterItem isn't empty
                        selectedGenreFilterItem.length !== 0 &&
                        <Chip label='selected genres' onDelete={() => handleDelete('')} sx={{ bgcolor: '#ff0000', color: 'white', boxShadow: '2px 2px 3px black', marginRight: 1 }}/>
                    }
                    {
                        // generate placeholder tag 'all movies' if selectedFilterItem is empty
                        selectedGenreFilterItem.length !== 0
                        ? selectedGenreFilterItem.map((item, index) => {
                            return <Chip key={index} label={item} value={item} onDelete={() => handleDelete({item})} sx={{ bgcolor: '#e2c34b', boxShadow: '2px 2px 3px', marginRight: 1 }}/>
                        })
                        : <Chip label='All movies' sx={{ bgcolor: '#e2c34b', boxShadow: '2px 2px 3px', marginRight: 2 }}/>
                    }
                </div>
            </div>
      </section>
    )
}

export default Filters;