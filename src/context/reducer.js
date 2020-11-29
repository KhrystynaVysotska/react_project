import { ADD_FAVORITE, REMOVE_FAVORITE, INIT_SWEATERS, ADD_SWEATER, REMOVE_SWEATER, UPDATE_SWEATER } from "./actions";

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

const sweatersReducer = (state, action) => {
  switch (action.type) {
    case INIT_SWEATERS: {
      return {
        ...state,
        sweaters: action.payload,
      };
    }
    case ADD_SWEATER: {
      return {
        ...state,
        sweaters: [action.payload, ...state.sweaters],
      };
    }
    case UPDATE_SWEATER: {
      const updatedSweater = action.payload;

      const updatedSweaters = state.sweaters.map((sweater) => {
        if (sweater.id === updatedSweater.id) {
          return updatedSweater;
        }
        return sweater;
      });
      return {
        ...state,
        sweaters: updatedSweaters,
      };
    }
    case REMOVE_SWEATER: {
      return {
        ...state,
        sweaters: state.sweaters.filter(
          (sweater) => sweater.id !== action.payload.id
        ),
      };
    }
    default:
      return state;
  }
};

const combineReducers = (state, action) => {
  const reducers = [favoritesReducer, sweatersReducer];

  return reducers.reduce((st, fn) => fn(st, action), state);
};

export default combineReducers;
