import { createContext, useReducer, useContext } from "react";
import favoritesReducer from "./reducer";

const initialState = {
  favorites: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ value, children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        favorites: state.favorites,
        dispatch,
        ...value,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
