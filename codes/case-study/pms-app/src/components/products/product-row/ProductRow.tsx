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
                <img className="img-box" src={p.imageUrl} alt="NA" title={p.productName} />
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