import React, { createContext, useState } from "react";

export const GlobalContextApi = createContext();

const GlobalContext = ({ children }) => {
  const [currUser, setCurrUser] = useState(null);

  return (
    <GlobalContextApi.Provider value={{ currUser, setCurrUser }}>
      {children}
    </GlobalContextApi.Provider>
  );
};

export default GlobalContext;
