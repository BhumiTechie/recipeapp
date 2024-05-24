import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./Reducers/recipeSlice";

export const store = configureStore({
    reducer: {
        recipeReducer: recipeSlice,
    },
});