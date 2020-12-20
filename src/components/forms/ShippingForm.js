import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import StyledForm from "../styles/StyledForm.styled";
import Checkbox from "@material-ui/core/Checkbox";

function ShippingForm() {
  const initialValues = {
    deliveryType: "",
  };

  const validationSchema = Yup.object({
    standartDelivery: Yup.string()
      .required("Choose at least one delivery type")
      .oneOf(["standart", "fast"]),
  });
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {(values, errors) => {
        console.log(JSON.stringify(values, errors));
        return (
          <StyledForm>
            <Checkbox defaultChecked value="standart" name="deliveryType" />
            <Checkbox value="fast" name="deliveryType" />
          </StyledForm>
        );
      }}
    </Formik>
  );
}

export default ShippingForm;
