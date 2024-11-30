import { FaPlus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import profile from "../assets/profile.png";

function Products() {
    return (
        <div className="p-4 dark:bg-gray-900">
            <div className="flex items-center justify-between mb-8">
                <button onClick={() => document.getElementById('addProductModal').showModal()} className="bg-gradient-to-r from-black to-gray-800 text-white p-3 rounded-2xl flex items-center gap-2 hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200">
                    <FaPlus className="animate-pulse"/>
                    Add Product
                </button>
            </div>
            <dialog id="addProductModal" className="p-8 rounded-xl shadow-2xl backdrop-blur-sm bg-white dark:bg-gray-800">
                <div className="flex flex-col gap-6">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent dark:from-white dark:to-gray-300">Add New Product</h2>
                    <form className="flex flex-col gap-5">
                        <input type="text" placeholder="Product Name" className="border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white p-3 rounded-lg focus:border-black dark:focus:border-white focus:outline-none transition duration-200 hover:border-gray-300 dark:hover:border-gray-600"/>
                        <input type="number" placeholder="Price" className="border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white p-3 rounded-lg focus:border-black dark:focus:border-white focus:outline-none transition duration-200 hover:border-gray-300 dark:hover:border-gray-600"/>
                        <input type="number" placeholder="Stock" className="border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white p-3 rounded-lg focus:border-black dark:focus:border-white focus:outline-none transition duration-200 hover:border-gray-300 dark:hover:border-gray-600"/>
                        <select className="border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white p-3 rounded-lg focus:border-black dark:focus:border-white focus:outline-none transition duration-200 hover:border-gray-300 dark:hover:border-gray-600">
                            <option value="">Select Category</option>
                            <option value="electronics">Electronics</option>
                            <option value="fashion">Fashion</option>
                        </select>
                        <div className="relative">
                            <input type="file" accept="image/*" className="border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white p-3 rounded-lg w-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800"/>
                        </div>
                        <div className="flex gap-4 justify-end mt-2">
                            <button type="button" onClick={() => document.getElementById('addProductModal').close()} className="bg-gray-100 dark:bg-gray-700 text-black dark:text-white px-6 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-200">
                                Cancel
                            </button>
                            <div className="flex gap-2">
                                <button type="button" onClick={() => document.getElementById('categoryModal').showModal()} className="bg-gradient-to-r from-purple-600 to-indigo-800 text-white px-6 py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200">
                                    Manage Categories
                                </button>
                                <dialog id="categoryModal" className="p-8 rounded-xl shadow-2xl backdrop-blur-sm bg-white dark:bg-gray-800">
                                    <div className="flex flex-col gap-6">
                                        <h2 className="text-3xl font-bold bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent dark:from-white dark:to-gray-300">Manage Categories</h2>
                                        <div className="flex gap-4">
                                            <input type="text" placeholder="New Category Name" className="flex-1 border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white p-3 rounded-lg focus:border-black dark:focus:border-white focus:outline-none transition duration-200 hover:border-gray-300 dark:hover:border-gray-600"/>
                                            <button className="bg-gradient-to-r from-purple-600 to-indigo-800 text-white px-6 py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200">
                                                Add
                                            </button>
                                        </div>
                                        <div className="max-h-64 overflow-y-auto">
                                            <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700">
                                                <span className="dark:text-white">Electronics</span>
                                                <button className="text-red-500 hover:text-red-700">Delete</button>
                                            </div>
                                            <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700">
                                                <span className="dark:text-white">Fashion</span>
                                                <button className="text-red-500 hover:text-red-700">Delete</button>
                                            </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <button onClick={() => document.getElementById('categoryModal').close()} className="bg-gray-100 dark:bg-gray-700 text-black dark:text-white px-6 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-200">
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </dialog>
                                <button type="submit" className="bg-gradient-to-r from-black to-gray-800 text-white px-6 py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200">
                                    Add Product
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </dialog>
            <div className="mt-4">
                <table className="w-full border-collapse border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                    <thead>
                        <tr className="dark:text-white">
                            <th className="p-4 text-left font-semibold">Image</th>
                            <th className="p-4 text-left font-semibold">Name</th>
                            <th className="p-4 text-left font-semibold">Price</th>
                            <th className="p-4 text-left font-semibold">Stock</th>
                            <th className="p-4 text-left font-semibold">Category</th>
                            <th className="p-4 text-left font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white">
                            <td className="p-4">
                                <img src={profile} alt="Product" className="w-16 h-16 object-cover"/>
                            </td>
                            <td className="p-4">Product 1</td>
                            <td className="p-4">$99.99</td>
                            <td className="p-4">50</td>
                            <td className="p-4">Electronics</td>
                            <td className="p-4">
                                <button className="bg-black dark:bg-gray-700 text-white p-2 rounded-2xl flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-600">
                                    <FaEdit/>
                                </button>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white">
                            <td className="p-4">
                                <img src={profile} alt="Product" className="w-16 h-16 object-cover"/>
                            </td>
                            <td className="p-4">Product 2</td>
                            <td className="p-4">$149.99</td>
                            <td className="p-4">30</td>
                            <td className="p-4">Fashion</td>
                            <td className="p-4">
                                <button className="bg-black dark:bg-gray-700 text-white p-2 rounded-2xl flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-600">
                                    <FaEdit/>
                                </button>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white">
                            <td className="p-4">
                                <img src={profile} alt="Product" className="w-16 h-16 object-cover"/>
                            </td>
                            <td className="p-4">Product 3</td>
                            <td className="p-4">$79.99</td>
                            <td className="p-4">100</td>
                            <td className="p-4">Home & Garden</td>
                            <td className="p-4">
                                <button className="bg-black dark:bg-gray-700 text-white p-2 rounded-2xl flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-600">
                                    <FaEdit/>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Products;
