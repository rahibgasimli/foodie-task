import AddTips from "../components/MyOrder/AddTips"
import OrderCard from "../components/MyOrder/OrderCard"
import { Button } from "../components/ui/button"

function MyOrder() {
  return (
    <section className="my-order flex flex-col gap-4">
      <div className="order-cards bg-[var(--background)]  gap-5 rounded-4xl">
        <OrderCard/>
        <OrderCard/>
      </div>
      <div className="add-tips bg-[var(--background)]">
        <AddTips/>
      </div>
      <div className="bottom-button items-center justify-center p-4 bg-[var(--background)]">
            <Button className="w-full">Place Order $50</Button>
          </div>
    </section>
  )
}

export default MyOrder