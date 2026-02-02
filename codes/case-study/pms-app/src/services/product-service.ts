//methods to perform CRUD operations against the product data by sending HTTP request to backend RESTful API server

import type { AxiosResponse } from "axios";
import axiosInstance from "../config/axiosinstance";
import type { ApiResponse } from "../models/apiresponse";
import type { Product } from "../models/product";

export function getProducts(): Promise<AxiosResponse<ApiResponse<Product[]>>> {
    return axiosInstance.get<ApiResponse<Product[]>>('products')
}

export function getProduct(id: number): Promise<AxiosResponse<ApiResponse<Product>>> {
    return axiosInstance.get<ApiResponse<Product>>(`products/${id}`)
}