import React from "react";
import Button from "@material-ui/core/Button";
import { fontSize, colors } from "../constants/Constants.js";

function Hero({ title, description }) {
  const button = {
    roundedButton: {
      borderRadius: "23px",
      height: fontSize.fs48,
      minWidth: fontSize.fs160,
    },
  };
  return (
    <div className="hero-section">
      <h1 className="title animated">{title}</h1>
      <p className="description animated">{description}</p>
      <Button
        className="animated"
        color="primary"
        variant="contained"
        size="large"
        style={button.roundedButton}
      >
        SHOP NOW
      </Button>
    </div>
  );
}

export default Hero;
