import { useRouter } from 'next/router';
import SearchBar from '../bottom-searchbar/SearchBar';
import ThemeButton from '../../buttons/ThemeButton';
import LanguageButton from '../../buttons/LanguageButton';
import DemoButton from '../../buttons/Demo';
import LoginButton from '../../buttons/Login';
import GuidesButton from '../DropDownButton/GuidesButton';
import ResourcesButton from '../DropDownButton/ResourcesButton';

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
}: {
  toggleNavigationButton: () => void;
  englishMode: boolean | null;
  darkMode: boolean | null;
  handleToggleLanguage: () => void;
  handleToggleThemeClick: () => void;
  handleAccountClick: () => void;
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
        <LoginButton
          englishMode={englishMode}
          handleAccountClick={handleAccountClick}
        />
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
