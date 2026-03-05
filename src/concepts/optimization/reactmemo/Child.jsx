import React from "react";

const Child = ({ name }) => {
  console.log("child");

  return (
    <div>
      Child
      <h1>{name}</h1>
    </div>
  );
};

export default React.memo(Child);
