import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GlobalContextApi } from "../context/GlobalContext";

const Profile = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [user, setUser] = useState("");
  const fdata = async () => {
    const { data } = await axios.get(`http://localhost:3000/users/${userId}`);
    setUser(data);
  };
  const { currUser, setCurrUser } = useContext(GlobalContextApi);

  useEffect(() => {
    fdata();
  }, []);

  const deleteUser = async () => {
    const { data } = await axios.delete(
      `http://localhost:3000/users/${userId}`,
    );
    navigate("/");
    localStorage.removeItem("jwt_token");
    setCurrUser(null);
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-[540px] h-[400px] bg-white flex flex-col items-center justify-around p-8 rounded-2xl">
        <img
          src="P"
          alt="profile"
          className="w-40 h-40 rounded-full border-3 border-amber-500"
        />
        <p className="text-2xl font-bold capitalize">{user.username}</p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>

        <div className="w-full flex gap-2 justify-center">
          <button className="bg-purple-900 text-white px-5 py-2 rounded-lg cursor-pointer">
            <Link to={"/dashboard/updateprofile"} state={{ some: user }}>
              Update Profile
            </Link>
          </button>
          <button
            className="bg-red-700 text-white px-5 py-2 rounded-lg cursor-pointer"
            onClick={deleteUser}
          >
            Delte Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
