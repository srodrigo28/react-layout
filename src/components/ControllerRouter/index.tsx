import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Register } from '../../pages/Register'
import Layout from "../layout";
import { ErrorPage } from "../../pages/Error";
import { Login } from "../../pages/Login";

const router = createBrowserRouter([
    {
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Login />},
            { path: "/login", element: <Login />},
            { path: '/registro', element: <Register /> },
        ]
    }
])
export function ControllerRouter(){
    return (
        <Layout>
            <RouterProvider router={router} /> 
        </Layout>
    )
}