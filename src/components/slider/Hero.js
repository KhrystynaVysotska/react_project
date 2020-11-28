import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { fontSize } from "../constants/Constants.js";

function Hero({ title, description }) {
  let history = useHistory();
  const button = {
    roundedButton: {
      borderRadius: fontSize.fs24,
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
        onClick={() => history.push("/catalog")}
      >
        SHOP NOW
      </Button>
    </div>
  );
}

export default Hero;
