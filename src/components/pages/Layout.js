import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home.js";
import Catalog from "../pages/Catalog.js";
import Cart from "../pages/Cart.js";

function Layout() {
  return (
    <Switch>
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
  );
}

export default Layout;
