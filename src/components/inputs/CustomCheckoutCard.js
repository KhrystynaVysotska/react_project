import React from "react";
import { useField } from "formik";
import CustomRadio from "./CustomRadio";
import CustomCheckoutCardStyled from "../styles/CustomCheckoutCard.styled";

function CustomCheckoutCard({ title, description, price, name, ...props }) {
  return (
    <CustomCheckoutCardStyled>
      <div className="info">
        <CustomRadio name={name} {...props} style={{ margin: 0 }} />
        <p className="title">{title}</p>
        <p className="price">{price}</p>
      </div>
      <p className="description">{description}</p>
    </CustomCheckoutCardStyled>
  );
}

export default CustomCheckoutCard;
