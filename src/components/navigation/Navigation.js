import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { NavLink } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import NavigationStyled from "../styles/Navigation.styled.js";
import IconStyled from "../styles/Icon.styled.js";
import MenuStyled from "../styles/Menu.styled.js";

function Navigation() {
  const selectedFavoriteSweaters = useSelector(
    (state) => state.favorites.favorites
  );
  const [numberOfFavoriteSweaters, setNumberOfFavoriteSweaters] = useState(
    selectedFavoriteSweaters.length
  );

  useEffect(() => {
    setNumberOfFavoriteSweaters(selectedFavoriteSweaters.length);
  }, [selectedFavoriteSweaters]);

  const [scrolled, setScrolled] = useState(false);

  const changeBackground = useCallback(() => {
    if (window.scrollY >= 84) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, [changeBackground]);

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
        <Badge color="primary" overlap="circle" badgeContent={0} showZero>
          <ShoppingCartIcon />
        </Badge>
        <Badge
          color="primary"
          overlap="circle"
          badgeContent={numberOfFavoriteSweaters}
          showZero
        >
          <FavoriteBorderIcon />
        </Badge>
      </IconStyled>
    </NavigationStyled>
  );
}

export default Navigation;
