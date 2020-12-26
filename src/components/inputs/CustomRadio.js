import React from "react";
import { useField } from "formik";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function CustomRadio({ name, ...props }) {
  const [field] = useField(name);

  return (
    <FormControlLabel
      {...field}
      control={<Radio color="primary" />}
      {...props}
    />
  );
}

export default CustomRadio;
