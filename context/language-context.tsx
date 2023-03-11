import { createContext, useState, useEffect } from 'react';

interface LanguageModeInterface {
  englishMode?: boolean | null;
  handleToggleLanguage?: () => void;
}

type LanguageProps = { children: React.ReactNode };

const language = {
  englishMode: true || false,
};

const initialState = {
  englishMode: false,
  handleToggleLanguage: (event: React.MouseEvent<HTMLElement>) => {},
};

export const LanguageContext = createContext(initialState);

export const LanguageProvider = ({ children }: LanguageProps) => {
  const [englishMode, setEnglishMode] = useState(false);

  // check language on component mount
  useEffect(() => {
    return () => checkLanguageMode();
  }, []);

  // check and reset language
  const checkLanguageMode = () => {
    const language = localStorage.getItem('selectedLanguage');
    if (language) {
      setEnglishMode(language === 'english' ? true : false);
    } else {
      localStorage.setItem('selectedLanguage', 'english');
      setEnglishMode(true);
    }
  };

  const toggleLanguage = () => {
    const language = localStorage.getItem('selectedLanguage');
    if (language) {
      localStorage.setItem(
        'selectedLanguage',
        language === 'english' ? 'portuguese' : 'english'
      );
    } else {
      localStorage.setItem('selectedLanguage', 'english');
    }
    setEnglishMode(!englishMode);
  };

  const handleToggleLanguage = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    toggleLanguage();
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
