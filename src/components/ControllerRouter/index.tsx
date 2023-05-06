import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from '../../pages/Login'
import { Contact } from '../../pages/Contact'
import { Register } from '../../pages/Register'
import Layout from "../layout";

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/contato', element: <Contact /> },
  { path: '/registro', element: <Register /> },
])

export function ControllerRouter(){
    return (
        <Layout>
            <RouterProvider router={router} /> 
        </Layout>
    )
}