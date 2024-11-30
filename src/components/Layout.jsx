import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout(){
    return(
        <div className="min-h-screen dark:bg-gray-900">
            <div className="flex">
                <Sidebar />
                <div className="flex-1 ml-64 min-h-screen dark:bg-gray-900">
                    <Header/>
                    <main className="dark:bg-gray-900">
                        <Outlet/>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Layout;