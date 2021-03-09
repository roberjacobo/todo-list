import { createContext } from "react";

const defaultState = {
  dark: false,
  toggleDark: () => { }
};

const ThemeContext = createContext(defaultState);

export default ThemeContext;
