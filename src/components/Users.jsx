import { FaPlus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import profile from "../assets/profile.png";
function Users(){
    return(
        <div className="p-4 dark:bg-gray-900">
            <div className="flex items-center justify-between mb-8">
                <button onClick={() => document.getElementById('addUserModal').showModal()} className="bg-gradient-to-r from-black to-gray-800 text-white p-3 rounded-2xl flex items-center gap-2 hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200">
                    <FaPlus className="animate-pulse"/>
                    Add User
                </button>
            </div>
            <dialog id="addUserModal" className="p-8 rounded-xl shadow-2xl backdrop-blur-sm bg-white dark:bg-gray-800">
                <div className="flex flex-col gap-6">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent dark:from-white dark:to-gray-300">Add New User</h2>
                    <form className="flex flex-col gap-5">
                        <input type="text" placeholder="Full Name" className="border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white p-3 rounded-lg focus:border-black dark:focus:border-white focus:outline-none transition duration-200 hover:border-gray-300 dark:hover:border-gray-600"/>
                        <input 
                            type="email" 
                            placeholder="Email Address" 
                            className="border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white p-3 rounded-lg focus:border-black dark:focus:border-white focus:outline-none transition duration-200 hover:border-gray-300 dark:hover:border-gray-600"
                        />
                        <select className="border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white p-3 rounded-lg focus:border-black dark:focus:border-white focus:outline-none transition duration-200 hover:border-gray-300 dark:hover:border-gray-600">
                            <option value="">Select Role</option>
                            <option value="admin">Admin</option>
                            <option value="editor">Editor</option>
                            <option value="user">User</option>
                        </select>
                        <div className="relative">
                            <input type="file" accept="image/*" className="border-2 border-gray-200 p-3 rounded-lg w-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800"/>
                        </div>
                        <div className="flex gap-4 justify-end mt-2">
                            <button type="button" onClick={() => document.getElementById('addUserModal').close()} className="bg-gray-100 dark:bg-gray-700 text-black dark:text-white px-6 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-200">
                                Cancel
                            </button>
                            <button type="submit" className="bg-gradient-to-r from-black to-gray-800 text-white px-6 py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200">
                                Add User
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
            <div className="mt-4">
                <table className="w-full border-collapse border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                    <thead>
                        <tr className="dark:text-white">
                            <th className="p-4 text-left font-semibold">Picture</th>
                            <th className="p-4 text-left font-semibold">Name</th>
                            <th className="p-4 text-left font-semibold">Email</th>
                            <th className="p-4 text-left font-semibold">Role</th>
                            <th className="p-4 text-left font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white">
                            <td className="p-4">
                                <img src={profile} alt="User" className="w-10 h-10 rounded-full"/>
                            </td>
                            <td className="p-4">John Doe</td>
                            <td className="p-4">john@example.com</td>
                            <td className="p-4">Admin</td>
                            <td className="p-4">
                                <button className="bg-black dark:bg-gray-700 text-white p-2 rounded-2xl flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-600">
                                    <FaEdit/>
                                </button>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white">
                            <td className="p-4">
                                <img src={profile} alt="User" className="w-10 h-10 rounded-full"/>
                            </td>
                            <td className="p-4">Jane Smith</td>
                            <td className="p-4">jane@example.com</td>
                            <td className="p-4">Editor</td>
                            <td className="p-4">
                                <button className="bg-black dark:bg-gray-700 text-white p-2 rounded-2xl flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-600">
                                    <FaEdit/>
                                </button>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white">
                            <td className="p-4">
                                <img src={profile} alt="User" className="w-10 h-10 rounded-full"/>
                            </td>
                            <td className="p-4">Mike Johnson</td>
                            <td className="p-4">mike@example.com</td>
                            <td className="p-4">User</td>
                            <td className="p-4">
                                <button className="bg-black dark:bg-gray-700 text-white p-2 rounded-2xl flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-600">
                                    <FaEdit/>
                                </button>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white">
                            <td className="p-4">
                                <img src={profile} alt="User" className="w-10 h-10 rounded-full"/>
                            </td>
                            <td className="p-4">Sarah Wilson</td>
                            <td className="p-4">sarah@example.com</td>
                            <td className="p-4">Editor</td>
                            <td className="p-4">
                                <button className="bg-black dark:bg-gray-700 text-white p-2 rounded-2xl flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-600">
                                    <FaEdit/>
                                </button>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white">
                            <td className="p-4">
                                <img src={profile} alt="User" className="w-10 h-10 rounded-full"/>
                            </td>
                            <td className="p-4">David Brown</td>
                            <td className="p-4">david@example.com</td>
                            <td className="p-4">User</td>
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

export default Users;