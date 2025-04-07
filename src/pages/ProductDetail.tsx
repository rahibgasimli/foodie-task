import ProductCard from "../components/ProductCard"


function ProductDetail() {
  return (
    <section className="product-details">
        <div className="product-cards">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </section>
  )
}

export default ProductDetail