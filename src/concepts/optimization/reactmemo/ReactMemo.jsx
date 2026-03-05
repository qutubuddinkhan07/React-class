import React, { useState } from "react";
import Child from "./Child";

const ReactMemo = () => {
  const [count, setCount] = useState(0);
  console.log("parent");

  return (
    <div>
      <h1>ReactMemo</h1>
      <h2>count {count}</h2>
      <button
        className="px-3 py-2 bg-amber-700 rounded-lg cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        Update count
      </button>
      <hr />
      <Child name={count} />
    </div>
  );
};

export default ReactMemo;
