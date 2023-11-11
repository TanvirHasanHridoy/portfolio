import React, { createContext, useState } from "react";

export const activeSectionContext = createContext(null);

const ActiveSectionContextProvider = ({ children }) => {
  const [active, setActive] = useState("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link

  return (
    <activeSectionContext.Provider
      value={{ setActive, active, timeOfLastClick, setTimeOfLastClick }}
    >
      {children}
    </activeSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;
