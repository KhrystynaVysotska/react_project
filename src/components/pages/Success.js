import React, { useEffect } from "react";
import StyledSuccess from "../styles/Success.styled";
import ModalSuccessStyled from "../styles/ModalSuccess.styled";
import { useHistory, useLocation } from "react-router-dom";
import success_image from "../../images/success.jpg";
import { useDispatch } from "react-redux";
import { clearCart } from "../../context/actionCreators";

function Success() {
  let history = useHistory();
  let location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearCart());
    };
  }, []);

  let back = () => {
    history.push("/cart");
  };
  return (
    <StyledSuccess onClick={back}>
      <ModalSuccessStyled onClick={(e) => e.stopPropagation()}>
        <img alt="success" src={success_image} />
        <p>
          Thank you, {location.state.values.firstName}! Submitted successfully
        </p>
      </ModalSuccessStyled>
    </StyledSuccess>
  );
}

export default Success;
