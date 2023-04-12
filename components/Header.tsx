import { useRouter } from 'next/router';
import { useState, useContext } from 'react';
import AuthContext from '../context/auth-context';
import TopNav from './navigation/wide-screen/TopNav';

interface DarkModeContextType {
  darkMode: boolean | null;
  englishMode: boolean | null;
  handleToggleThemeClick: (event: React.MouseEvent<HTMLElement>) => void;
  handleToggleLanguage?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Header = ({
  handleToggleThemeClick,
  darkMode,
  englishMode,
  handleToggleLanguage,
}: DarkModeContextType) => {
  const [navigationMenuToggle, setNavigationMenuToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { login } = useContext(AuthContext);

  const toggleNavigationButton = () => {
    if (navigationMenuToggle) {
      setNavigationMenuToggle(false);
      setIsOpen(navigationMenuToggle);
    } else {
      setNavigationMenuToggle(true);
      setIsOpen(navigationMenuToggle);
    }
  };

  const handleNavigationMenuClick = () => {
    toggleNavigationButton();
    document.documentElement.scrollTop = 0;
  };

  const LoginDemoAccount = () => {
    let email = 'demoaccount@demoaccount.com';
    let identifier = 'demoaccount123';
    let password = 'demoaccount123';

    login({ email, identifier, password });
  };

  const handleDemoAccountClick = () => {
    LoginDemoAccount();
  };

  return (
    <>
      <TopNav
        darkMode={darkMode}
        handleToggleThemeClick={handleToggleThemeClick}
        handleNavigationMenuClick={handleNavigationMenuClick}
        navigationMenuToggle={navigationMenuToggle}
        handleToggleLanguage={handleToggleLanguage}
        englishMode={englishMode}
        toggleNavigationButton={toggleNavigationButton}
        handleDemoAccountClick={handleDemoAccountClick}
      />
    </>
  );
};

export default Header;
