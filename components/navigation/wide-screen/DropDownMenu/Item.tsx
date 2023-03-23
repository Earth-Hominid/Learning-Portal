import Link from 'next/link';

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
  link: string;
  iconColor?: string;
}

const Item: React.FC<Props> = ({ heading, description, link, iconColor }) => {
  return (
    <>
      <li>
        <Link href={`${link}`}>
          <ItemContainer>
            <SubMenuIcon className={iconColor}></SubMenuIcon>
            <SubMenuContentContainer>
              <SubMenuHeading>{heading}</SubMenuHeading>
              <SubMenuDescription>{description}</SubMenuDescription>
            </SubMenuContentContainer>
          </ItemContainer>
        </Link>
      </li>
    </>
  );
};

export default Item;
