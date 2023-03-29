import Item from './Item';

interface Props {
  buttonName: string;
  englishMode?: boolean | null;
}

import { Container, DropButton, Content } from './Styles';

const GuidesButton: React.FC<Props> = ({ buttonName, englishMode }) => {
  return (
    <>
      <Container>
        <DropButton>{buttonName}</DropButton>
        <Content>
          <Item
            heading={
              englishMode
                ? 'Sales and Inventory Management'
                : 'Gerenciamento de Vendas e Estoques'
            }
            link="/pt-br/aprender/vendas/intro"
            description={
              englishMode
                ? 'Learn effective inventory management skills'
                : 'Desenvolva habilidades eficazes de gerenciamento de estoque.'
            }
            iconColor="
            dark:bg-[#5E9EFF] dark:hover:bg-[#8CB4FF] bg-[#0085F2] hover:bg-[#2969C2]"
          />
          <Item
            heading={englishMode ? 'Merchandising' : 'Merchandising'}
            description={
              englishMode
                ? 'Learn proven merchandising skills'
                : 'Aprenda habilidades comprovadas em merchandising'
            }
            link={englishMode ? '/en-us/merchandising' : '/pt-br/merchandising'}
            iconColor="dark:bg-[#AFA100] bg-[#938700]/[.7]"
          />
        </Content>
      </Container>
    </>
  );
};

export default GuidesButton;
