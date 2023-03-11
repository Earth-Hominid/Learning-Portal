import { useRouter } from 'next/router';
import { useState } from 'react';
import TopNav from './navigation/top-nav/TopNav';
import BottomNav from './navigation/bottom-nav/BottomNav';

interface DarkModeContextType {
  darkMode: boolean | null;
  englishMode: boolean | null;
  handleToggleThemeClick: () => void;
  handleToggleLanguage: () => void;
}

const Header = ({
  handleToggleThemeClick,
  darkMode,
  englishMode,
  handleToggleLanguage,
}: DarkModeContextType) => {
  const [navigationMenuToggle, setNavigationMenuToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigationButton = () => {
    if (navigationMenuToggle) {
      setNavigationMenuToggle(false);
      setIsOpen(navigationMenuToggle);
    } else {
      setNavigationMenuToggle(true);
      setIsOpen(navigationMenuToggle);
    }
  };

  const handleNavigationMenuClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    toggleNavigationButton();
    document.documentElement.scrollTop = 0;
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
      />
      {navigationMenuToggle ? (
        <BottomNav
          toggleNavigationButton={toggleNavigationButton}
          englishMode={englishMode}
          darkMode={darkMode}
          handleToggleLanguage={handleToggleLanguage}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default Header;
