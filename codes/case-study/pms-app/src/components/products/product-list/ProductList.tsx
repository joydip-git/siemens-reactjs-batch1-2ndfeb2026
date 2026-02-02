import { Component, useEffect, useState } from "react"
import type { Product } from "../../../models/product"
//import { products } from "../../../data/products"
import './ProductList.css'
import ProductRow from "../product-row/ProductRow"
import { getProducts } from "../../../services/product-service"
import type { AxiosResponse } from "axios"
import type { ApiResponse } from "../../../models/apiresponse"

const ProductList = () => {

    // const [productRecords, setProductRecords] = useState<Product[]>(products)
    const [productRecords, setProductRecords] = useState<Product[]>([])
    const [loadingOver, setLoadingOver] = useState(false)
    const [error, setError] = useState('') 

    const fetchProducts = async () => {
        try {
            const resp: AxiosResponse<ApiResponse<Product[]>> = await getProducts()
            const result: ApiResponse<Product[]> = resp.data
            if (result.data !== null) {
                setProductRecords(result.data)
                setLoadingOver(true)
                setError('')
            } else {
                setProductRecords([])
                setLoadingOver(true)
                setError(result.message)
            }
        } catch (err: any) {
            setProductRecords([])
            setLoadingOver(true)
            setError(err.message)
        }       
    }

    useEffect(
        () => {
            fetchProducts()
        },
    )
    if (loadingOver) {
        if (error === '') {
            if (productRecords.length > 0) {
                return (
                    <>
                        <header>
                            <h2 className="text-dark">List of Products</h2>
                        </header>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Rating</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody className="table-dark">
                                {
                                    productRecords.map(
                                        (p) => {
                                            return (
                                                <ProductRow key={p.productId} product={p} />
                                            )
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                    </>
                )
            } else
                return <div>No records found...</div>
        } else
            return <div>{error}</div>
    } else {
        return <div>Wait...loading data</div>
    }
}

export default ProductList


// class X extends Component{
//     componentDidMount(): void {
        
//     }
//     componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        
//     }
//     componentWillUnmount(): void {
        
//     }
// }