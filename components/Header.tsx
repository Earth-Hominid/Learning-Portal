import { useRouter } from 'next/router';
import { useState } from 'react';
import TopNav from './header/top-nav/TopNav';
import BottomNav from './header/bottom-nav/BottomNav';

interface DarkModeContextType {
  darkMode: boolean | null;
  handleToggleThemeClick: Function;
}

const Header = ({ handleToggleThemeClick, darkMode }: DarkModeContextType) => {
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
      />
      {navigationMenuToggle ? (
        <BottomNav toggleNavigationButton={toggleNavigationButton} />
      ) : (
        ''
      )}
    </>
  );
};

export default Header;
