import { useState } from "react";

const Child = ({ count, setCount }) => {
  const [val, setVal] = useState(10);

  console.log("child");

  return (
    <div>
      <h1>{count} count in child</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update count from child
      </button>
      <h1>{val} value in child</h1>
      <button
        onClick={() => {
          setVal(val + 10);
        }}
      >
        Update value
      </button>
    </div>
  );
};

export default Child;
