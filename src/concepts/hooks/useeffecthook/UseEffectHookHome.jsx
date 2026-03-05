import React, { useEffect, useState } from "react";

const UseEffectHookHome = () => {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState(0);

  const fdata = () => {
    console.log("fdata function");
  };
  useEffect(() => {
    fdata();
  });

  return (
    <div>
      <h1>count: {count}</h1>
      <p>val: {val}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase count
      </button>
      <button onClick={() => setVal(val + 10)}>Increase val</button>
    </div>
  );
};

export default UseEffectHookHome;
