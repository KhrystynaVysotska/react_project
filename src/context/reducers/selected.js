import { ADD_SELECTED, REMOVE_SELECTED, CLEAR_CART } from "../actionTypes";

const initialState = {
  selected: {},
};

export const selected = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SELECTED: {
      return {
        ...state,
        selected: { ...state.selected, ...action.payload },
      };
    }
    case REMOVE_SELECTED: {
      return {
        ...state,
        selected: Object.keys(state.selected).reduce((new_state, key) => {
          if (key != action.payload) {
            new_state[key] = state.selected[key];
          }
          return new_state;
        }, {}),
      };
    }
    case CLEAR_CART: {
      return {
        ...state,
        selected: {},
      };
    }
    default:
      return state;
  }
};
