import React, { useCallback, useState } from "react";
import Child from "./Child";

const UseCallBackHook = () => {
  const [count, setCount] = useState(0);

  //! primitive based values
  let x = 20;
  let y = x;
  y++;
  //   console.log(y); // 21
  //   console.log(x); // 20

  //! refereced based values
  let a = [1, 2, 3];
  let b = a;
  b.push(20);
  //   console.log(b); // (4) [1, 2, 3, 20]
  //   console.log(a); // (4) [1, 2, 3, 20]
  //! to prevent the default behaviour of the referenced based values
  let c = [1, 2, 3];
  let d = c;
  d = [...d, 40];
  d = JSON.parse(JSON.stringify([...d, 50]));
  console.log(c); // (3) [1, 2, 3]
  console.log(d); // (5) [1, 2, 3, 40, 50]

  const deleteUser = useCallback(() => {
    console.log("delete user");
  }, []);

  return (
    <div>
      <h1>UseCallBackHook</h1>
      <p>{count}</p>
      <button
        className="py-2 px-3 bg-pink-600 rounded-lg"
        onClick={() => setCount(count + 1)}
      >
        Update
      </button>
      <hr />
      <Child data={deleteUser} />
    </div>
  );
};

export default UseCallBackHook;
