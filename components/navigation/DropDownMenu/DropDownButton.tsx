import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

interface Props {
  title: string;
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

const DropDownButton = () => {
  return (
    <>
      <Container>
        <DropButton className="dropbtn">Drop Button</DropButton>
        <Content>
          <li>
            <Link href="">
              <Item>
                <SubMenuIcon></SubMenuIcon>
                <SubMenuContentContainer>
                  <SubMenuHeading>Heading</SubMenuHeading>
                  <SubMenuDescription>
                    This is a very long long link.
                  </SubMenuDescription>
                </SubMenuContentContainer>
              </Item>
            </Link>
          </li>

          <Item>
            <a href="#">Link 2</a>
          </Item>
          <Item>
            <a href="#">Link 3</a>
          </Item>
        </Content>
      </Container>
    </>
  );
};

export default DropDownButton;
