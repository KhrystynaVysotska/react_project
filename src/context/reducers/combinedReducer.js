import { combineReducers } from "redux";
import { favorites } from "./favorites";
import { sweaters } from "./sweaters";
import { selected } from "./selected";

export default combineReducers({
  favorites,
  sweaters,
  selected,
});
