import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
import { FaRegNoteSticky } from "react-icons/fa6";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdLogout } from "react-icons/md";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GlobalContextApi } from "../context/GlobalContext";

const UserDashboard = () => {
  const [isActive, setIsActive] = useState("dashboard");
  const navigate = useNavigate();

  const { setCurrUser, currUser } = useContext(GlobalContextApi);

  const id = JSON.parse(localStorage.getItem("jwt_token")).split(".")[2];

  const sidebar_items = [
    {
      name: "dashboard",
      path: "/dashboard",
      icon: AiFillHome,
    },
    {
      name: "profile",
      path: `/dashboard/profile/${id}`,
      icon: CgProfile,
    },
    {
      name: "update profile",
      path: `/dashboard/updateprofile/${id}`,
      icon: GrDocumentUpdate,
    },
    {
      name: "add notes",
      path: `/dashboard/addnotes/${id}`,
      icon: FaRegNoteSticky,
    },
    {
      name: "all notes",
      path: `/dashboard/allnotes/${id}`,
      icon: FaEdit,
    },
  ];

  const fetch_data = async (params) => {
    const { data } = await axios.get(`http://localhost:3000/users/${id}`);
    // console.log(data);

    setCurrUser(data);
  };

  useEffect(() => {
    fetch_data();
  }, []);

  const logoutHandle = () => {
    localStorage.removeItem("jwt_token");
    setCurrUser(null);
    navigate("/");
    toast.success("Logged out successfully");
  };

  return (
    <div className="max-h-screen">
      <div className="h-[90.7vh] bg-gray-600 flex">
        <aside className="max-w-60 w-full bg-purple-800 flex flex-col px-3 py-4 justify-between">
          <ul className="flex flex-col space-y-1">
            {sidebar_items.map((ele, idx) => {
              const Icon = ele.icon;
              return (
                <li key={idx}>
                  <NavLink
                    to={ele.path}
                    className={`p-2 text-md flex items-center gap-2 hover:bg-[#ffffff73] capitalize text-white font-semibold rounded-lg ${isActive === ele.name ? "bg-[#ffffff73]" : ""}`}
                    onClick={() => setIsActive(ele.name)}
                  >
                    <Icon className="text-xl" />
                    {ele.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <button
            className="bg-blue-950 text-white px-3 py-2 rounded-xl cursor-pointer hover:text-lg flex items-center gap-2 font-bold"
            onClick={logoutHandle}
          >
            <MdLogout /> Logout
          </button>
        </aside>

        <Outlet />
      </div>
    </div>
  );
};

export default UserDashboard;
