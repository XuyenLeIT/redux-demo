import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./countReducer";
import productReducer from "./productReducer";

export const storeM = configureStore({
    reducer:{
        counter:countReducer,
        productR:productReducer
    }
});