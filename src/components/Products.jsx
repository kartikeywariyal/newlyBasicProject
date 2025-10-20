import React, { useState } from "react"
import axios from 'axios'
import { FiEdit } from "react-icons/fi"

const Products = () => {
    const [products, setProducts] = useState([])
    const [editingProduct, setEditingProduct] = useState(null)
    const [editForm, setEditForm] = useState({ name: "", price: "", image: "" })

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/products/${id}`)
            setProducts(products.filter((p) => p.id !== id))
        } catch (err) {
            console.error("Error deleting product:", err) 
        }
    }

    const getData = async () => {
        try {
            const res = await axios.get('/api/products')
            setProducts(res.data)
        } catch (err) {
            console.error("Error fetching products:", err) 
        }
    }

    const openEditModal = (product) => {
        setEditingProduct(product)
        setEditForm({ name: product.name, price: product.price, image: product.image })
    }

    const handleEditChange = (e) => {
        const { name, value } = e.target
        setEditForm({ ...editForm, [name]: value })
    }

    const saveEdit = async () => {
        try {
            await axios.put(`/api/products/${editingProduct.id}`, editForm)
            const res2 = await axios.get(`/api/products/${editingProduct.id}`)
            let p2 = products
            const index = p2.findIndex(p => p.id === editingProduct.id)
            p2[index] = res2.data
            setProducts([...p2])
            setEditingProduct(null)
        } catch (err) {
            console.error("Error updating product:", err)
        }
    }

    const closeEditModal = () => setEditingProduct(null)

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-8">Products Page</h1>

            <div className="text-center mb-8">
                <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition" onClick={getData}>
                    Get Data
                </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col justify-between relative">
                        {product.image && (
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                        )}
                        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                        <p className="text-gray-600 mb-4">Price: ₹{product.price}</p>
                        
                        <div className="flex justify-between">
                            <button
                                onClick={() => handleDelete(product.id)}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                            >
                                Delete
                            </button>
                            <button
                                onClick={() => openEditModal(product)}
                                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition flex items-center gap-1"
                            >
                                <FiEdit /> Edit
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {products.length === 0 && (
                <p className="text-center text-gray-500 mt-8">
                    No products to display. Click “Get Data” to load products.
                </p>
            )}

            {/* Edit Modal */}
            {editingProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-xl w-96">
                        <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
                        <input
                            type="text"
                            name="name"
                            value={editForm.name}
                            onChange={handleEditChange}
                            placeholder="Name"
                            className="w-full mb-3 p-2 border rounded"
                        />
                        <input
                            type="number"
                            name="price"
                            value={editForm.price}
                            onChange={handleEditChange}
                            placeholder="Price"
                            className="w-full mb-3 p-2 border rounded"
                        />
                        <input
                            type="text"
                            name="image"
                            value={editForm.image}
                            onChange={handleEditChange}
                            placeholder="Image URL"
                            className="w-full mb-4 p-2 border rounded"
                        />
                        <div className="flex justify-end gap-3">
                            <button onClick={closeEditModal} className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">Cancel</button>
                            <button onClick={saveEdit} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Products
