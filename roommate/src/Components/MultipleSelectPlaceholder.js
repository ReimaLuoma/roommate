import React, { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useRecoilState } from "recoil";
import {
  selectedGenreFilter,
  selectedDurationFilter,
} from "../Atoms/FilterSelectionItems";

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

const getStyles = (name, genreName, theme) => {
  return {
    fontWeight:
      genreName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
    fontSize: "1.6rem",
  };
};

const MultipleSelectPlaceholder = ({
  placeholder,
  selectionItems,
  filterToDisplay,
}) => {
  const theme = useTheme();
  const [selectedGenreItem, setSelectedGenreItem] =
    useRecoilState(selectedGenreFilter);
  const [selectedDurationItem, setSelectedDurationItem] = useRecoilState(
    selectedDurationFilter
  );

  const optionsList = () => {
    return selectionItems.map((name) => (
      <MenuItem
        key={name}
        value={name}
        style={getStyles(name, selectedGenreItem, theme)}
      >
        {name}
      </MenuItem>
    ));
  };

  useEffect(() => {
    //console.log(selectedItem)
  });

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    if (placeholder === "genres") {
      setSelectedGenreItem(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    }

    if (placeholder === "duration") {
      setSelectedDurationItem(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    }
  };

  return (
    <div>
      <FormControl
        sx={{
          width: "100%",
          borderRadius: 4,
          bgcolor: "white",
          "& fieldset": { border: "none" },
        }}
      >
        <Select
          multiple
          displayEmpty
          value={
            placeholder === "genres" ? selectedGenreItem : selectedDurationItem
          }
          onChange={handleChange}
          input={<OutlinedInput />}
          sx={{ fontSize: "1.6rem" }}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>{placeholder}</em>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <em>{placeholder}</em>
          </MenuItem>
          {optionsList({ placeholder })}
        </Select>
      </FormControl>
    </div>
  );
};

export default MultipleSelectPlaceholder;
