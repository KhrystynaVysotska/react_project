import React from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

function SearchField({ handleChange }) {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Paper component="form" onSubmit={submitHandler}>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <InputBase placeholder="Enter brand" onChange={handleChange} />
    </Paper>
  );
}

export default SearchField;
