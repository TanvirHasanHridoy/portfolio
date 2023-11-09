import React, { createContext, useState } from "react";

const ActiveSectionContextProvider = ({ children }) => {
  const activeSectionContext = createContext(null);
  const [active, setActive] = useState("Home");
  return (
    <activeSectionContext.Provider value={{ setActive, active }}>
      {children}
    </activeSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;
