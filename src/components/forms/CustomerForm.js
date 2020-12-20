import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import CustomTextInput from "../inputs/CustomTextInput";
import CustomSelect from "../inputs/CustomSelect";
import MenuItem from "@material-ui/core/MenuItem";
import StyledForm from "../styles/StyledForm.styled";

function CustomerForm() {
  const initialValues = {
    firstName: "",
    lastName: "",
    city: "",
    phone: "+380",
    email: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name must be 50 characters or less")
      .required("First name is a required field"),
    lastName: Yup.string()
      .min(2, "Last name must be at least 2 characters long")
      .max(50, "Last name must be 50 characters or less")
      .required("Last name is require field"),
    email: Yup.string().email("Email format is incorrect"),
    phone: Yup.string()
      .trim()
      .matches(/\+380/, "Phone number must start with +380")
      .matches(/\+380[0-9 | \s+]+/, "Phone number must contain 13 digits")
      .length(13, "Phone number should be exactly 13 characters")
      .required("Phone number is a required field"),
    city: Yup.string()
      .oneOf(
        [
          "Lviv",
          "Kyiv",
          "Ternopil",
          "Sambir",
          "Chervonograd",
          "Chernivtsi",
          "Ivano-Frankivsk",
        ],
        "Sorry! Currently, we don`t provide delivery to this sity"
      )
      .required("City is a required field"),
  });
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {(values, errors) => {
        console.log(JSON.stringify(values, errors));
        return (
          <StyledForm>
            <div className="name">
              <CustomTextInput
                className="firstName"
                label="First Name"
                name="firstName"
                type="text"
                required
              />
              <CustomTextInput
                className="lastName"
                label="Last Name"
                name="lastName"
                type="text"
                required
              />
            </div>
            <div className="personal_data">
              <CustomTextInput
                className="email"
                label="Email"
                name="email"
                type="text"
              />
              <CustomTextInput
                className="phone"
                label="Phone"
                name="phone"
                type="text"
                required
              />
            </div>
            <CustomSelect
              className="city"
              label="City"
              state="city"
              name="city"
            >
              <MenuItem value="Lviv">Lviv</MenuItem>
              <MenuItem value="Kyiv">Kyiv</MenuItem>
              <MenuItem value="Ternopil">Ternopil</MenuItem>
              <MenuItem value="Sambir">Sambir</MenuItem>
              <MenuItem value="Chervonograd">Chervonograd</MenuItem>
              <MenuItem value="Chernivtsi">Chernivtsi</MenuItem>
              <MenuItem value="Ivano-Frankivsk">Ivano-Frankivsk</MenuItem>
            </CustomSelect>
          </StyledForm>
        );
      }}
    </Formik>
  );
}

export default CustomerForm;
