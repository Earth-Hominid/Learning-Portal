import Logo from './logo/Logo';
import ThemeButton from './buttons/ThemeButton';
import LanguageButton from './buttons/LanguageButton';
import LogInButton from './buttons/LogIn';
import SignUpButton from './buttons/SignUp';
import DropDownButton from './wide-screen/DropDownMenu/DropDownButton';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import BottomNav from './small-screen/bottom-nav/BottomNav';

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
  return (
    <MainContainer>
      <InsideContainer>
        <Logo />
        <MainNav aria-label={'Main menu'}>
          <DropDownButton
            buttonName={englishMode ? 'Resources' : 'Recursos'}
            headingOne={englishMode ? 'Produce' : 'Hortifruti'}
            linkOne={englishMode ? '/en-us/produce' : '/pt-br/hortifruti'}
            headingTwo=""
            linkTwo=""
          />
          <DropDownButton
            buttonName={englishMode ? 'Guides' : 'Guias'}
            headingOne={englishMode ? 'Procurement' : 'Compras'}
            linkOne={englishMode ? '/en-us/purchasing' : '/pt-br/compras'}
            headingTwo={englishMode ? 'Merchandising' : 'Merchandising'}
            linkTwo={
              englishMode ? '/en-us/merchandising' : '/pt-br/merchandising'
            }
            descriptionOne={
              englishMode
                ? 'Learn effective purchasing management skills'
                : 'Aprenda habilidades eficazes de gerenciamento de compras'
            }
            descriptionTwo={
              englishMode
                ? 'Learn proven merchandising skills'
                : 'Aprenda habilidades comprovadas em merchandising'
            }
          />
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
