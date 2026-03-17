import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear, handleInput } from "../../features/registerslice";

const Register = () => {
  const dispatch = useDispatch();
  const { username, email, password, age, gender } = useSelector(
    (state) => state.register,
  );

  const onInput = (e) => {
    let { name, value } = e.target;
    dispatch(handleInput({ name, value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Registered with: ", {
      username,
      password,
      email,
      age,
      gender,
    });
  };

  const onClear = () => {
    dispatch(clear());
  };

  return (
    <div className="space-y-4 w-[300px] h-[300px] rounded-lg flex items-center justify-center flex-col bg-white">
      <h1>Register Here</h1>

      <form onSubmit={onSubmit} className="space-y-2">
        <div>
          <input
            type="text"
            name="username"
            value={username}
            onChange={onInput}
            className="border rounded-lg px-3"
            placeholder="enter username"
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            value={email}
            onChange={onInput}
            className="border rounded-lg px-3"
            placeholder="enter email"
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            value={password}
            onChange={onInput}
            className="border rounded-lg px-3"
            placeholder="enter password"
          />
        </div>
        <div>
          <input
            type="number"
            name="age"
            value={age}
            onChange={onInput}
            className="border rounded-lg px-3"
            placeholder="enter age"
          />
        </div>
        <div>
          <select
            name="gender"
            id=""
            className="border"
            value={gender}
            onChange={onInput}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="space-x-3">
          <button className="px-3 py-2 rounded-lg bg-green-800 text-white cursor-pointer">
            Register
          </button>
          <button
            type="button"
            className="px-3 py-2 rounded-lg bg-[#0000007d] text-white cursor-pointer"
            onClick={onClear}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
