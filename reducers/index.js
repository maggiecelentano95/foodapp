import { ADD_FOOD, REMOVE_FOOD, CHANGE_THEME } from "../actions/types";

export const pantry = (state = [], action) => {
    switch (action.type) {
        case ADD_FOOD:
          return [
            ...state,
            food({}, action)
          ]
        case REMOVE_FOOD:
          return state.filter(food => food.id !== action.data.id)
        default:
          return state
      }
};

export const food = (state = {}, action) => {
  switch (action.type) {
      case ADD_FOOD:
        return {
          name: action.data.name,
          type: action.datatype,
          expiration: action.data.expiration,
          id: action.id
        } 
      default:
        return state        
    }
};

export const settings = (state = {}, action) => {
  switch (action.type){
    case CHANGE_THEME:
      return {
      ...state,
      theme: action.data
    }
    default:
      return state 
  }
};
