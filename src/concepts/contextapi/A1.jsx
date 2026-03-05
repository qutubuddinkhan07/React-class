import React, { useContext } from "react";
import { GlobalContext } from "./ContextApiConcept";

const A1 = () => {
  const res = useContext(GlobalContext);
  console.log(res); // undefined --> because A1 isn't a direct child of the GlobalContextProvider.Provider

  return <div>A1</div>;
};

export default A1;
