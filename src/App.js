import Navigation from "./components/navigation/Navigation.js";
import Layout from "./components/pages/Layout.js";
import Footer from "./components/footer/Footer";
import AppStyled from "./App.styled.js";
import { GlobalProvider } from "./context/globalState";

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
