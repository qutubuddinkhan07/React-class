import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    age: "",
    email: "",
    password: "",
    dob: "",
    city: "",
    gender: "",
  });

  const fdata = async () => {
    const { data } = await axios.get(`http://localhost:3000/users/${userId}`);
    setFormData(data);
  };
  useEffect(() => {
    fdata();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleform = async (e) => {
    e.preventDefault();
    console.log(formData);
    const { username, age, email, password, dob, city, gender } = formData;
    //! send the data to backend for register purpose
    // if register done successfully then navigate to login page
    try {
      if (
        !username ||
        !age ||
        !email ||
        !password ||
        !dob ||
        !city ||
        !gender
      ) {
        toast.error("All fileds are required", { position: "top-center" });
        return;
      }
      const { data } = await axios.put(
        `http://localhost:3000/users/${userId}`,
        formData,
      );
      console.log(data);
      toast.success("update successfully", { position: "top-right" });
      setFormData({
        username: "",
        age: "",
        email: "",
        password: "",
        dob: "",
        city: "",
        gender: "",
      });
      navigate(`/dashboard/profile/${userId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-cyan-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Update Profile</h2>

        <form onSubmit={handleform} className="space-y-4">
          {/* Username */}
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
          />

          {/* Age */}
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
          />

          {/* Date of Birth */}
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
          />

          {/* City Dropdown */}
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select City</option>
            <option value="Delhi">Delhi</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Mumbai">Mumbai</option>
          </select>

          {/* Gender */}
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChange}
                checked={formData.gender === "Male"}
              />{" "}
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
                checked={formData.gender === "Female"}
              />{" "}
              Female
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={formData.gender === "Other"}
                onChange={handleChange}
              />{" "}
              Other
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 text-white font-semibold rounded-md 
            bg-gradient-to-r from-indigo-500 to-blue-500 
            hover:from-indigo-600 hover:to-blue-600 transition"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
