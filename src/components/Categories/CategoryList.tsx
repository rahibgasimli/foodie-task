
function CategoryList() {
    return (
        <div className="categories">
            <h1 className="font-semibold mb-4 text-xl">Categories</h1>
            <div className="categories-list">
                <div className="category flex justify-between bg-red-500 p-4 font-semibold border-b-1">
                    <h4 >Pizza</h4>
                    <h4 >18 {">"}</h4>
                </div>
                <div className="category flex justify-between bg-red-500 p-4 font-semibold border-b-1">
                    <h4 >Pizza</h4>
                    <h4 >18 {">"}</h4>
                </div>
            </div>
        </div>
    )
}

export default CategoryList