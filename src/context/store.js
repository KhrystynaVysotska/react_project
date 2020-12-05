import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/combinedReducer";

export const store = createStore(reducer, applyMiddleware(thunk));
