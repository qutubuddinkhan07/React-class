import { useState } from "react";

const UseStateCase1 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase count
      </button>
    </div>
  );
};

export default UseStateCase1;
