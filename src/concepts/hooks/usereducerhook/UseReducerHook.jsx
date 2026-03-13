import React, { useReducer } from "react";

const UseReducerHook = () => {
  const reducer = () => {};
  const [count, dispatch] = useReducer(reducer, 0);
  console.log(count);

  return <div>UseReducerHook</div>;
};

export default UseReducerHook;
