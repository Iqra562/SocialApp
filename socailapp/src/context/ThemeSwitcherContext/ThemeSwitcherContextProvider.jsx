import React, { useState } from "react";
import ThemeSwitcherContext from "./ThemeSwitcherContext";

const ThemeSwitcherContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const mode = darkMode ? 'dark' : 'light';

    return (
        <ThemeSwitcherContext.Provider value={{ darkMode, setDarkMode,mode }}>
            {children}
        </ThemeSwitcherContext.Provider>
    );
};

export default ThemeSwitcherContextProvider;
 