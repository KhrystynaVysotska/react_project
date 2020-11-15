import React from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import NextArrowStyled from "../styles/NextArrow.styled.js";
import IconButton from "@material-ui/core/IconButton";
import { fontSize, colors } from "../constants/Constants.js";

function NextArrow(props) {
  const { onClick } = props;
  const styles = {
    largeIcon: {
      width: fontSize.fs60,
      height: fontSize.fs60,
    },
  };
  return (
    <NextArrowStyled>
      <IconButton color={colors.lightgrey} onClick={onClick}>
        <ArrowRightIcon style={styles.largeIcon} />
      </IconButton>
    </NextArrowStyled>
  );
}

export default NextArrow;
