import Link from 'next/link';
import LinkHolder from './LinkHolder';

import {
  Container,
  ParentPageText,
  CurrentPageText,
  SpacingContainer,
  IconHolder,
} from './Styles';

import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline';
import React from 'react';

interface Props {
  mainPage: string;
  currentPage: string;
  parentPage: string;
  mainPageTitle: string;
  currentPageTitle: string;
  parentPageTitle: string;
}

const ToolBar: React.FC<Props> = ({
  mainPage,
  currentPage,
  mainPageTitle,
  currentPageTitle,
  parentPageTitle,
  parentPage,
}) => {
  return (
    <>
      <Container>
        <SpacingContainer>
          <Link href={mainPage}>
            <ParentPageText>{mainPageTitle}</ParentPageText>
          </Link>
          <LinkHolder
            currentPageTitle={currentPageTitle}
            parentPage={parentPage}
            parentPageTitle={parentPageTitle}
            currentPage={currentPage}
          />
        </SpacingContainer>
      </Container>
    </>
  );
};

export default ToolBar;
