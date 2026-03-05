import React from "react";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import PrivateRouting from "./privaterouting/PrivateRouting";

const RouterLayout = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/home", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/projects", element: <Projects /> },
        { path: "/contact", element: <Contact /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        {
          path: "/dashboard",
          element: (
            <PrivateRouting>
              <Dashboard />
            </PrivateRouting>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default RouterLayout;
