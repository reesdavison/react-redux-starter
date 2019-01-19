import defaultState from "../state/defaultState";
import * as C from "../constants";


const exampleReducer = (state = defaultState.example, action) => {
  switch (action.type) {
    case C.DO_SOMETHING:
      return {
        ...state,
        task1: true
      }
    case C.DO_SOMETHING2:
      return {
        ...state,
        task2: true
      }
    default: {
      return state;
    }
  }
}


export const example = exampleReducer;
