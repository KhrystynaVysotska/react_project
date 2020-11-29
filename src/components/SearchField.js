import React from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";

function SearchField({ handleChange }) {
  return (
    <Paper component="form">
      <IconButton>
        <SearchIcon />
      </IconButton>
      <InputBase placeholder="Enter brand" onChange={handleChange} />
    </Paper>
  );
}

export default SearchField;
