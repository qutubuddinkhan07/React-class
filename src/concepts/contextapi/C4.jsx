import React, { useContext } from "react";
import { GlobalContext } from "./ContextApiConcept";

const C4 = () => {
  const res = useContext(GlobalContext);
  console.log(res); //{username: 'Eren', message: "If you win, you live. If you lose, you die. If you don't fight, you can't win"}

  return <div>C4</div>;
};

export default C4;
