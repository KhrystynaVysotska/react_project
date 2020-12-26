import Layout from "./components/pages/Layout.js";
import AppStyled from "./components/styles/App.styled";
import { GlobalProvider } from "./context/globalProvider";

function App() {
  return (
    <GlobalProvider>
      <AppStyled>
        <Layout />
      </AppStyled>
    </GlobalProvider>
  );
}

export default App;
