import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Item from './Item';

interface Props {
  buttonName: string;
  headingOne?: string;
  headingTwo?: string;
  descriptionOne?: string;
  descriptionTwo?: string;
  linkOne: string;
  linkTwo: string;
}

import { Container, DropButton, Content } from './Styles';

const DropDownButton: React.FC<Props> = ({
  buttonName,
  headingOne,
  headingTwo,
  descriptionOne,
  descriptionTwo,
  linkOne,
  linkTwo,
}) => {
  return (
    <>
      <Container>
        <DropButton>{buttonName}</DropButton>
        <Content>
          <li>
            <Link href={`${linkOne}`}>
              <Item heading={headingOne} description={descriptionOne} />
            </Link>
          </li>
          <li>
            <Link href={`${linkTwo}`}>
              <Item heading={headingTwo} description={descriptionTwo} />
            </Link>
          </li>
        </Content>
      </Container>
    </>
  );
};

export default DropDownButton;
