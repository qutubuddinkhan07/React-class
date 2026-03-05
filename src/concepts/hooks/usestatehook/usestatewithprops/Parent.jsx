import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  console.log("parent");

  return (
    <div>
      <h1>{count} count in parent</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update Count
      </button>
      <hr />
      <Child count={count} setCount={setCount} />
    </div>
  );
};

export default Parent;
