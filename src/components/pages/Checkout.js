import React from "react";
import StyledCheckout from "../styles/Checkout.styled";
import ModalStyled from "../styles/Modal.styled";
import { useHistory } from "react-router-dom";
import CheckoutStepper from "../CheckoutStepper";

function Checkout() {
  let history = useHistory();

  let back = (e) => {
    e.stopPropagation();
    history.goBack();
  };
  return (
    <StyledCheckout onClick={back}>
      <ModalStyled onClick={(e) => e.stopPropagation()}>
        <CheckoutStepper />
      </ModalStyled>
    </StyledCheckout>
  );
}

export default Checkout;
