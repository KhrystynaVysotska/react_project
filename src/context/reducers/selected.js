import { ADD_SELECTED, REMOVE_SELECTED } from "../actionTypes";

const initialState = {
  selected: [],
};

export const selected = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SELECTED: {
      return {
        ...state,
        selected: [...state.selected, action.payload],
      };
    }
    case REMOVE_SELECTED: {
      return {
        ...state,
        selected: state.selected.filter((item) => item !== action.payload),
      };
    }
    default:
      return state;
  }
};
