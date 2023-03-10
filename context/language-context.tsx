import { createContext, useState } from 'react';

interface LanguageModeInterface {
  englishMode: boolean | null;
  handleToggleLanguage?: Function;
}

type LanguageProps = { children: React.ReactNode };

const languageTheme = {
  englishMode: true || false,
};

const initialState = {
  englishMode: false,
  handleToggleLanguage: (event: React.MouseEvent<HTMLElement>) => {},
};

export const LanguageContext = createContext(initialState);

export const LanguageProvider = ({ children }: LanguageProps) => {
  const [englishMode, setEnglishMode] = useState(false);

  const handleToggleLanguage = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setEnglishMode(!englishMode);
  };

  return (
    <LanguageContext.Provider
      value={{
        englishMode,
        handleToggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
