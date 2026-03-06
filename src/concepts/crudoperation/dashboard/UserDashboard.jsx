import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GrDocumentUpdate } from "react-icons/gr";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserDashboard = () => {
  const [isActive, setIsActive] = useState("profile");
  const navigate = useNavigate();

  const sidebar_items = [
    {
      name: "profile",
      icon: CgProfile,
    },
    {
      name: "update profile",
      icon: GrDocumentUpdate,
    },
  ];

  const logoutHandle = () => {
    localStorage.removeItem("jwt_token");
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
                    to={"#"}
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
            className="bg-blue-950 text-white px-3 py-2 rounded-xl cursor-pointer"
            onClick={logoutHandle}
          >
            Logout
          </button>
        </aside>
        <div className="w-full bg-pink-700 flex items-center justify-center">
          <img
            src="https://i.pinimg.com/736x/98/b0/48/98b0481f84564fd1a00cf18670d64b8b.jpg"
            alt="Obito uchiha"
            className="w-100 h-full -rotate-90 rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
