import React, { createContext } from "react";
import C1 from "./C1";
import A1 from "./A1";

export const GlobalContext = createContext();
const ContextApiConcept = () => {
  const data = {
    username: "Eren",
    message:
      "If you win, you live. If you lose, you die. If you don't fight, you can't win",
  };
  return (
    <div>
      <GlobalContext.Provider value={data}>
        <C1 />
      </GlobalContext.Provider>
      <A1 />
    </div>
  );
};

export default ContextApiConcept;
