import React, { useEffect, useState } from "react";
import ThemeSwitcherContext from "./ThemeSwitcherContext";

const ThemeSwitcherContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const mode = darkMode ? 'dark' : 'light';
     useEffect(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode !== null) {
            setDarkMode(JSON.parse(savedMode));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    return (
        <ThemeSwitcherContext.Provider value={{ darkMode, setDarkMode,mode }}>
            {children}
        </ThemeSwitcherContext.Provider>
    );
};

export default ThemeSwitcherContextProvider;
 