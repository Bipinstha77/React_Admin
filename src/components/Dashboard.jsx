import { FaUser } from "react-icons/fa";
function Dashboard(){
    return(
       <>
       <div className="p-4 dark:bg-gray-900">
        <div className="grid grid-cols-4 gap-6">
           <div className="text-2xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
            <p className="text-gray-100 text-lg mb-2">Total Revenue</p>
            <p className="text-3xl">$1000</p>
           </div>
           <div className="text-2xl font-bold bg-gradient-to-br from-green-500 to-teal-600 text-white p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
            <p className="text-gray-100 text-lg mb-2">Yearly Revenue</p>
            <p className="text-3xl">$1000</p>
           </div>
           <div className="text-2xl font-bold bg-gradient-to-br from-orange-500 to-red-600 text-white p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
            <p className="text-gray-100 text-lg mb-2">Total Orders</p>
            <p className="text-3xl">100</p>
           </div>
           <div className="text-2xl font-bold bg-gradient-to-br from-pink-500 to-rose-600 text-white p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
            <p className="text-gray-100 text-lg mb-2">Total Products</p>
            <p className="text-3xl">100</p>
           </div>
        </div>
       </div>

       <div className="p-4 dark:bg-gray-900">
        <h1 className="text-2xl font-bold dark:text-white">Latest Transactions</h1>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow-md">
            <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                <thead>
                    <tr className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                        <th className="p-4 text-left font-semibold">ID</th>
                        <th className="p-4 text-left font-semibold">Username</th>
                        <th className="p-4 text-left font-semibold">Date</th>
                        <th className="p-4 text-left font-semibold">Amount</th>
                        <th className="p-4 text-left font-semibold">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 dark:text-white">
                        <td className="p-4">#1</td>
                        <td className="p-4 flex items-center gap-2">
                            <FaUser className="text-gray-500"/>
                            John Doe
                        </td>
                        <td className="p-4 text-gray-600">12/12/2021</td>
                        <td className="p-4">
                            <span className="text-green-600 font-medium">$100</span>
                        </td>
                        <td className="p-4">
                            <span className="bg-gradient-to-r from-green-400 to-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                Completed
                            </span>
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 dark:text-white">
                        <td className="p-4">#2</td>
                        <td className="p-4 flex items-center gap-2">
                            <FaUser className="text-gray-500"/>
                            Aoi Sato
                        </td>
                        <td className="p-4 text-gray-600">1/12/2024</td>
                        <td className="p-4">
                            <span className="text-green-600 font-medium">$100</span>
                        </td>
                        <td className="p-4">
                            <span className="bg-gradient-to-r from-green-400 to-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                Completed
                            </span>
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 dark:text-white">
                        <td className="p-4">#3</td>
                        <td className="p-4 flex items-center gap-2">
                            <FaUser className="text-gray-500"/>
                            Yui Hatano
                        </td>
                        <td className="p-4 text-gray-600">12/1/2024</td>
                        <td className="p-4">
                            <span className="text-green-600 font-medium">$100</span>
                        </td>
                        <td className="p-4">
                            <span className="bg-gradient-to-r from-green-400 to-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                Completed
                            </span>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
       </div>

       <div className="p-4 flex gap-4 dark:bg-gray-900">
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow-md flex-1">
            <h1 className="text-2xl font-bold mb-4 dark:text-white">Top Sellers</h1>
            <div className="flex items-center justify-between">
                <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                    <thead>
                        <tr className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                            <th className="p-4 text-left font-semibold">Username</th>
                            <th className="p-4 text-left font-semibold">Total Sales</th>
                            <th className="p-4 text-left font-semibold">Products Sold</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white">
                            <td className="p-4 flex items-center gap-2">
                                <FaUser className="text-gray-500 dark:text-gray-400"/>
                                John Doe
                            </td>
                            <td className="p-4">$5,230</td>
                            <td className="p-4">124</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white">
                            <td className="p-4 flex items-center gap-2">
                                <FaUser className="text-gray-500 dark:text-gray-400"/>
                                Jane Smith
                            </td>
                            <td className="p-4">$4,120</td>
                            <td className="p-4">98</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white">
                            <td className="p-4 flex items-center gap-2">
                                <FaUser className="text-gray-500 dark:text-gray-400"/>
                                Mike Johnson
                            </td>
                            <td className="p-4">$3,840</td>
                            <td className="p-4">76</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow-md flex-1">
            <h1 className="text-2xl font-bold mb-4 dark:text-white">Top Products</h1>
            <div className="flex items-center justify-between">
                <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                    <thead>
                        <tr className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                            <th className="p-4 text-left font-semibold">Product Name</th>
                            <th className="p-4 text-left font-semibold">Total Sales</th>
                            <th className="p-4 text-left font-semibold">Products Sold</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white">
                            <td className="p-4 flex items-center gap-2">
                                <FaUser className="text-gray-500 dark:text-gray-400"/>
                                Product 1
                            </td>
                            <td className="p-4">$5,230</td>
                            <td className="p-4">124</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white">
                            <td className="p-4 flex items-center gap-2">
                                <FaUser className="text-gray-500 dark:text-gray-400"/>
                                Product 2
                            </td>
                            <td className="p-4">$4,120</td>
                            <td className="p-4">98</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white">
                            <td className="p-4 flex items-center gap-2">
                                <FaUser className="text-gray-500 dark:text-gray-400"/>
                                Product 3
                            </td>
                            <td className="p-4">$3,840</td>
                            <td className="p-4">76</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
       </div>

        <div className="p-4 dark:bg-gray-900">
            <h1 className="text-2xl font-bold dark:text-white">Reports</h1>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow-md">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-xl font-bold dark:text-white">Daily Sales</h1>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-md hover:shadow-md transition-all duration-300">
                        View Report
                    </button>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <div className="h-64 flex items-end justify-between gap-2 px-4">
                        {[
                            {day: 'Mon', sales: 2100},
                            {day: 'Tue', sales: 3400}, 
                            {day: 'Wed', sales: 2700},
                            {day: 'Thu', sales: 4200},
                            {day: 'Fri', sales: 3800},
                            {day: 'Sat', sales: 5100},
                            {day: 'Sun', sales: 3200}
                        ].map((data) => {
                            const heightPercentage = Math.round((data.sales/5100) * 100);
                            return (
                                <div key={data.day} className="flex flex-col items-center gap-2 flex-1">
                                    <div 
                                        className="w-full max-w-[3rem] bg-gradient-to-t from-blue-500 to-purple-600 rounded-t-lg hover:opacity-90 transition-opacity cursor-pointer"
                                        style={{height: `${heightPercentage}%`}}
                                        title={`$${data.sales.toLocaleString()}`}
                                    />
                                    <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">{data.day}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>


       </>
    )
}

export default Dashboard;