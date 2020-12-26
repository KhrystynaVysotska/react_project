import React from "react";
import CustomRadio from "./CustomRadio";
import PaymentCardStyled from "../styles/PaymentCard.styled";

function PaymentCard({ title, description, icons, name, ...props }) {
  return (
    <PaymentCardStyled>
      <div className="info">
        <CustomRadio name={name} {...props} style={{ margin: 0 }} />
        <p className="title">{title}</p>
        <div className="icons">{icons}</div>
      </div>
      <p className="description">{description}</p>
    </PaymentCardStyled>
  );
}

export default PaymentCard;
