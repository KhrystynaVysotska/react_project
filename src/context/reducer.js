import { ADD_FAVORITE, REMOVE_FAVORITE } from "./actions";

const favoritesReducer = (state, action) => {
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
          (favorite) => favorite.id !== action.payload.id
        ),
      };
    }
    default:
      return state;
  }
};

export default favoritesReducer;
