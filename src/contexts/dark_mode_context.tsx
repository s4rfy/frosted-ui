import { createContext, useContext, useState, useMemo } from "react";

export const DarkModeContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }

  return context;
};

export const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return <DarkModeContext.Provider value={useMemo(() => ({ isDarkMode, toggleDarkMode: () => setIsDarkMode(!isDarkMode) }), [isDarkMode])}>{children}</DarkModeContext.Provider>;
};