import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Reg from "../pages/Reg";

export const authRoutes = [
    {
        path: '/home',
        Component: Home
    },
    {
        path: '/dashboard',
        Component: Dashboard
    }
]

export const publicRoutes = [
    {
        path: '/login',
        Component: Login
    },
    {
        path: '/register',
        Component: Reg
    },
    {
        path: '/home',
        Component: Home
    }
]