import React from "react";
import FooterStyled from "../styles/Footer.styled.js";
import { YoutubeFilled } from "@ant-design/icons";
import { TwitterOutlined } from "@ant-design/icons";
import { LinkedinFilled } from "@ant-design/icons";
import { FacebookFilled } from "@ant-design/icons";
import { colors } from "../constants/Constants";

function Footer() {
  return (
    <FooterStyled>
      <img
        src={"https://technext.github.io/cozastore/images/icons/logo-01.png"}
        alt="Logo"
      />
      <p className="description">
        Fashion is a popular aesthetic expression at a particular time, place
        and in a specific context, especially in clothing, footwear, lifestyle,
        accessories, makeup.
      </p>
      <div className="icons">
        <YoutubeFilled style={{ color: colors.youtube }} />
        <TwitterOutlined style={{ color: colors.twitter }} />
        <LinkedinFilled style={{ color: colors.linkedin }} />
        <FacebookFilled style={{ color: colors.facebook }} />
      </div>
      <p className="copyright">© Coza Store all rights reserved</p>
    </FooterStyled>
  );
}

export default Footer;
