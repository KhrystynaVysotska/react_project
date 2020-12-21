import React from "react";
import { useField } from "formik";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

function CustomRadio({ name, ...props }) {
  const [field, meta] = useField(name);
  const error = Boolean(meta.touched && meta.error);
  const errorMessage = error ? meta.error : "";

  return (
    <FormControlLabel
      {...field}
      control={<Radio color="primary" />}
      {...props}
    />
  );
}

export default CustomRadio;
