import { Provider } from "react-redux";
import { store } from "./store";

export const GlobalProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
