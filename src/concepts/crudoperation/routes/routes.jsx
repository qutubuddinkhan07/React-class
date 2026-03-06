import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Contact from "../pages/contact";
import Register from "../pages/Register";
import PrivateRouting from "../privaterouting/PrivateRouting";
import UserDashboard from "../dashboard/UserDashboard";

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
