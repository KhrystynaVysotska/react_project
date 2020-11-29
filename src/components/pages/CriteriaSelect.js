import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

function CriteriaSelect({ label, state, handleChange, fields }) {
  return (
    <FormControl variant="outlined" style={{ width: "100%"}}>
      <InputLabel>{label}</InputLabel>
      <Select value={state} onChange={handleChange} label={label}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {fields.map((field, index) => {
          return (
            <MenuItem key={field.id} value={field.value}>
              {field.value}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default CriteriaSelect;
