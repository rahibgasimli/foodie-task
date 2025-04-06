import ProductCard from "../ProductCard"

function BestSeller() {
  return (
    <div className="best-seller bg-[var(--background)] m-2 p-2 rounded-xl">
        <div className="best-seller-top m-2">
            <h1 className="font-semibold text-xl">Bestsellers</h1>
        </div>
        <div className="best-seller-cards flex flex-col gap-1.5 m-2">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </div>
  )
}

export default BestSeller