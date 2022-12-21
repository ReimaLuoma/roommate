import React, { useState, useEffect} from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import env from 'react-dotenv';
import { useRecoilState, useRecoilValue } from 'recoil';
import { moviesInfo, moviesDisplay } from '../Atoms/movieData';
import { languageAndArea } from '../Atoms/LanguageSetting';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

const duration = [
  'less than 90 min',
  '90 - 150 min',
  'over 150 min',
];

const getStyles = (name, genreName, theme) => {
  return {
    fontWeight:
      genreName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const MultipleSelectPlaceholder = ({placeholder}) => {
  const theme = useTheme();
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [movies] = useRecoilState(moviesInfo);
  const [moviesToDisplay, setMoviesToDisplay] = useRecoilState(moviesDisplay);
  const [filterItems, setFilterItems] = useState([]);
  const [genresList, setGenresList] = useState([]);
  const [genresListRaw, setGenresListRaw] = useState([]);
  const language = useRecoilValue(languageAndArea);
  const genreMap = new Map();

  const optionsList = () => {

    if(placeholder === 'duration'){
      return (
        duration.map((name) => (
          <MenuItem
            key={name}
            value={name}
            style={getStyles(name, selectedGenre, theme)}
          >
            {name}
          </MenuItem>
        ))
      )
    }
    if(placeholder === 'genres'){

      return (
        genresList.map((name) => (
          <MenuItem
            key={name}
            value={name}
            style={getStyles(name, selectedGenre, theme)}
          >
            {name}
          </MenuItem>
        ))
      )
    }
    
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedGenre(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    filterGenres();
  };

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
  },[selectedGenre, filterItems]);

  const filterGenres = () => {
    // reset
    setMoviesToDisplay(movies);
    // generate dictionary for genre/id
    genresListRaw.map(item => genreMap.set(item.name,item.id));
    // generate filter items into state
    setFilterItems(genreMap.get(selectedGenre[selectedGenre.length-1]));
    // create new list based on filtered items
    const newList = movies.filter(movie => movie.genre_ids.includes(filterItems));
    // display new list of items
    if(newList == ""){
      setMoviesToDisplay(movies);
    }else {
      setMoviesToDisplay(newList);
    }
  };

  return (
    <div>
      <FormControl sx={{ width: '100%', mt: 6.5, borderRadius: 4, bgcolor: 'white', '& fieldset': {border: 'none'} }}>
        <Select
          multiple
          displayEmpty
          value={selectedGenre}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>{placeholder}</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>{placeholder}</em>
          </MenuItem>
          {optionsList({placeholder})}
        </Select>
      </FormControl>
    </div>
  );
}

export default MultipleSelectPlaceholder;