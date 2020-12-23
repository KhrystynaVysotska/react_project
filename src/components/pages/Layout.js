import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home.js";
import Catalog from "../pages/Catalog.js";
import Cart from "../pages/Cart.js";
import Item from "../pages/Item.js";
import Success from "../pages/Success";
import Checkout from "../pages/Checkout";
function Layout() {
  let location = useLocation();
  let background = location.state && location.state.background;
  let checkout_popup = location.state && location.state.checkout_popup;
  let success_popup = location.state && location.state.success_popup;

  return (
    <>
      <Switch
        location={success_popup || checkout_popup || background || location}
      >
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

      {success_popup && (
        <Route path="/success">
          <Success />
        </Route>
      )}

      {checkout_popup && (
        <Route path="/checkout">
          <Checkout />
        </Route>
      )}
    </>
  );
}

export default Layout;
