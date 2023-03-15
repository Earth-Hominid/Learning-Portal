import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

interface Props {
  buttonName: string;
  heading: string;
  description: string;
}

import {
  Container,
  DropButton,
  Content,
  Item,
  SubMenuIcon,
  SubMenuContentContainer,
  SubMenuHeading,
  SubMenuDescription,
} from './Styles';

const DropDownButton: React.FC<Props> = ({
  heading,
  description,
  buttonName,
}) => {
  return (
    <>
      <Container>
        <DropButton className="dropbtn">{buttonName}</DropButton>
        <Content>
          <li>
            <Link href="">
              <Item>
                <SubMenuIcon></SubMenuIcon>
                <SubMenuContentContainer>
                  <SubMenuHeading>{heading}</SubMenuHeading>
                  <SubMenuDescription>{description}</SubMenuDescription>
                </SubMenuContentContainer>
              </Item>
            </Link>
          </li>
        </Content>
      </Container>
    </>
  );
};

export default DropDownButton;
