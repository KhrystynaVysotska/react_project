import React, { useState } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Home from "../pages/Home.js";
import Catalog from "../pages/Catalog.js";
import Cart from "../pages/Cart.js";
import Item from "../pages/Item.js";
import Login from "../pages/Login";
import Success from "../pages/Success";
import Checkout from "../pages/Checkout";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import ProtectedRoute from "../navigation/ProtectedRoute";
import Registration from "./Registration";

function Layout() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("email")
  );
  let location = useLocation();
  let background = location.state && location.state.background;
  let checkout_popup = location.state && location.state.checkout_popup;
  let success_popup = location.state && location.state.success_popup;

  const login = ({ email, password }) => {
    localStorage.setItem("email", email);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("email");
    setIsAuthenticated(false);
  };

  return (
    <>
      {localStorage.getItem("email") && <Navigation logout={logout} />}
      <Switch
        location={success_popup || checkout_popup || background || location}
      >
        <Route path="/" exact>
          <Redirect to="/registration" />
        </Route>

        <Route path="/registration">
          {localStorage.getItem("email") ? (
            <Redirect to="/home" />
          ) : (
            <Registration login={login} />
          )}
        </Route>

        <Route path="/login">
          {localStorage.getItem("email") ? (
            <Redirect to="/home" />
          ) : (
            <Login login={login} />
          )}
        </Route>

        <ProtectedRoute
          isAuthenticated={isAuthenticated}
          path="/cart"
          component={Cart}
        />
        <ProtectedRoute
          isAuthenticated={isAuthenticated}
          path="/catalog"
          component={Catalog}
        />
        <ProtectedRoute
          isAuthenticated={isAuthenticated}
          path="/home"
          component={Home}
        />
        <Route path="*">
          <div>404 Not found </div>
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
      {localStorage.getItem("email") && <Footer />}
    </>
  );
}

export default Layout;
