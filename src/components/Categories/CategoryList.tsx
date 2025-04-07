import categories from "../../lib/data/categories.json"


function CategoryList() {
    return (
        <div className="categories bg-[var(--background)] p-3 rounded-2xl">
            <h1 className="font-semibold mb-4 text-xl">Categories</h1>
            <div className="categories-list">
               {
                categories.categories.map((category) => (
                    <div className="category flex justify-between  p-4 font-semibold border-b-1">
                    <h4 >{category.name}</h4>
                    <h4 >{category.count} {">"}</h4>
                </div>
                  ))
               }
                
            </div>
        </div>
    )
}

export default CategoryList