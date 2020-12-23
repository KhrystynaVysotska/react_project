import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Formik } from "formik";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Check from "@material-ui/icons/Check";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CustomerForm from "./forms/CustomerForm";
import ShippingForm from "./forms/ShippingForm";
import PaymentSelectionForm from "./forms/PaymentSelectionForm";
import FormButtonsStyled from "./styles/FormButtons.styled";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import StyledFormContent from "./styles/FormContent.styled";
import * as Yup from "yup";

function getSteps() {
  return ["CUSTOMER INFO", "SHIPPING INFO", "PAYMENT SELECTION"];
}

function getStepName(step) {
  switch (step) {
    case 0:
      return "Customer information";
    case 1:
      return "Shipping";
    case 2:
      return "Payment Selection";
    default:
      return "Unknown step";
  }
}

function getStepContent({ activeStep }) {
  switch (activeStep) {
    case 0:
      return <CustomerForm />;
    case 1:
      return <ShippingForm />;
    case 2:
      return <PaymentSelectionForm />;
    default:
      return "Unknown step";
  }
}

export default function CheckoutStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  let history = useHistory();
  let location = useLocation();

  let back = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  const handleNext = (values) => {
    activeStep === steps.length - 1
      ? history.push({
          pathname: `/success`,
          state: {
            success_popup: location.state.checkout_popup,
            values,
          },
        })
      : setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    city: "",
    phone: "+380",
    email: "",
    deliveryType: "standart",
    paymentSelection: "credit_card",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, "Must be at least 2 characters")
      .max(50, "Must be 50 characters or less")
      .required("This is a required field"),
    lastName: Yup.string()
      .min(2, "Must be at least 2 characters")
      .max(50, "Must be 50 characters or less")
      .required("This is required field"),
    email: Yup.string().email("Email format is incorrect"),
    phone: Yup.string()
      .trim()
      .matches(/\+380/, "Must start with +380")
      .matches(/\+380[0-9 | \s+]+/, "Must contain 13 digits")
      .length(13, "Must be exactly 13 characters")
      .required("This is a required field"),
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
    deliveryType: Yup.string()
      .oneOf(["standart", "fast"], "Delivery type can be only standart or fast")
      .required("Choose at least one delivery type"),
    paymentSelection: Yup.string()
      .oneOf(
        ["credit_card", "pay_pal"],
        "Payment can be with credit card or pay pal only"
      )
      .required("Choose at least one payment type"),
  });

  const useStepIconStyles = makeStyles({
    root: {
      color: "#eaeaf0",
      display: "flex",
      height: 22,
      alignItems: "center",
    },
    active: {
      color: "#784af4",
    },
    circle: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "currentColor",
    },
    completed: {
      color: "#784af4",
      zIndex: 1,
      fontSize: 18,
    },
  });

  function StepIcon(props) {
    const classes = useStepIconStyles();
    const { active, completed } = props;

    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
        })}
      >
        {completed ? (
          <Check className={classes.completed} />
        ) : (
          <div className={classes.circle} />
        )}
      </div>
    );
  }

  return (
    <div style={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel StepIconComponent={StepIcon}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Button onClick={handleBack}>Submit</Button>
          </div>
        ) : (
          <StyledFormContent>
            <p className="title">{getStepName(activeStep)}</p>
            <Formik
              isInitialValid={false}
              initialValues={initialValues}
              validationSchema={validationSchema}
            >
              {({ isValid, values }) => (
                <>
                  {getStepContent({ activeStep })}
                  <FormButtonsStyled>
                    <Button
                      size="small"
                      onClick={activeStep === 0 ? back : handleBack}
                      startIcon={<ArrowBackIcon fontSize="small" />}
                    >
                      {activeStep === 0
                        ? "Return to cart"
                        : `Return to ${getStepName(activeStep - 1)}`}
                    </Button>
                    <Button
                      size="small"
                      style={{
                        color: isValid ? "#784af4" : "rgb(108 108 108)",
                        backgroundColor: "transparent",
                      }}
                      onClick={() => handleNext(values)}
                      disabled={!isValid}
                      endIcon={
                        <ArrowForwardIcon
                          fontSize="small"
                          style={{
                            color: isValid ? "#784af4" : "rgb(108 108 108)",
                          }}
                        />
                      }
                    >
                      {activeStep === steps.length - 1
                        ? "Continue to submission"
                        : `Continue to ${getStepName(activeStep + 1)}`}
                    </Button>
                  </FormButtonsStyled>
                </>
              )}
            </Formik>
          </StyledFormContent>
        )}
      </div>
    </div>
  );
}
