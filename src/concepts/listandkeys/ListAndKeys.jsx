import { Fragment } from "react";

const ListAndKeys = () => {
  let arr = ["Iman", "Sheikh", "Neel", "Sunil"];
  return (
    <div>
      {arr.map((ele, idx) => {
        return (
          <Fragment key={idx}>
            <h1>{ele}</h1>
            <p>GUM</p>
          </Fragment>
        );
      })}
    </div>
  );
};

export default ListAndKeys;
