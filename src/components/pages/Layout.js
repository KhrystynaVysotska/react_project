import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home.js";
import Catalog from "../pages/Catalog.js";
import Cart from "../pages/Cart.js";

function Layout({ favorites, setFavorites }) {
  return (
    <Switch>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/catalog">
        <Catalog favorites={favorites} setFavorites={setFavorites} />
      </Route>
      <Route path="/">
        <Home favorites={favorites} setFavorites={setFavorites} />
      </Route>
    </Switch>
  );
}

export default Layout;
