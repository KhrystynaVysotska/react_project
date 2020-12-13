import { ADD_SELECTED, REMOVE_SELECTED } from "../actionTypes";

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
          if (key !== action.payload) {
            new_state[key] = state.selected[key];
          }
          return new_state;
        }, {}),
      };
    }
    default:
      return state;
  }
};
