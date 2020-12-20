import React from "react";
import { useField } from "formik";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

function CustomSelect({ children, name, ...props }) {
  const [field, meta] = useField(name);
  const error = Boolean(meta.touched && meta.error);
  const errorMessage = error ? meta.error : "";

  return (
    <FormControl error={error} variant="outlined" style={{ width: "25%" }}>
      <InputLabel htmlFor={name}>{props.label}</InputLabel>
      <Select
        {...props}
        {...field}
        inputProps={{
          name: name,
          id: name,
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {children}
      </Select>
      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  );
}

export default CustomSelect;
