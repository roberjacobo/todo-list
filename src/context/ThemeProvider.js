import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggleDark = (e, dark2) => {
    let dark = !dark2;
    setDark(dark);
  };
  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
