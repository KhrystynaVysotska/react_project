import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home.js";
import Catalog from "../pages/Catalog.js";
import Cart from "../pages/Cart.js";
import Item from "../pages/Item.js";
function Layout() {
  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/catalog">
          <Catalog />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      {background && (
        <Route path="/item/:id">
          <Item />
        </Route>
      )}
    </>
  );
}

export default Layout;
