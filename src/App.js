import React from "react";
import Navigation from "./components/navigation/Navigation.js";
import Layout from "./components/pages/Layout.js";
import Footer from "./components/footer/Footer";
import AppStyled from "./App.styled.js";

function App() {
  return (
    <AppStyled>
      <Navigation />
      <Layout />
      <Footer />
    </AppStyled>
  );
}

export default App;
