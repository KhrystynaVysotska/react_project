import Navigation from "./components/navigation/Navigation.js";
import Layout from "./components/pages/Layout.js";
import Footer from "./components/footer/Footer";
import AppStyled from "./components/styles/App.styled";
import { GlobalProvider } from "./context/globalProvider";

function App() {
  return (
    <GlobalProvider>
      <AppStyled>
        <Navigation />
        <Layout />
        <Footer />
      </AppStyled>
    </GlobalProvider>
  );
}

export default App;
