import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import Products from "./components/Products";
import Orders from "./components/Orders";
import UserProfile from "./components/UserProfile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Dashboard/>
      },
      {
        path: "/users",
        element: <Users/>
      },
      {
        path: "/products",
        element: <Products/>
      },
      {
        path: "/orders",
        element: <Orders/>
      },
      {
        path: "/userprofile",
        element: <UserProfile/>
      }
    ]
  }
])
function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
