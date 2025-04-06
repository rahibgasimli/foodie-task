import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Categories from "../pages/Categories"
import ProductDetail from "../pages/ProductDetail"
import MyOrder from "../pages/MyOrder"


function RouterConfig() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/productdetail" element={<ProductDetail/>} />
        <Route path="/orders" element={<MyOrder/>}/>
    </Routes>
  )
}

export default RouterConfig