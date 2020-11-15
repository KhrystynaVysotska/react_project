import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import NavigationStyled from "../styles/Navigation.styled.js";
import IconStyled from "../styles/Icon.styled.js";
import MenuStyled from "../styles/Menu.styled.js";
import { fontSize } from "../constants/Constants.js";

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 84) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <NavigationStyled scrolled={scrolled}>
      <img
        src={"https://technext.github.io/cozastore/images/icons/logo-01.png"}
        alt="Logo"
      />
      <MenuStyled>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <Badge color="primary" badgeContent="new">
              <NavLink exact to="/catalog" activeClassName="active">
                Catalog
              </NavLink>
            </Badge>
          </li>
          <li>
            <NavLink exact to="/cart" activeClassName="active">
              Cart
            </NavLink>
          </li>
        </ul>
      </MenuStyled>

      <IconStyled>
        <SearchIcon />
        <Badge color="primary" overlap="circle" badgeContent={0} showZero>
          <ShoppingCartIcon />
        </Badge>
        <Badge color="primary" overlap="circle" badgeContent={0} showZero>
          <FavoriteBorderIcon />
        </Badge>
      </IconStyled>
    </NavigationStyled>
  );
}

export default Navigation;
