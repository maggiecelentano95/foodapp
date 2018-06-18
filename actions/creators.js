import {
    ADD_FOOD,
    DELETE_FOOD
  } from "./types";
  
  import Food from "../data/Food";
 
  export const addFood = (name, type, expiration) => {
    return ({ type: ADD_FOOD, data: new Food(name, type, expiration) });
  };

  export const deleteFood = id => {
    return { type: DELETE_FOOD, data: id };
  };
