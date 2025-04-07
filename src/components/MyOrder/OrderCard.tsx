import { Button } from "../ui/button"



import productLogo from "../../assets/images/home/productLogo.jpg"

function OrderCard() {
  return (
    <div className="order-card flex items-center bg-[var(--background)] rounded-[8px] p-2 justify-between">
        <div className="order-card-left flex flex-col gap-2">
            <h2 className="font-semibold">Margherita Pizza</h2>
            <h4 className="font-semibold">$45</h4>
            <p className="text-[12px] text-[var(--popover-foreground)]">A Classic Cheesy Margherita</p>
            {/* <div className="product-ratings flex gap-1.5 items-center text-[10px] text-[var(--muted-foreground)]"><h5 className="flex items-center justify-center text-center text-[10px]"><IoStar className="text-yellow-400 text-[10px] mb-1"/> 4.5</h5> <h6>(19 Ratings)</h6></div> */}
            <div className="order-card-buttons flex gap-2">
                <Button variant="outline" size="sm">Edit</Button>
                <Button variant="outline" size="sm">Delete</Button>
            </div>
        </div>
        <div className="order-card-right flex flex-col gap-1.5">
            <div className="card-photo"><img className="w-32" src={productLogo} alt="" /></div>
            <Button variant="outline" size="lg">Add</Button>
            <h6 className="items-end text-end text-[12px] font-semibold">$25</h6>
        </div>
    </div>
  )
}

export default OrderCard