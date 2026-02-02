import { useState } from "react"
import type { Product } from "../../../models/product"
import { products } from "../../../data/products"
import './ProductList.css'
import ProductRow from "../product-row/ProductRow"

const ProductList = () => {

    const [productRecords, setProductRecords] = useState<Product[]>(products)

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
}

export default ProductList