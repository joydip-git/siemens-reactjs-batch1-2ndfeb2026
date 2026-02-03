import { useEffect, useState } from "react"
import type { Product } from "../../../models/product"
//import { products } from "../../../data/products"
import './ProductList.css'
import ProductRow from "../product-row/ProductRow"
import { getProducts } from "../../../services/product-service"
import type { AxiosResponse } from "axios"
import type { ApiResponse } from "../../../models/apiresponse"
import { useDispatch, useSelector } from "react-redux";
import { fetchFailedActionCreator, fetchSuccessActionCreator, initiateRequestActionCreator } from "../../../redux/products-slice"

// const ProductList = () => {

//     // const [productRecords, setProductRecords] = useState<Product[]>(products)
//     const [productRecords, setProductRecords] = useState<Product[]>([])
//     const [loadingOver, setLoadingOver] = useState(false)
//     const [error, setError] = useState('')

//     const fetchProducts = async () => {
//         try {
//             const resp: AxiosResponse<ApiResponse<Product[]>> = await getProducts()
//             const result: ApiResponse<Product[]> = resp.data
//             if (result.data !== null) {
//                 setProductRecords(result.data)
//                 setLoadingOver(true)
//                 setError('')
//             } else {
//                 setProductRecords([])
//                 setLoadingOver(true)
//                 setError(result.message)
//             }
//         } catch (err:any) {
//             setProductRecords([])
//             setLoadingOver(true)
//             setError(err.message)
//         }
//     }

//     useEffect(
//         () => {
//             fetchProducts()
//         },
//         []
//     )
//     if (loadingOver) {
//         if (error === '') {
//             if (productRecords.length > 0) {
//                 return (
//                     <>
//                         <header>
//                             <h2 className="text-dark">List of Products</h2>
//                         </header>
//                         <table className="table table-hover">
//                             <thead>
//                                 <tr>
//                                     <th>Image</th>
//                                     <th>Name</th>
//                                     <th>Price</th>
//                                     <th>Rating</th>
//                                     <th>Delete</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="table-dark">
//                                 {
//                                     productRecords.map(
//                                         (p) => {
//                                             return (
//                                                 <ProductRow key={p.productId} product={p} />
//                                             )
//                                         }
//                                     )
//                                 }
//                             </tbody>
//                         </table>
//                     </>
//                 )
//             } else
//                 return <div>No records found...</div>
//         } else
//             return <div>{error}</div>
//     } else {
//         return <div>Wait...loading data</div>
//     }
// }

const ProductList = () => {

    //subscribing to a state from the store

    const subscribedState = useSelector((reducerMap: any) => reducerMap.productsState)
    const dispatch = useDispatch()
    const { productRecords, loadingOver, error } = subscribedState

    const fetchProducts = async () => {
        //dispatch action for default state -> reset the state
        const initiateAction = initiateRequestActionCreator()
        
        dispatch(initiateAction)
        try {
            const resp: AxiosResponse<ApiResponse<Product[]>> = await getProducts()
            const result: ApiResponse<Product[]> = resp.data
            if (result.data !== null) {
                //dispatch succes action
                const fetchAction = fetchSuccessActionCreator(result.data)
                dispatch(fetchAction)
            } else {
                //dispatch failure action
                const failedAction = fetchFailedActionCreator(result.message)
                dispatch(failedAction)
            }
        } catch (err: any) {
            //dispatch failure action
            const failedAction = fetchFailedActionCreator(err.message)
            dispatch(failedAction)
        }
    }

    useEffect(
        () => {
            fetchProducts()
        },
        []
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

