import React, { useState } from "react";
import Navigation from "./components/navigation/Navigation.js";
import Layout from "./components/pages/Layout.js";
import Footer from "./components/footer/Footer";
import AppStyled from "./App.styled.js";

function App() {
  const [favorites, setFavorites] = useState([]);
  return (
    <AppStyled>
      <Navigation favorites={favorites} setFavorites={setFavorites} />
      <Layout favorites={favorites} setFavorites={setFavorites}/>
      <Footer />
    </AppStyled>
  );
}

export default App;
