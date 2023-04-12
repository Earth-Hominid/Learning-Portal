import { createContext, useState, useEffect } from 'react';

interface DarkModeInterface {
  darkMode?: boolean | null;
  handleToggleThemeClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

type ThemeProps = { children: React.ReactNode };

const theme = {
  darkMode: true || false,
};

const initialState = {
  darkMode: false,
  handleToggleThemeClick: (event: React.MouseEvent<HTMLElement>) => {},
};

export const DarkContext = createContext(initialState);

export const DarkProvider = ({ children }: ThemeProps) => {
  const [darkMode, setDarkMode] = useState(false);

  // check theme on component mount
  useEffect(() => {
    return () => checkDarkMode();
  }, []);

  // check and reset theme
  const checkDarkMode = () => {
    const theme = localStorage.getItem('theme');
    if (
      theme ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDarkMode(theme === 'dark' ? true : false);
    } else {
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  const toggleTheme = () => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
    } else {
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  const handleToggleThemeClick = (event: React.MouseEvent) => {
    event.preventDefault();
    toggleTheme();
  };

  return (
    <DarkContext.Provider value={{ darkMode, handleToggleThemeClick }}>
      {children}
    </DarkContext.Provider>
  );
};
