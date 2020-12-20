import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Check from "@material-ui/icons/Check";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { fontSize } from "./constants/Constants";
import CustomerForm from "./forms/CustomerForm";
import ShippingForm from "./forms/ShippingForm";
import PaymentSelectionForm from "./forms/PaymentSelectionForm";
import FormButtonsStyled from "./styles/FormButtons.styled";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import StyledFormContent from "./styles/FormContent.styled";

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

function getStepContent(step) {
  switch (step) {
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

  const handleNext = () => {
    activeStep === steps.length - 1
      ? history.push({
          pathname: `/success`,
          state: {
            success_popup: location,
          },
        })
      : setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

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
            {getStepContent(activeStep)}
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
                style={{ color: "#784af4", backgroundColor: "transparent" }}
                onClick={handleNext}
                endIcon={
                  <ArrowForwardIcon
                    fontSize="small"
                    style={{ color: "#784af4" }}
                  />
                }
              >
                {activeStep === steps.length - 1
                  ? "Continue to submission"
                  : `Continue to ${getStepName(activeStep + 1)}`}
              </Button>
            </FormButtonsStyled>
          </StyledFormContent>
        )}
      </div>
    </div>
  );
}
