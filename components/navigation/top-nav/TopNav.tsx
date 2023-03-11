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
  DropDownContainer,
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
        <DropDownContainer>
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
        </DropDownContainer>

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
          <ThemeButton
            handleToggleThemeClick={handleToggleThemeClick}
            darkMode={darkMode}
            englishMode={englishMode}
          />
          <LanguageButton
            handleToggleLanguage={handleToggleLanguage}
            englishMode={englishMode}
          />
          <LogInButton englishMode={englishMode} />
          <SignUpButton englishMode={englishMode} />
        </AuthHolder>
      </InsideContainer>
    </MainContainer>
  );
};

export default TopNav;
