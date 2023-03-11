import Link from 'next/link';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import MenuAccordian from './accordian/MenuAccordian';
import SearchBar from '../searchbar/SearchBar';

import {
  BottomNavigationMenu,
  ActionButtonHolder,
  NavigationMenu,
} from './Styles';

const BottomNav = ({
  toggleNavigationButton,
  englishMode,
  darkMode,
  handleToggleLanguage,
}: {
  toggleNavigationButton: () => void;
  englishMode: boolean | null;
  darkMode: boolean | null;
  handleToggleLanguage: () => void;
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
