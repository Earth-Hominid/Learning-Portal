import { useEffect, useState } from 'react';
import Item from './Item';

interface Props {
  buttonName: string;
  englishMode?: boolean | null;
}

import { Container, DropButton, Content } from './Styles';

const GuidesButton: React.FC<Props> = ({ buttonName, englishMode }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const handleDropDownClick = () => {
    if (!dropDownOpen) {
      setDropDownOpen(true);
    } else {
      setDropDownOpen(false);
    }
  };

  return (
    <>
      <Container>
        <DropButton onClick={handleDropDownClick}>{buttonName}</DropButton>
        <Content className={dropDownOpen ? 'flex' : 'hidden'}>
          <Item
            heading={
              englishMode
                ? 'Sales and Inventory Management'
                : 'Gerenciamento de Vendas e Estoques'
            }
            link="/pt-br/guias/vendas/intro"
            description={
              englishMode
                ? 'Learn effective inventory management skills'
                : 'Desenvolva habilidades eficazes de gerenciamento de estoque.'
            }
            iconColor="
            dark:bg-[#5E9EFF] dark:hover:bg-[#8CB4FF] bg-[#0085F2] hover:bg-[#2969C2]"
          />
        </Content>
      </Container>
    </>
  );
};

export default GuidesButton;
