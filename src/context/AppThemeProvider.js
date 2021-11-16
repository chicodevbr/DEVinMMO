import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../style/theme';

const themeContext = createContext();
themeContext.displayName = 'ThemeContext';

const AppThemeProvider = themeContext.Provider;

export const useThemeToggle = () => {
  const ctx = useContext(themeContext);
  if (!ctx) {
    throw new Error('useThemeToggle must be used within an AppThemeProvider.');
  }
  return ctx;
};

export const AppTheme = (props) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(getFromLocalStorage, []);
  useEffect(setToLocalStorage, [isDark]);

  function getFromLocalStorage() {
    const themeStorage = localStorage.getItem('app-dark-mode');

    if (themeStorage) {
      setIsDark(themeStorage === 'true');
    }
  }

  function setToLocalStorage() {
    return localStorage.setItem('app-dark-mode', isDark);
  }

  function toggleTheme() {
    setIsDark((darkMode) => !darkMode);
  }

  return (
    <AppThemeProvider value={{ isDark, toggleTheme }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        {props.children}
      </ThemeProvider>
    </AppThemeProvider>
  );
};
