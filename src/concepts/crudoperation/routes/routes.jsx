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
import UpdateStatus from "../privaterouting/UpdateStatus";
import UpdateUser from "../dashboard/UpdateUser";
import AllNotes from "../dashboard/dashboardpages/AllNotes";
import AddNotes from "../dashboard/dashboardpages/AddNotes";
import EditNotes from "../dashboard/dashboardpages/EditNotes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <UpdateStatus>
            <Home />
          </UpdateStatus>
        ),
      },
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
            path: "/dashboard",
            // index: true, // this can be used if it doesn't have any children
            element: <DashboardHome />,
          },
          {
            path: "/dashboard/profile/:userId",
            element: <Profile />,
          },
          {
            path: "/dashboard/updateprofile/:userId",
            element: <UpdateUser />,
          },
          {
            path: "/dashboard/addnotes/:userId",
            element: <AddNotes />,
          },
          {
            path: "/dashboard/allnotes/:userId",
            element: <AllNotes />,
          },
          {
            path: "/dashboard/editnotes/:userId/:postId",
            element: <EditNotes />,
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
