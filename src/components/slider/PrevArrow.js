import React from "react";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import PrevArrowStyled from "../styles/PrevArrow.styled.js";
import IconButton from "@material-ui/core/IconButton";
import { fontSize } from "../constants/Constants.js";

function PrevArrow(props) {
  const { onClick } = props;
  const styles = {
    largeIcon: {
      width: fontSize.fs60,
      height: fontSize.fs60,
    },
  };
  return (
    <PrevArrowStyled>
      <IconButton onClick={onClick}>
        <ArrowLeftIcon style={styles.largeIcon} />
      </IconButton>
    </PrevArrowStyled>
  );
}

export default PrevArrow;
