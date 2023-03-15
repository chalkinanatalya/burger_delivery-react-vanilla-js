import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice";
import productReducer from "./product/productSlice";
import orderReucer, { localStorageMiddleware } from "./order/orderSlice";
import modalReducer from './modalDelivery/modalDeliverySlice';

export const store = configureStore({
    //reads present object state, returns new state
    reducer: {
        category: categoryReducer,
        product: productReducer,
        order: orderReucer,
        modal: modalReducer,
    },

    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(localStorageMiddleware),
});