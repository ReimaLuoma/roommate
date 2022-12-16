import React, { useState, useEffect} from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import env from 'react-dotenv';

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

const PopulateGenres = () => {
  const [genresList, setGenresList] = useState([]);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=' + env.REACT_APP_TMDB_API_KEY + '&language=en-US').then((response) => {
      //console.log(response.data.genres);
      const arr = response.data.genres;
      const arr2 = arr.map(item => {return item.name});
      //console.log(arr2);
      setGenresList(arr2);
    }).catch(err => {
      console.log(err);
    })
  },[])

  return genresList;
};

const getStyles = (name, personName, theme) => {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const MultipleSelectPlaceholder = ({placeholder}) => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const optionsList = () => {

    if(placeholder == 'duration'){
      return (
        duration.map((name) => (
          <MenuItem
            key={name}
            value={name}
            style={getStyles(name, personName, theme)}
          >
            {name}
          </MenuItem>
        ))
      )
    }
    if(placeholder == 'genres'){

      const genres = PopulateGenres();

      return (
        genres.map((name) => (
          <MenuItem
            key={name}
            value={name}
            style={getStyles(name, personName, theme)}
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
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ width: '100%', mt: 6.5, borderRadius: 4, bgcolor: 'white', '& fieldset': {border: 'none'} }}>
        <Select
          multiple
          displayEmpty
          value={personName}
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