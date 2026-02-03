import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../models/product";

interface ProductStateType {
    productRecord: Product | undefined;
    loadingOver: boolean;
    error: string;
}

const initialProductState: ProductStateType = {
    error: '',
    loadingOver: false,
    productRecord: undefined
}

const productSlice = createSlice({
    name: 'product',
    initialState: initialProductState,
    reducers: {
        initiaterequest: (state) => {
            state.error = ''
            state.loadingOver = false
            state.productRecord = undefined
        },
        fetchsuccess: (state, action: PayloadAction<Product>) => {
            state.error = ''
            state.loadingOver = true
            state.productRecord = action.payload
        },
        fetchfailed: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.loadingOver = true
            state.productRecord = undefined
        }
    }
})

export const productReducer = productSlice.reducer
export const {
    initiaterequest: initiatSingleRequestActionCreator,
    fetchsuccess: fetchSingleSuccessActionCreator,
    fetchfailed: fetchSingleFailedActionCreator
} = productSlice.actions