import { ADD_FOOD, REMOVE_FOOD } from "../actions/types";

const pantryReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FOOD:
      return state.concat(action.data);
    case REMOVE_FOOD:
      return state.filter(f => f.id !== action.data.id)
  }
  return state;
};

export default pantryReducer;