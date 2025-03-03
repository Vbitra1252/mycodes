export default function Prod() {
    const products = [
        { name: "Printed Cotton Jacket", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
        { name: "Blue Faux Leather", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500, selected: true },
        { name: "Tribal Waterfall Vest", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
        { name: "Braver Bomber Jacket", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
        { name: "Olive Drape Vest", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
        { name: "Black Denim Jacket", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
        { name: "Army Green Jacket", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
    ];

    return (
        <div className="product-container">
            <h2>Products</h2>
            <div className="nav">
                <span>Dashboard / Products</span>
                <div className="filters">
                    <button className="active">Active</button>
                    <button>Inactive</button>
                    <button>All</button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Tags</th>
                        <th>Var</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Low</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index} className={product.selected ? "selected" : ""}>
                            <td><input type="checkbox" defaultChecked={product.selected} /></td>
                            <td>{product.name}</td>
                            <td>{product.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</td>
                            <td>{product.var}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>{product.low}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
