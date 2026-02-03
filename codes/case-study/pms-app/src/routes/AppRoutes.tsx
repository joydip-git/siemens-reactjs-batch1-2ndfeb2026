import { Route, Routes} from "react-router-dom"
import { lazy } from "react"
//import { useRoutes, type RouteObject } from "react-router-dom"
// import ProductList from "../components/products/product-list/ProductList"
// import ProductDetail from "../components/products/product-detail/ProductDetail"
// import AddProduct from "../components/products/add-product/AddProduct"
// import UpdateProduct from "../components/products/update-product/UpdateProduct"
// import Home from "../components/common/home/Home"
// import PageNotFound from "../components/common/page-not-found/PageNotFound"

const ProductList = lazy(() => import('../components/products/product-list/ProductList'))

const ProductDetail = lazy(() => import("../components/products/product-detail/ProductDetail"))
const AddProduct = lazy(() => import("../components/products/add-product/AddProduct"))
const UpdateProduct = lazy(() => import("../components/products/update-product/UpdateProduct"))
const Home = lazy(() => import("../components/common/home/Home"))
const PageNotFound = lazy(() => import("../components/common/page-not-found/PageNotFound"))

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="products">
                <Route element={<ProductList />} path="all" />
                <Route element={<ProductDetail />} path="view/:id" />
                <Route element={<AddProduct />} path="add" />
                <Route element={<UpdateProduct />} path="edit/:id" />
            </Route>
            <Route path="home" element={<Home />} />
            <Route path="" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
    /*
        const productRoutes: RouteObject = {
            path: 'products',
            children: [
                {
                    path: 'all', element: <ProductList />
                },
                {
                    path: 'view/:id', element: <ProductDetail />
                },
                {
                    path: 'edit/:id', element: <UpdateProduct />
                },
                {
                    path: 'add', element: <AddProduct />
                }
            ]
        }
    
        const commonRoutes: RouteObject = {
            path: '',
            children: [
                {
                    path: 'home', element: <Home />
                },
                {
                    path: '', element: <Home />
                },
                {
                    path: '*', element: <PageNotFound />
                }
            ]
        }
        return useRoutes([productRoutes, commonRoutes])
    */
}

export default AppRoutes