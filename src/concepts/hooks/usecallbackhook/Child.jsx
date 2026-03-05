import React from "react";

const Child = ({ data }) => {
  console.log("child");
  return (
    <div>
      <h1>Child</h1>
      <button className="py-2 px-3 bg-purple-600 rounded-lg" onClick={data}>
        delete user
      </button>
    </div>
  );
};

export default React.memo(Child);
