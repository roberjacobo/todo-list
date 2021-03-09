import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import NightsStayIcon from '@material-ui/icons/NightsStay';

const ButtonTheme = () => {
  const { dark, toggleDark } = useContext(ThemeContext);
  return (
    <button className="darkmode_button">
      <NightsStayIcon />
      <a>
        Dark Mode
      </a>
    </button>
  );
};

export default ButtonTheme;