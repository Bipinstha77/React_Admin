import { FaUser } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

function Header(){
    const { theme, toggleTheme } = useTheme();

    return(
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="flex items-center gap-2">
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="w-96 p-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition duration-200 hover:border-gray-300 dark:hover:border-gray-600"
                />
            </div>
            <div className="flex items-center gap-6">
                <button 
                    onClick={toggleTheme}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition duration-200 dark:text-white"
                    title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                >
                    {theme === 'light' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>
                    )}
                </button>
                
                <button className="relative p-2 hover:bg-gray-100 rounded-full transition duration-200">
                    <IoNotificationsOutline size={24} className="text-gray-600"/>
                    <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                </button>
                <div className="relative">
                    <button 
                        onClick={() => document.getElementById('userDropdown').classList.toggle('hidden')} 
                        className="bg-gradient-to-r from-black to-gray-800 text-white p-3 rounded-lg flex items-center gap-2 hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200"
                    >
                        <FaUser/>
                    </button>
                    <div id="userDropdown" className="hidden absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                        <div className="py-2">
                            <Link to="/userprofile" className="flex px-6 py-3 text-gray-700 hover:bg-gray-50 transition duration-200">
                                User Profile
                            </Link>
                            <hr className="border-gray-100"/>
                            <Link to="/logout" className="flex px-6 py-3 text-red-600 hover:bg-red-50 transition duration-200">
                                Logout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;