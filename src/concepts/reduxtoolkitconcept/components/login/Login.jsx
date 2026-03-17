import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear, handleInput } from "../../features/loginslice";

const Login = () => {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.login);

  const onInput = (e) => {
    let { name, value } = e.target;
    dispatch(handleInput({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("login attempted with: ", { email, password });
  };

  const onClear = () => {
    dispatch(clear());
  };

  return (
    <div className="w-[250px] h-[300px] bg-white space-y-4 flex flex-col items-center justify-center rounded-2xl">
      <h1 className="text-2xl">Login Here</h1>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={onInput}
            className="border px-3 py-2 rounded-lg"
            placeholder="enter email"
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={onInput}
            placeholder="enter password"
            className="border px-3 py-2 rounded-lg"
          />
        </div>

        <div className="space-x-2">
          <button className="px-3 py-2 rounded-lg bg-blue-900 text-white cursor-pointer">
            Login
          </button>
          <button
            type="button"
            onClick={onClear}
            className="px-3 py-2 rounded-lg bg-gray-500 text-white cursor-pointer"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
