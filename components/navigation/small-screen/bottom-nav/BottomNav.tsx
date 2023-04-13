import SearchBar from '../bottom-searchbar/SearchBar';
import ThemeButton from '../../buttons/ThemeButton';
import LanguageButton from '../../buttons/LanguageButton';
import DemoButton from '../../buttons/Demo';
import LoginButton from '../../buttons/LoginButton';
import LogoutButton from '../../buttons/Logout';
import GuidesButton from '../DropDownButton/GuidesButton';
import ResourcesButton from '../DropDownButton/ResourcesButton';
import DashboardButton from '../../buttons/Dashboard';

type User = {
  username: string;
  email: string;
};

import {
  BottomNavigationMenu,
  ActionButtonHolder,
  NavigationMenu,
  AuthHolder,
} from './Styles';

const BottomNav = ({
  toggleNavigationButton,
  handleToggleThemeClick,
  englishMode,
  darkMode,
  handleToggleLanguage,
  handleAccountClick,
  handleDashboardClick,
  user,
  handleDemoAccountClick,
}: {
  toggleNavigationButton: () => void;
  englishMode: boolean | null;
  darkMode: boolean | null;
  handleToggleThemeClick: (event: React.MouseEvent<HTMLElement>) => void;
  handleAccountClick: () => void;
  handleDashboardClick: () => void;
  user: User | null;
  handleToggleLanguage?: (event: React.MouseEvent<HTMLElement>) => void;
  handleDemoAccountClick: () => void;
}) => {
  return (
    <BottomNavigationMenu>
      <AuthHolder>
        <li>
          <ThemeButton
            handleToggleThemeClick={handleToggleThemeClick}
            darkMode={darkMode}
            englishMode={englishMode}
          />
        </li>
        <li>
          <LanguageButton
            handleToggleLanguage={handleToggleLanguage}
            englishMode={englishMode}
          />
        </li>
        <li>
          <DemoButton handleDemoAccountClick={handleDemoAccountClick} />
        </li>
        <li>
          {user ? (
            <DashboardButton
              englishMode={englishMode}
              handleDashboardClick={handleDashboardClick}
            />
          ) : (
            ''
          )}
        </li>
      </AuthHolder>
      <ActionButtonHolder>
        {user ? (
          <LogoutButton englishMode={englishMode} />
        ) : (
          <LoginButton
            englishMode={englishMode}
            handleAccountClick={handleAccountClick}
          />
        )}
      </ActionButtonHolder>
      <ActionButtonHolder>
        <SearchBar />
      </ActionButtonHolder>
      <NavigationMenu>
        <ResourcesButton
          buttonName={englishMode ? 'Resources' : 'Recursos'}
          englishMode={englishMode}
        />
        <GuidesButton
          englishMode={englishMode}
          buttonName={englishMode ? 'Guides' : 'Guias'}
        />
      </NavigationMenu>
    </BottomNavigationMenu>
  );
};

export default BottomNav;
