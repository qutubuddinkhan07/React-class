import React from "react";
import C2 from "./C2";

const C1 = ({ data }) => {
  console.log(data);

  return (
    <div>
      <C2 data={data} />
    </div>
  );
};

export default C1;
