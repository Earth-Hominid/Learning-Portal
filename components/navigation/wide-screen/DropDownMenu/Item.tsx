import {
  ItemContainer,
  SubMenuIcon,
  SubMenuContentContainer,
  SubMenuHeading,
  SubMenuDescription,
} from './Styles';

interface Props {
  heading?: string;
  description?: string;
}

const Item: React.FC<Props> = ({ heading, description }) => {
  return (
    <>
      <ItemContainer>
        <SubMenuIcon></SubMenuIcon>
        <SubMenuContentContainer>
          <SubMenuHeading>{heading}</SubMenuHeading>
          <SubMenuDescription>{description}</SubMenuDescription>
        </SubMenuContentContainer>
      </ItemContainer>
    </>
  );
};

export default Item;
