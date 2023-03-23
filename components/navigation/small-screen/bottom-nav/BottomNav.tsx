import Link from 'next/link';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import MenuAccordian from './accordian/MenuAccordian';
import SearchBar from '../bottom-searchbar/SearchBar';
import ThemeButton from '../../buttons/ThemeButton';
import LanguageButton from '../../buttons/LanguageButton';
import LogInButton from '../../buttons/LogIn';
import SignUpButton from '../../buttons/SignUp';
import DropDownButton from '../DropDownButton/DropDownButton';

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
}: {
  toggleNavigationButton: () => void;
  englishMode: boolean | null;
  darkMode: boolean | null;
  handleToggleLanguage: () => void;
  handleToggleThemeClick: () => void;
}) => {
  const router = useRouter();

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
      </AuthHolder>
      <ActionButtonHolder>
        <SignUpButton englishMode={englishMode} />
      </ActionButtonHolder>
      <ActionButtonHolder>
        <LogInButton englishMode={englishMode} />
      </ActionButtonHolder>
      <ActionButtonHolder>
        <SearchBar />
      </ActionButtonHolder>
      <NavigationMenu>
        <DropDownButton
          buttonName={englishMode ? 'Resources' : 'Recursos'}
          headingOne={englishMode ? 'Produce' : 'Hortifruti'}
          linkOne={englishMode ? '/en-us/produce' : '/pt-br/hortifruti'}
          descriptionOne={
            englishMode
              ? 'Fruit and vegetable references for produce clerks'
              : 'Referências de frutas e verduras para balconistas de hortifrúti.'
          }
        />
        <DropDownButton
          buttonName={englishMode ? 'Guides' : 'Guias'}
          headingOne={englishMode ? 'Procurement' : 'Compras'}
          linkOne={englishMode ? '/en-us/purchasing' : '/pt-br/compras'}
          headingTwo={englishMode ? 'Merchandising' : 'Merchandising'}
          linkTwo={
            englishMode ? '/en-us/merchandising' : '/pt-br/merchandising'
          }
        />
      </NavigationMenu>
    </BottomNavigationMenu>
  );
};

export default BottomNav;
