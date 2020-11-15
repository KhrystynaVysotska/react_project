import React from "react";
import Navigation from "./components/navigation/Navigation.js";
import Layout from "./components/pages/Layout.js";
import AppStyled from "./App.styled.js";

function App() {
  return (
    <AppStyled>
      <Navigation />
      <Layout />
    </AppStyled>
  );
}

export default App;
