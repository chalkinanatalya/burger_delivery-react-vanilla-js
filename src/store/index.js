import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice";
import productReducer from "./product/productSlice";
import orderReucer, { localStorageMiddleware } from "./order/orderSlice";
import modalReducer from './modalDelivery/modalDeliverySlice';
import formReducer from './form/formSlice';

export const store = configureStore({
    //reads present object state, returns new state
    reducer: {
        category: categoryReducer,
        product: productReducer,
        order: orderReucer,
        modal: modalReducer,
        form: formReducer,
    },

    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(localStorageMiddleware),
});