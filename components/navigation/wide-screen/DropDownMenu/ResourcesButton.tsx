import { useState } from 'react';
import Item from './Item';

interface Props {
  buttonName: string;
  englishMode?: boolean | null;
}

import { Container, DropButton, Content } from './Styles';

const ResourcesButton: React.FC<Props> = ({ buttonName, englishMode }) => {
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
            heading={englishMode ? 'Produce' : 'Hortifruti'}
            link="/pt-br/recursos/hortifruti"
            description={
              englishMode
                ? 'Fruit and vegetable references for produce clerks'
                : 'Referências de frutas e verduras para balconistas de hortifrúti.'
            }
            iconColor="bg-[#00b755] hover:bg-[#009A46]/[.7] dark:bg-[#00B755]/[.7] dark:hover:bg-[#00B754"
          />
          <Item
            heading={englishMode ? 'Merchandising' : 'Merchandising'}
            description={
              englishMode
                ? 'Learn proven merchandising skills'
                : 'Aprenda habilidades comprovadas em merchandising'
            }
            link="/pt-br/recursos/merchandising"
            iconColor="dark:bg-[#AFA100] bg-[#938700]/[.7]"
          />
        </Content>
      </Container>
    </>
  );
};

export default ResourcesButton;
