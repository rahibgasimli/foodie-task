import { Button } from "../ui/button"

function AddTips() {
  return (
    <div className="add-tips flex flex-col gap-2 p-3 rounded-4xl">
        <h1 className="font-semibold">Add a Tip</h1>
        <div className="tips-buttons flex justify-around">
            <Button size="sm" variant="outline">$10</Button>
            <Button size="sm" variant="outline">$20</Button>
            <Button size="sm" variant="outline">$25</Button>
            <Button size="sm" variant="outline">$50</Button>
            <Button size="sm" variant="outline">$100</Button>
        </div>
    </div>
  )
}

export default AddTips