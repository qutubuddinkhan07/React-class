import React, { useReducer } from "react";

const UseReducerHook = () => {
  const reducer = (state, action) => {
    switch (action) {
      case "INCRE":
        return state + 1;
      case "DECRE":
        return state - 1;
      case "RESET":
        return 0;

      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);
  console.log(count);

  return (
    <div>
      <h2 className="text-2xl">{count}</h2>
      <button
        onClick={() => dispatch("INCRE")}
        className="px-3 py-2 bg-pink-700 rounded-lg cursor-pointer"
      >
        INCREMENT
      </button>
      <button
        onClick={() => dispatch("DECRE")}
        className="px-3 py-2 bg-pink-700 rounded-lg cursor-pointer"
      >
        DECREMENT
      </button>
      <button
        onClick={() => dispatch("RESET")}
        className="px-3 py-2 bg-pink-700 rounded-lg cursor-pointer"
      >
        RESET
      </button>
    </div>
  );
};

export default UseReducerHook;
