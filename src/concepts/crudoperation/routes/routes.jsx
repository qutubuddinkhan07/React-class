import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import About from "../pages/About";
import Contact from "../pages/contact";
import Register from "../pages/Register";
import PrivateRouting from "../privaterouting/PrivateRouting";
import UserDashboard from "../dashboard/UserDashboard";
import DashboardHome from "../dashboard/DashboardHome";
import Profile from "../dashboard/Profile";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/profile", element: <Profile /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/dashboard",
        element: (
          <PrivateRouting>
            <UserDashboard />
          </PrivateRouting>
        ),
        children: [
          {
            index: true,
            element: <DashboardHome />,
          },
          {
            path: "/dashboard/profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
