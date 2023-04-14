import { useContext } from 'react';
import { useRouter } from 'next/router';
import AuthContext from '@/context/auth-context';
import Logo from '../logo/Logo';
import ThemeButton from '../buttons/ThemeButton';
import LanguageButton from '../buttons/LanguageButton';
import DemoButton from '../buttons/DemoButton';
import LoginButton from '../buttons/LoginButton';
import LogoutButton from '../buttons/LogoutButton';
import DashboardButton from '../buttons/Dashboard';
import ResourcesButton from './DropDownMenu/ResourcesButton';
import GuidesButton from './DropDownMenu/GuidesButton';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import BottomNav from '../small-screen/bottom-nav/BottomNav';
import SearchBar from './searchbar/SearchBar';

import {
  MainContainer,
  InsideContainer,
  IconContainer,
  MainNav,
  RelativeContainer,
  AbsoluteContainer,
  StyledButton,
  AuthHolder,
} from './Styles';

const TopNav = ({
  handleNavigationMenuClick,
  navigationMenuToggle,
  darkMode,
  englishMode,
  handleToggleThemeClick,
  handleToggleLanguage,
  toggleNavigationButton,
  handleDemoAccountClick,
}: {
  handleNavigationMenuClick: () => void;
  navigationMenuToggle: boolean;
  englishMode: boolean | null;
  darkMode: boolean | null;
  toggleNavigationButton: () => void;
  handleToggleThemeClick: (event: React.MouseEvent<HTMLElement>) => void;
  handleToggleLanguage?: (event: React.MouseEvent<HTMLElement>) => void;
  handleDemoAccountClick: () => void;
}) => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const handleAccountClick = () => {
    router.push('/account/login');
  };
  const handleDashboardClick = () => {
    router.push('/account/dashboard');
  };

  return (
    <MainContainer>
      <InsideContainer>
        <Logo />
        <MainNav aria-label={'Main menu'}>
          <ResourcesButton
            buttonName={englishMode ? 'Resources' : 'Recursos'}
          />
          <GuidesButton buttonName={englishMode ? 'Guides' : 'Guias'} />
        </MainNav>
        <IconContainer>
          <RelativeContainer>
            <AbsoluteContainer></AbsoluteContainer>
            <StyledButton
              onClick={handleNavigationMenuClick}
              className="lg:hidden"
            >
              {navigationMenuToggle ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </StyledButton>
          </RelativeContainer>
        </IconContainer>
        <SearchBar />
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
          {user ? (
            ''
          ) : (
            <li>
              <DemoButton handleDemoAccountClick={handleDemoAccountClick} />
            </li>
          )}

          {user ? (
            <DashboardButton
              handleDashboardClick={handleDashboardClick}
              englishMode={englishMode}
            />
          ) : (
            ''
          )}
          <li>
            {user ? (
              <LogoutButton englishMode={englishMode} />
            ) : (
              <LoginButton
                englishMode={englishMode}
                handleAccountClick={handleAccountClick}
              />
            )}
          </li>
        </AuthHolder>
      </InsideContainer>
      {navigationMenuToggle ? (
        <BottomNav
          toggleNavigationButton={toggleNavigationButton}
          englishMode={englishMode}
          darkMode={darkMode}
          handleToggleLanguage={handleToggleLanguage}
          handleToggleThemeClick={handleToggleThemeClick}
          handleAccountClick={handleAccountClick}
          user={user}
          handleDashboardClick={handleDashboardClick}
          handleDemoAccountClick={handleDemoAccountClick}
        />
      ) : (
        ''
      )}
    </MainContainer>
  );
};

export default TopNav;
