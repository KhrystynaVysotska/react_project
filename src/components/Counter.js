import React from "react";
import ButtonGroupStyled from "./styles/CustomButtonGroup.styled.js";
import Button from "@material-ui/core/Button";

function Counter({ decrement, number, increment }) {
  return (
    <ButtonGroupStyled
      size="large"
      color="primary"
      aria-label="outlined primary button group"
    >
      <Button onClick={decrement}>-</Button>
      <Button color="default">{number}</Button>
      <Button onClick={increment}>+</Button>
    </ButtonGroupStyled>
  );
}

export default Counter;
