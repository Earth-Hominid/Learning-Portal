import Logo from '../logo/Logo';
import ThemeButton from './buttons/ThemeButton';
import LanguageButton from './buttons/LanguageButton';
import LogInButton from './buttons/LogIn';
import SignUpButton from './buttons/SignUp';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import {
  MainContainer,
  InsideContainer,
  LinkText,
  IconContainer,
  MainNav,
  RelativeContainer,
  AbsoluteContainer,
  StyledButton,
  ActionButtonHolder,
  ActionButtonContainer,
  AuthHolder,
} from './Styles';

const TopNav = ({
  handleNavigationMenuClick,
  navigationMenuToggle,
  darkMode,
  englishMode,
  handleToggleThemeClick,
  handleToggleLanguage,
}: {
  handleNavigationMenuClick: () => void;
  navigationMenuToggle: boolean;
  handleToggleThemeClick: () => void;
  handleToggleLanguage: () => void;
  englishMode: boolean | null;
  darkMode: boolean | null;
}) => {
  return (
    <MainContainer>
      <InsideContainer>
        <Logo />
        <MainNav aria-label={'Main menu'}>
          <a href="#">
            <ActionButtonHolder>
              <LinkText>{englishMode ? 'Guides' : 'Guias'}</LinkText>
            </ActionButtonHolder>
          </a>
          <a href="#">
            <ActionButtonHolder>
              <LinkText>{englishMode ? 'Resources' : 'Recursos'}</LinkText>
            </ActionButtonHolder>
          </a>
        </MainNav>

        <ActionButtonContainer></ActionButtonContainer>
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
            <LogInButton englishMode={englishMode} />
          </li>
          <li>
            <SignUpButton englishMode={englishMode} />
          </li>
        </AuthHolder>
      </InsideContainer>
    </MainContainer>
  );
};

export default TopNav;
