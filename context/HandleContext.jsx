import React, { createContext, useContext, useState } from "react";

const HandlContext = createContext();
export const useHandle = () => useContext(HandlContext);

const HandlContextProvider = ({ children }) => {
  const [isDark, setDark] = useState(false);
  const [data, setdata] = useState();
  const [output, setOutput] = useState(null);


  const value = {
    isDark,
    setDark,
    data,
    setdata,
    output,
    setOutput
  };

  return (
    <HandlContext.Provider value={value}>{children}</HandlContext.Provider>
  );
};

export default HandlContextProvider;
