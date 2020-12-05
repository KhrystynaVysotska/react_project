import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actionTypes";

const initialState = {
  favorites: [],
};

export const favorites = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE: {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    }
    case REMOVE_FAVORITE: {
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};
