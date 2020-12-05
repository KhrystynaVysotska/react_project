import { combineReducers } from "redux";
import { favorites } from "./favorites";
import { sweaters } from "./sweaters";

export default combineReducers({
  favorites,
  sweaters,
});
