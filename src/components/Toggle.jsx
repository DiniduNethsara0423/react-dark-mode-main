import React from "react";
import { useTheme } from "../App";

import "./Toggle.css";

export const Toggle = () => {
  const { isDark, setIsDark } = useTheme();

  const handleChange = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isDark}
      />
      <label htmlFor="check">Dark Mode</label>
    </div>
  );
};
