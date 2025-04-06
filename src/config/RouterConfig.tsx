import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Categories from "../pages/Categories"
import ProductDetail from "../pages/ProductDetail"


function RouterConfig() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/productdetail" element={<ProductDetail/>} />
    </Routes>
  )
}

export default RouterConfig