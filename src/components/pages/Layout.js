import React, { useState } from "react";
import { Switch, Route, Redirect, Link, useLocation } from "react-router-dom";
import Home from "../pages/Home.js";
import Catalog from "../pages/Catalog.js";
import Cart from "../pages/Cart.js";
import Item from "../pages/Item.js";
import Success from "../pages/Success";
import Checkout from "../pages/Checkout";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import ProtectedRoute from "../navigation/ProtectedRoute";

function Layout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  let location = useLocation();
  let background = location.state && location.state.background;
  let checkout_popup = location.state && location.state.checkout_popup;
  let success_popup = location.state && location.state.success_popup;

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <>
      {isAuthenticated && <Navigation />}
      <Switch
        location={success_popup || checkout_popup || background || location}
      >
        <Route path="/" exact>
          {isAuthenticated ? (
            <Redirect to="/home" />
          ) : (
            <div>
              <h1>Homepage</h1>
              <Link to="/home">Go to home</Link>
              <Link to="/catalog">Go to catalog</Link>
              <Link to="/cart">Go to cart</Link>
              <Link to="/item/63">Go to item</Link>
              <Link to="/checkout">Go to checkout</Link>
              <Link to="/success">Go to success</Link>
              <br></br>
              <button onClick={login}>Log in</button>
            </div>
          )}
        </Route>
        <ProtectedRoute
          isAuthenticated={isAuthenticated}
          path="/cart"
          logout={logout}
          component={Cart}
        />
        <ProtectedRoute
          isAuthenticated={isAuthenticated}
          path="/catalog"
          logout={logout}
          component={Catalog}
        />
        <ProtectedRoute
          isAuthenticated={isAuthenticated}
          path="/home"
          logout={logout}
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
      {isAuthenticated && <Footer />}
    </>
  );
}

export default Layout;
