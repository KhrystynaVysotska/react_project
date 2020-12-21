import React from "react";
import StyledSuccess from "../styles/Success.styled";
import ModalSuccessStyled from "../styles/ModalSuccess.styled";
import { useHistory } from "react-router-dom";
import success_image from "../../images/success.jpg";

function Success() {
  let history = useHistory();

  let back = (e) => {
    e.stopPropagation();
    history.goBack();
  };
  return (
    <StyledSuccess onClick={back}>
      <ModalSuccessStyled onClick={(e) => e.stopPropagation()}>
        <img alt="success" src={success_image} />
        <p>Submitted successfully</p>
      </ModalSuccessStyled>
    </StyledSuccess>
  );
}

export default Success;
