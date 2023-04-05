import { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
// import AuthContext from '@/context/AuthContext';
import Logo from '../logo/Logo';
import ThemeButton from '../buttons/ThemeButton';
import LanguageButton from '../buttons/LanguageButton';
import LogInButton from '../buttons/LogIn';
import SignUpButton from '../buttons/SignUp';
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
}: {
  handleNavigationMenuClick: () => void;
  navigationMenuToggle: boolean;
  handleToggleThemeClick: () => void;
  handleToggleLanguage: () => void;
  englishMode: boolean | null;
  darkMode: boolean | null;
  toggleNavigationButton: () => void;
}) => {
  const router = useRouter();

  const handleAccountClick = () => {
    router.push('/account/login');
  };

  const handleSignUpClick = () => {
    router.push('/account/register');
  };

  // const { user, logout } = useContext(AuthContext);

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
          <li>
            <LogInButton
              englishMode={englishMode}
              handleAccountClick={handleAccountClick}
            />
          </li>
          <li>
            <SignUpButton englishMode={englishMode} />
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
        />
      ) : (
        ''
      )}
    </MainContainer>
  );
};

export default TopNav;
