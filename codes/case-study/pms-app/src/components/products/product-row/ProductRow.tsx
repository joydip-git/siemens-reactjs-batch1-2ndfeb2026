import { Link } from "react-router-dom"
import type { Product } from "../../../models/product"
import './ProductRow.css'

type ProductRowPropType = {
    product: Product
}
const ProductRow = (props: Readonly<ProductRowPropType>) => {
    const { product: p } = props

    return (
        <tr>
            <td>
                <Link to={`/products/view/${p.productId}`}>
                    <img className="img-box" src={p.imageUrl} alt="NA" title={p.productName} />
                </Link>
            </td>
            <td>{p.productName}</td>
            <td>{p.price}</td>
            <td>{p.starRating}</td>
            <td>
                <button type="button" className="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
}

export default ProductRow