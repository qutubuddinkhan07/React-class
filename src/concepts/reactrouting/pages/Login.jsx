import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [eye, setEye] = useState(false);

  const { email, password } = formData;

  const handleInput = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors({ ...errors, [name]: false });
  };

  const handleForm = (e) => {
    e.preventDefault();
    let newErrors = {};

    for (let [key, value] of Object.entries(formData)) {
      if (value.trim() === "") {
        newErrors[key] = true;
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.warn("All fields are required");
      return;
    }

    setErrors({});

    navigate("/dashboard");

    localStorage.setItem("jwt_token", JSON.stringify("shdfsdjfksdhfskjdh"));
    toast.success("successfuly logged in");
  };

  const togglePass = () => {
    setEye(!eye);
  };

  return (
    <div className="w-full h-[88vh] flex items-center justify-center">
      <div className="w-100 h-100 bg-[#A97061] flex items-center justify-around flex-col rounded-3xl">
        <h2 className="text-3xl font-bold text-white">Login</h2>

        <form className="flex flex-col gap-3" onSubmit={handleForm}>
          <div className="flex flex-col">
            <label htmlFor="email">
              Email
              <input
                type="text"
                name="email"
                id="email"
                placeholder="enter email"
                className={`bg-[#F6F8F8] w-full mt-2 rounded-sm px-2 text-[18px] font-mono outline-none ${errors.email ? "border-red-500 border-3" : ""}`}
                onChange={handleInput}
                value={email}
              />
            </label>
            {errors.email ? (
              <span className="text-xs font-bold">Please fill this field</span>
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <div className="relative">
              <input
                type={eye ? "text" : "password"}
                name="password"
                id="password"
                placeholder="enter password"
                className={`pl-2 pr-12 bg-[#F6F8F8] w-full mt-2 rounded-sm text-[18px] font-mono outline-none ${errors.password ? "border-red-500 border-3" : ""}`}
                onChange={handleInput}
                value={password}
              />
              <div
                className="absolute top-2/3 right-3 -translate-y-2/3 cursor-pointer"
                onClick={togglePass}
              >
                {eye ? (
                  <FaEye
                    className="absolute top-2/3 right-3 -translate-y-2/3 cursor-pointer"
                    onClick={togglePass}
                  />
                ) : (
                  <IoEyeOff
                    className="absolute top-2/3 right-3 -translate-y-2/3 cursor-pointer"
                    onClick={togglePass}
                  />
                )}
              </div>

              {/* {eye ? (
                <FaEye
                  className="absolute top-2/3 right-3 -translate-y-2/3 cursor-pointer"
                  onClick={togglePass}
                />
              ) : (
                <IoEyeOff
                  className="absolute top-2/3 right-3 -translate-y-2/3 cursor-pointer"
                  onClick={togglePass}
                />
              )} */}
            </div>
            {errors.password ? (
              <span className="text-xs font-bold">Please fill this field</span>
            ) : (
              ""
            )}
          </div>

          <button className="bg-[#24202B] text-lg text-white font-medium p-2 rounded-lg cursor-pointer">
            Login
          </button>
        </form>

        <p className="flex gap-2">
          Don't have an account?
          <Link to={"/register"} className="font-medium">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
