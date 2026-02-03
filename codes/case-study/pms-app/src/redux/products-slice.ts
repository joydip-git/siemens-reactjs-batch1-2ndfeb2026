import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../models/product";

interface ProductsStateType {
    productRecords: Product[];
    loadingOver: boolean;
    error: string;
}

const initialProductsState: ProductsStateType = {
    error: '',
    loadingOver: false,
    productRecords: []
}

const productsSlice = createSlice({
    name: 'products',
    initialState: initialProductsState,
    reducers: {
        initiate_request: (state) => {
            state.error = ''
            state.loadingOver = false
            state.productRecords = []
        },
        fetch_success: (state, action: PayloadAction<Product[]>) => {
            state.error = ''
            state.loadingOver = true
            state.productRecords = action.payload
        },
        fetch_failed: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.loadingOver = true
            state.productRecords = []
        }
    }
})

export const productsReducer = productsSlice.reducer
export const {
    initiate_request: initiateRequestActionCreator,
    fetch_success: fetchSuccessActionCreator,
    fetch_failed: fetchFailedActionCreator
} = productsSlice.actions