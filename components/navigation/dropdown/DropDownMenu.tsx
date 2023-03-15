import Link from 'next/link';
import { useContext } from 'react';

import MenuList from './MenuList';

import { MenuContainer, MenuHeader, ButtonHolder, IconHolder } from './Styles';

const DropdownMenu = () => {
  return (
    <MenuContainer>
      <MenuHeader>Categorias</MenuHeader>
      <Link href="/articles">
        <ButtonHolder>
          <p className="ml-1">Artigos</p>
        </ButtonHolder>
      </Link>
      <MenuList />
      <MenuHeader>Supermercado</MenuHeader>
      <Link href="/hortifruti">
        <ButtonHolder>
          <p className="ml-1">Hortifruti</p>
        </ButtonHolder>
      </Link>
      <MenuHeader>Aprendendo</MenuHeader>
      <Link href="/atendimento-ao-cliente">
        <ButtonHolder>
          <p className="ml-1">Atendimento ao Cliente</p>
        </ButtonHolder>
      </Link>
      <Link href="/supply-chain">
        <ButtonHolder>
          <p className="ml-1">Cadeia de mantimentos</p>
        </ButtonHolder>
      </Link>
      <MenuList />
      <MenuHeader>Rede BS</MenuHeader>
      <Link href="/about">
        <ButtonHolder>
          <p className="ml-1">Sobre nós</p>
        </ButtonHolder>
      </Link>
    </MenuContainer>
  );
};

export default DropdownMenu;
