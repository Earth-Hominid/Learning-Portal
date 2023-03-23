import Item from './Item';

interface Props {
  buttonName: string;
  englishMode?: boolean | null;
}

import { Container, DropButton, Content } from './Styles';

const ResourcesButton: React.FC<Props> = ({ buttonName, englishMode }) => {
  return (
    <>
      <Container>
        <DropButton>{buttonName}</DropButton>
        <Content>
          <Item
            heading={englishMode ? 'Produce' : 'Hortifruti'}
            link={englishMode ? '/en-us/produce' : '/pt-br/hortifruti'}
            description={
              englishMode
                ? 'Fruit and vegetable references for produce clerks'
                : 'Referências de frutas e verduras para balconistas de hortifrúti.'
            }
            iconColor="bg-[#00b755] hover:bg-[#009A46]/[.7] dark:bg-[#00B755]/[.7] dark:hover:bg-[#00B754"
          />
        </Content>
      </Container>
    </>
  );
};

export default ResourcesButton;
