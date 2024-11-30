import { FaPlus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

function Orders() {
    return (
        <div className="p-4 dark:bg-gray-900">
            <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                <thead>
                    <tr className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
                        <th className="p-4 text-left font-semibold dark:text-white">Order ID</th>
                        <th className="p-4 text-left font-semibold dark:text-white">Customer</th>
                        <th className="p-4 text-left font-semibold dark:text-white">Products</th>
                        <th className="p-4 text-left font-semibold dark:text-white">Total</th>
                        <th className="p-4 text-left font-semibold dark:text-white">Status</th>
                        <th className="p-4 text-left font-semibold dark:text-white">Date</th>
                        <th className="p-4 text-left font-semibold dark:text-white">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white">
                        <td className="p-4">#12345</td>
                        <td className="p-4">John Doe</td>
                        <td className="p-4">Product 1, Product 2</td>
                        <td className="p-4">$249.98</td>
                        <td className="p-4">
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 px-2 py-1 rounded">Delivered</span>
                        </td>
                        <td className="p-4">2024-01-15</td>
                        <td className="p-4">
                            <button className="bg-black dark:bg-gray-700 text-white p-2 rounded-2xl flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-600">
                                <FaEdit/>
                            </button>
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white">
                        <td className="p-4">#12346</td>
                        <td className="p-4">Jane Smith</td>
                        <td className="p-4">Product 3</td>
                        <td className="p-4">$79.99</td>
                        <td className="p-4">
                            <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 px-2 py-1 rounded">Processing</span>
                        </td>
                        <td className="p-4">2024-01-14</td>
                        <td className="p-4">
                            <button className="bg-black dark:bg-gray-700 text-white p-2 rounded-2xl flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-600">
                                <FaEdit/>
                            </button>
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white">
                        <td className="p-4">#12347</td>
                        <td className="p-4">Mike Johnson</td>
                        <td className="p-4">Product 2</td>
                        <td className="p-4">$149.99</td>
                        <td className="p-4">
                            <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 px-2 py-1 rounded">Cancelled</span>
                        </td>
                        <td className="p-4">2024-01-13</td>
                        <td className="p-4">
                            <button className="bg-black dark:bg-gray-700 text-white p-2 rounded-2xl flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-600">
                                <FaEdit/>
                            </button>
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white">
                        <td className="p-4">#12348</td>
                        <td className="p-4">Sarah Williams</td>
                        <td className="p-4">Product 1, Product 3</td>
                        <td className="p-4">$229.98</td>
                        <td className="p-4">
                            <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 px-2 py-1 rounded">Processing</span>
                        </td>
                        <td className="p-4">2024-01-12</td>
                        <td className="p-4">
                            <button className="bg-black dark:bg-gray-700 text-white p-2 rounded-2xl flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-600">
                                <FaEdit/>
                            </button>
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white">
                        <td className="p-4">#12349</td>
                        <td className="p-4">Tom Brown</td>
                        <td className="p-4">Product 2, Product 3</td>
                        <td className="p-4">$229.98</td>
                        <td className="p-4">
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 px-2 py-1 rounded">Delivered</span>
                        </td>
                        <td className="p-4">2024-01-11</td>
                        <td className="p-4">
                            <button className="bg-black dark:bg-gray-700 text-white p-2 rounded-2xl flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-600">
                                <FaEdit/>
                            </button>
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white">
                        <td className="p-4">#12350</td>
                        <td className="p-4">Emily Davis</td>
                        <td className="p-4">Product 1</td>
                        <td className="p-4">$99.99</td>
                        <td className="p-4">
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 px-2 py-1 rounded">Delivered</span>
                        </td>
                        <td className="p-4">2024-01-10</td>
                        <td className="p-4">
                            <button className="bg-black dark:bg-gray-700 text-white p-2 rounded-2xl flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-600">
                                <FaEdit/>
                            </button>
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white">
                        <td className="p-4">#12351</td>
                        <td className="p-4">Alex Wilson</td>
                        <td className="p-4">Product 3, Product 1</td>
                        <td className="p-4">$179.98</td>
                        <td className="p-4">
                            <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 px-2 py-1 rounded">Processing</span>
                        </td>
                        <td className="p-4">2024-01-09</td>
                        <td className="p-4">
                            <button className="bg-black dark:bg-gray-700 text-white p-2 rounded-2xl flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-600">
                                <FaEdit/>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Orders;
