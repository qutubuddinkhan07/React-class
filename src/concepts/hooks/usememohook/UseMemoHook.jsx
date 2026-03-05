import React, { useMemo, useState } from "react";

const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  const expensiveCal = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 100000000; i++) {
      sum += i;
    }
    return sum;
  }, []);
  console.log(expensiveCal);

  return (
    <div>
      <h1>UseMemo</h1>
      <h2>{count}</h2>
      <button
        className="p-7 bg-amber-900 rounded-lg"
        onClick={() => setCount(count + 1)}
      >
        update count
      </button>
    </div>
  );
};

export default UseMemoHook;
