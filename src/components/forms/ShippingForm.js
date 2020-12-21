import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import StyledForm from "../styles/StyledForm.styled";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import CustomCheckoutCard from "../inputs/CustomCheckoutCard";
import FormHelperText from "@material-ui/core/FormHelperText";

function ShippingForm() {
  const initialValues = {
    deliveryType: "",
  };

  const validationSchema = Yup.object({
    deliveryType: Yup.string()
      .oneOf(["standart", "fast"], "Delivery type can be only standart or fast")
      .required("Choose at least one delivery type"),
  });

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {({ values, errors }) => {
        console.log(JSON.stringify(values));
        return (
          <StyledForm>
            <FormControl error={true} component="fieldset">
              <RadioGroup
                className="cards"
                aria-label="deliveryType"
                name="deliveryType"
                value={values.deliveryType ? values.deliveryType : "standart"}
                row
              >
                <CustomCheckoutCard
                  title="Standart Delivery"
                  description="Estimated 14-20 Days Shipping (Duties and taxes may be due upon delivery)"
                  price="Free"
                  name="deliveryType"
                  value="standart"
                />
                <CustomCheckoutCard
                  title="Fast Delivery"
                  description="Estimated 2-5 Days Shipping (Duties and taxes may be due upon delivery)"
                  price="$8.00"
                  name="deliveryType"
                  value="fast"
                />
              </RadioGroup>
              <FormHelperText>
                {errors.deliveryType ? errors.deliveryType : ""}
              </FormHelperText>
            </FormControl>
          </StyledForm>
        );
      }}
    </Formik>
  );
}

export default ShippingForm;
