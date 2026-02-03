import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./products-slice";
import { productReducer } from "./product-slice";
import { createLogger } from 'redux-logger'

//create reducer map
const reducerMap = combineReducers({
    productsState: productsReducer,
    productState: productReducer
})

//create the store with the reducer map
const AppReduxStore = configureStore({
    reducer: reducerMap,
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(createLogger())
    },
})
export default AppReduxStore