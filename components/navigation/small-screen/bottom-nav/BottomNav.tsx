import { useRouter } from 'next/router';
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
          iconColor="bg-[#00b755] hover:bg-[#009A46]/[.7] dark:bg-[#00B755]/[.7] dark:hover:bg-[#00B754"
        />
        <DropDownButton
          buttonName={englishMode ? 'Guides' : 'Guias'}
          headingOne={
            englishMode
              ? 'Sales and Inventory Management'
              : 'Gerenciamento de Vendas e Estoques'
          }
          linkOne="/pt-br/aprender/vendas/intro"
          iconColor="dark:bg-[#5E9EFF] dark:hover:bg-[#8CB4FF] bg-[#0085F2] hover:bg-[#2969C2]"
          descriptionOne={
            englishMode
              ? 'Learn effective inventory management skills'
              : 'Desenvolva habilidades eficazes de gerenciamento de estoque.'
          }
        />
      </NavigationMenu>
    </BottomNavigationMenu>
  );
};

export default BottomNav;
