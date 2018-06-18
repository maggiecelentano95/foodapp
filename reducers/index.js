import PantryRepo from "../data/repo/PantryRepo"

import pantryReducer from "./pantry";

const initialState = () => {
    return { pantry: PantryRepo.getPantry("maggie")};
};

export const reducer = (state = initialState(), action) => {
    let pantry = pantryReducer(state.pantry, action);

    return {
        pantry: pantry  
    };
};