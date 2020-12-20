import React from "react";
import { useField } from "formik";
import TextField from "@material-ui/core/TextField";

function CustomTextInput({ name, ...props }) {
  const [field, meta] = useField(name);
  const error = Boolean(meta.touched && meta.error);
  const errorMessage = error ? meta.error : "";

  return (
    <TextField
      name={name}
      {...props}
      {...field}
      error={error}
      helperText={errorMessage}
      variant="outlined"
    />
  );
}

export default CustomTextInput;
