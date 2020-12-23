import React, { useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import CustomTextInput from "../inputs/CustomTextInput";
import CustomSelect from "../inputs/CustomSelect";
import MenuItem from "@material-ui/core/MenuItem";
import StyledForm from "../styles/StyledForm.styled";

function CustomerForm() {
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
      <CustomSelect className="city" label="City" state="city" name="city">
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
}

export default CustomerForm;
