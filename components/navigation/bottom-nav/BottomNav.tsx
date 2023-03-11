import Link from 'next/link';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import MenuAccordian from './accordian/MenuAccordian';
import SearchBar from '../bottom-searchbar/SearchBar';
import ThemeButton from '../buttons/ThemeButton';
import LanguageButton from '../buttons/LanguageButton';
import LogInButton from '../buttons/LogIn';
import SignUpButton from '../buttons/SignUp';

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

  const BusinessObject = {
    title: 'Rede BS',
    datapoints: [{ name: 'Sobre nós', id: '1', url: '/about/' }],
  };

  const LearningObject = {
    title: 'Aprendendo',
    datapoints: [
      {
        name: 'Atendimento ao Cliente',
        id: '1',
        url: '/atendimento-ao-cliente',
      },
      {
        name: 'Cadeia de mantimentos',
        id: '2',
        url: '/supply-chain',
      },
    ],
  };

  const StoreObject = {
    title: 'Supermercado',
    datapoints: [
      {
        name: 'Hortifruti',
        id: '1',
        url: '/hortifruti',
      },
    ],
  };

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
        <MenuAccordian props={StoreObject} />
        <MenuAccordian props={LearningObject} />
        <MenuAccordian props={BusinessObject} />
      </NavigationMenu>
    </BottomNavigationMenu>
  );
};

export default BottomNav;
