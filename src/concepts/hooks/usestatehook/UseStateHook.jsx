import { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };

  const subCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };
  console.log("hello");

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={updateCount}>+1</button>
      <button onClick={subCount}>-1</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default UseStateHook;
