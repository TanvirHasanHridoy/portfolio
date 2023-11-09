import React, { createContext, useState } from "react";

export const activeSectionContext = createContext(null);

const ActiveSectionContextProvider = ({ children }) => {
  const [active, setActive] = useState("Home");
  return (
    <activeSectionContext.Provider value={{ setActive, active }}>
      {children}
    </activeSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;
