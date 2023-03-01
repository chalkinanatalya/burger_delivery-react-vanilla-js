import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice";

export const store = configureStore({
    //reads present object state, returns new state
    reducer: {
        category: categoryReducer,
    },
});