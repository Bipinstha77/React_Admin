import { FaCamera } from "react-icons/fa";
import { Link } from "react-router-dom";

function UserProfile() {
    return (
        <div className="p-8 dark:bg-gray-900">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <div className="relative h-48 bg-gradient-to-r from-gray-800 to-black rounded-t-xl">
                    <div className="absolute -bottom-16 left-8">
                        <div className="relative">
                            <img 
                                src="https://via.placeholder.com/150" 
                                alt="Profile" 
                                className="w-32 h-32 rounded-full border-4 border-white"
                            />
                            <button className="absolute bottom-0 right-0 bg-black text-white p-2 rounded-full hover:bg-gray-800 transition">
                                <FaCamera size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-20 px-8 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                                <input 
                                    type="text" 
                                    className="mt-1 block w-full border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-lg p-3 focus:border-black dark:focus:border-white focus:outline-none transition"
                                    defaultValue="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                                <input 
                                    type="email" 
                                    className="mt-1 block w-full border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-lg p-3 focus:border-black dark:focus:border-white focus:outline-none transition"
                                    defaultValue="john.doe@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone</label>
                                <input 
                                    type="tel" 
                                    className="mt-1 block w-full border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-lg p-3 focus:border-black dark:focus:border-white focus:outline-none transition"
                                    defaultValue="+1 234 567 890"
                                />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Role</label>
                                <input 
                                    type="text" 
                                    className="mt-1 block w-full border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-lg p-3 focus:border-black dark:focus:border-white focus:outline-none transition"
                                    defaultValue="Administrator"
                                    readOnly
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Location</label>
                                <input 
                                    type="text" 
                                    className="mt-1 block w-full border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-lg p-3 focus:border-black dark:focus:border-white focus:outline-none transition"
                                    defaultValue="New York, USA"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Join Date</label>
                                <input 
                                    type="text" 
                                    className="mt-1 block w-full border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-lg p-3 focus:border-black dark:focus:border-white focus:outline-none transition"
                                    defaultValue="January 15, 2024"
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-end gap-4">
                        <button className="px-6 py-3 bg-gray-100 text-black rounded-lg hover:bg-gray-200 transition">
                            Cancel
                        </button>
                        <button className="px-6 py-3 bg-gradient-to-r from-black to-gray-800 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
