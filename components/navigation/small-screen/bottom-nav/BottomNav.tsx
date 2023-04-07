import SearchBar from '../bottom-searchbar/SearchBar';
import ThemeButton from '../../buttons/ThemeButton';
import LanguageButton from '../../buttons/LanguageButton';
import DemoButton from '../../buttons/Demo';
import LoginButton from '../../buttons/Login';
import LogoutButton from '../../buttons/LogOut';
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
  logOut,
  user,
}: {
  toggleNavigationButton: () => void;
  englishMode: boolean | null;
  darkMode: boolean | null;
  handleToggleLanguage: () => void;
  handleToggleThemeClick: () => void;
  handleAccountClick: () => void;
  handleDashboardClick: () => void;
  logOut: () => void;
  user: User | null;
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
          <LogoutButton englishMode={englishMode} logOut={logOut} />
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
