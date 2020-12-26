import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
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
  const addedToCartSweaters = useSelector((state) => state.selected.selected);

  const [numberOfFavoriteSweaters, setNumberOfFavoriteSweaters] = useState(
    selectedFavoriteSweaters.length
  );

  const [numberOfSweatersInCart, setNumberOfSweaterInCart] = useState(
    Object.keys(addedToCartSweaters).length
  );

  useEffect(() => {
    setNumberOfFavoriteSweaters(selectedFavoriteSweaters.length);
  }, [selectedFavoriteSweaters]);

  useEffect(() => {
    setNumberOfSweaterInCart(Object.keys(addedToCartSweaters).length);
  }, [addedToCartSweaters]);

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
            <NavLink exact to="/home" activeClassName="active">
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
        <Badge
          color="primary"
          overlap="circle"
          badgeContent={numberOfSweatersInCart}
          showZero
        >
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
