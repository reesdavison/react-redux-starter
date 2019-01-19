import { combineReducers } from "redux";
import defaultState from "../state/defaultState";
import * as C from '../constants';

import { example } from "./ExampleReducer";

const appReducer = combineReducers({
  example
});

const rootReducer = (state = defaultState, action) => {
  if (action.type === C.RESET_STATE) {
    state = defaultState;
  }
  return appReducer(state, action)
}

export default rootReducer
