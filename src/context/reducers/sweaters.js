import {
  INIT_SWEATERS,
  GET_SWEATER_BY_ID,
  LOADING_SWEATERS,
  FAILED_SWEATERS,
} from "../actionTypes";

const initialState = {
  isLoading: true,
  errMess: null,
  sweaters: [],
};

export const sweaters = (state = initialState, action) => {
  switch (action.type) {
    case INIT_SWEATERS: {
      return {
        ...state,
        isLoading: false,
        errMess: null,
        sweaters: action.payload,
      };
    }
    case LOADING_SWEATERS: {
      return {
        ...state,
        isLoading: true,
        errMess: null,
        sweaters: [],
      };
    }
    case FAILED_SWEATERS: {
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        sweaters: [],
      };
    }
    default:
      return state;
  }
};
