import React from "react";
import C4 from "./C4";

const C3 = ({ data }) => {
  let updatedData = { ...data, message: "I HATE YOU" };
  return (
    <div>
      <C4 data={updatedData} />
    </div>
  );
};

export default C3;
