import { createContext, useReducer, useContext } from "react";
import globalReducer from "./reducer";

const initialState = {
  favorites: [],
  sweaters: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ value, children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        favorites: state.favorites,
        sweaters: state.sweaters,
        dispatch,
        ...value,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
