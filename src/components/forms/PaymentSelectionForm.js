import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import StyledForm from "../styles/StyledForm.styled";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import PaymentCard from "../inputs/PaymentCard";
import FormHelperText from "@material-ui/core/FormHelperText";
import visa from "payment-icons/min/flat/visa.svg";
import mastercard from "payment-icons/min/flat/mastercard.svg";
import amex from "payment-icons/min/flat/amex.svg";
import paypal from "payment-icons/min/flat/paypal.svg";

function PaymentSelectionForm() {
  const initialValues = {
    paymentSelection: "",
  };

  const validationSchema = Yup.object({
    paymentSelection: Yup.string()
      .oneOf(
        ["credit_card", "pay_pal"],
        "Payment can be with credit card or pay pal only"
      )
      .required("Choose at least one payment type"),
  });

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {({ values, errors }) => {
        console.log(JSON.stringify(values));
        return (
          <StyledForm>
            <FormControl error={true} component="fieldset">
              <RadioGroup
                aria-label="paymentSelection"
                name="paymentSelection"
                value={
                  values.paymentSelection
                    ? values.paymentSelection
                    : "credit_card"
                }
                row
                className="cards"
              >
                <PaymentCard
                  title="Credit Card"
                  description="Safe money tranfer using your bank account. Visa, Maestro, Discover, American Express"
                  icons={
                    <>
                      <img alt="visa" src={visa} />
                      <img alt="mastercard" src={mastercard} />
                      <img alt="amex" src={amex} />
                    </>
                  }
                  name="paymentSelection"
                  value="credit_card"
                />
                <PaymentCard
                  title="PayPal"
                  description="You will be redirected to PayPal website to complete your purchase securely"
                  icons={
                    <>
                      <img
                        alt="paypal"
                        src={paypal}
                        style={{ width: 60, height: 60 }}
                      />
                    </>
                  }
                  name="paymentSelection"
                  value="pay_pal"
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

export default PaymentSelectionForm;
