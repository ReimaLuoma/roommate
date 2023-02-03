import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import MultipleSelectPlaceholder from "./MultipleSelectPlaceholder";
import Search from "./Search";
import { languageAndArea } from "../Atoms/LanguageSetting";
import { Chip } from "@mui/material";
import {
  selectedDurationFilter,
  selectedGenreFilter,
} from "../Atoms/FilterSelectionItems";
import { moviesInfo, moviesDisplay } from "../Atoms/movieData";

const duration = ["less than 90 min", "90 - 150 min", "over 150 min"];

const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "TV movie",
  "Thriller",
  "War",
  "Western",
];

const Filters = () => {
  const [genresList, setGenresList] = useState(genres);
  const [selectedGenreFilterItem, setSelectedGenreFilterItem] =
    useRecoilState(selectedGenreFilter);
  const [selectedDurationFilterItem, setSelectedDurationFilterItem] =
    useRecoilState(selectedDurationFilter);
  const language = useRecoilValue(languageAndArea);
  const movies = useRecoilValue(moviesInfo);
  const [searchValue, setSearchValue] = useState("");

  const setMoviesToDisplay = useSetRecoilState(moviesDisplay);

  const filterToDisplay = () => {
    // reset movies for filttering
    let list = [...movies];

    // check if genre items to filter
    if (selectedGenreFilterItem.length !== 0) {
      // set new filter list from selected genre items
      // create new list based on filter items array

      let itemsOfMatch = [];
      for (let i = 0; i < selectedGenreFilterItem.length; i++) {
        itemsOfMatch.push(
          movies.filter(
            (movie) =>
              movie.genres.filter((e) => e.name === selectedGenreFilterItem[i])
                .length > 0
          )
        );
      }

      // flatten itemsOfMatch into single array and set only uniques in list
      let newlist = itemsOfMatch.flat(1);
      list = [...new Set(newlist)];
    }

    if (selectedDurationFilterItem.length !== 0) {
      // set new filter list from selected duration items
      // create new list based on filter items array

      let itemsOfMatch = [];
      if (selectedDurationFilterItem.includes("less than 90 min")) {
        itemsOfMatch.push(list.filter((movie) => movie.runtime < 90));
      }
      if (selectedDurationFilterItem.includes("90 - 150 min")) {
        itemsOfMatch.push(
          list.filter((movie) => movie.runtime >= 90 && movie.runtime < 150)
        );
      }
      if (selectedDurationFilterItem.includes("over 150 min")) {
        itemsOfMatch.push(list.filter((movie) => movie.runtime >= 150));
      }

      // flatten itemsOfMatch into single array and set only uniques in list
      let newlist = itemsOfMatch.flat(1);
      list = [...new Set(newlist)];
    }

    if (searchValue.length !== 0) {
      let itemsOfMatch = [];

      itemsOfMatch.push(
        list.filter((movie) =>
          movie.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      );

      let newlist = itemsOfMatch.flat(1);
      list = [...new Set(newlist)];
    }

    setMoviesToDisplay(list);
  };

  //Fetch initial data
  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER_API + "/tmdb/genres")
      .then((response) => response.json())
      .then((data) => {
        //List for 'genres'-filter dropdown element
        const arr = data.map((item) => {
          return item.name;
        });
        setGenresList(arr);
      });
  }, [language]);

  useEffect(() => {
    filterToDisplay();
  }, [
    selectedGenreFilterItem,
    selectedDurationFilterItem,
    searchValue,
    filterToDisplay,
  ]);

  const handleDeleteGenre = (e) => {
    const arr = [...selectedGenreFilterItem];
    const index = arr.indexOf(e.item);

    if (e.item === undefined) {
      setSelectedGenreFilterItem([]);
    }

    if (index !== -1) {
      arr.splice(index, 1);
      setSelectedGenreFilterItem(arr);
    }

    filterToDisplay();
  };

  const handleDeleteDuration = (e) => {
    const arr = [...selectedDurationFilterItem];
    const index = arr.indexOf(e.item);

    if (e.item === undefined) {
      setSelectedDurationFilterItem([]);
    }

    if (index !== -1) {
      arr.splice(index, 1);
      setSelectedDurationFilterItem(arr);
    }

    filterToDisplay();
  };

  const dataFromSearch = (data) => {
    setSearchValue(data);
  };

  return (
    <section>
      <div className="row mb-3">
        <div className="col-6 col-lg-8 col-md-12 filter-columns mb-3">
          <MultipleSelectPlaceholder
            placeholder={"genres"}
            selectionItems={genresList}
          />
          <MultipleSelectPlaceholder
            placeholder={"duration"}
            selectionItems={duration}
          />
        </div>
        <div className="col-6 col-lg-4 col-md-12 d-flex justify-content-end searchBar">
          <Search dataFromSearch={dataFromSearch} />
        </div>
      </div>

      <div className="row mb-3">
        <div>
          {
            // generate 'selected genres' tag if selecterFilterItem isn't empty
            selectedGenreFilterItem.length !== 0 && (
              <Chip
                label="selected genres"
                onDelete={() => handleDeleteGenre("")}
                sx={{
                  bgcolor: "#ff0000",
                  color: "white",
                  boxShadow: "2px 2px 3px black",
                  marginRight: 1,
                  fontSize: "1.4rem",
                  marginBottom: 2,
                }}
              />
            )
          }
          {
            // generate 'selected duration' tag if selecterFilterItem isn't empty
            selectedDurationFilterItem.length !== 0 && (
              <Chip
                label="selected durations"
                onDelete={() => handleDeleteDuration("")}
                sx={{
                  bgcolor: "#ff0000",
                  color: "white",
                  boxShadow: "2px 2px 3px black",
                  marginRight: 1,
                  fontSize: "1.4rem",
                  marginBottom: 2,
                }}
              />
            )
          }
          {
            // generate placeholder tag 'all movies' if no selections otherwise return genre tags
            selectedGenreFilterItem.length !== 0 ||
            selectedDurationFilterItem.length !== 0 ? (
              selectedGenreFilterItem.map((item, index) => {
                return (
                  <Chip
                    key={index}
                    label={item}
                    value={item}
                    onDelete={() => handleDeleteGenre({ item })}
                    sx={{
                      bgcolor: "#e2c34b",
                      boxShadow: "2px 2px 3px black",
                      marginRight: 1,
                      fontSize: "1.4rem",
                      marginBottom: 2,
                    }}
                  />
                );
              })
            ) : (
              <Chip
                label="All movies"
                sx={{
                  bgcolor: "#e2c34b",
                  boxShadow: "2px 2px 3px black",
                  marginRight: 1,
                  fontSize: "1.4rem",
                  marginBottom: 2,
                }}
              />
            )
          }
          {
            // generate durations tags if any on selectedDurationFilterItem array
            selectedDurationFilterItem.length !== 0 ? (
              selectedDurationFilterItem.map((item, index) => {
                return (
                  <Chip
                    key={index}
                    label={item}
                    value={item}
                    onDelete={() => handleDeleteDuration({ item })}
                    sx={{
                      bgcolor: "#AB3C7D",
                      color: "white",
                      boxShadow: "2px 2px 3px black",
                      marginRight: 1,
                      marginBottom: 2,
                    }}
                  />
                );
              })
            ) : (
              <></>
            )
          }
        </div>
      </div>
    </section>
  );
};

export default Filters;
