import { ThemeProvider } from '@emotion/react';
import { createContext, useContext, useEffect, useState } from 'react';
import { lightTheme, darkTheme } from '../../styles/themes';

interface IDarkModeContext {
  toggleDarkMode: () => void;
  dark: Boolean;
}

const DarkModeContext = createContext<IDarkModeContext>({
  toggleDarkMode: () => null,
  dark: false,
});

export const DarkModeProvider = ({ children }) => {
  const [dark, toggleDark] = useState(false);

  const toggleDarkMode = () => {
    toggleDark(!dark);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('darkMode', dark ? '1' : '0');
    }
  }, [dark]);

  return (
    <DarkModeContext.Provider value={{ toggleDarkMode, dark }}>
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>{children}</ThemeProvider>
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error('No context exists');
  }

  return context;
};
