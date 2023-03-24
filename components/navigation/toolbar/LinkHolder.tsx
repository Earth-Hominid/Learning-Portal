import Link from 'next/link';
import {
  Container,
  ParentPageText,
  CurrentPageText,
  SpacingContainer,
  IconHolder,
} from './Styles';

import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline';

interface Props {
  currentPage: string;
  parentPage: string;
  currentPageTitle: string;
  parentPageTitle: string;
}

const LinkHolder: React.FC<Props> = ({
  currentPage,
  currentPageTitle,
  parentPageTitle,
  parentPage,
}) => {
  if (currentPageTitle == 'Rede BS Docs') return <></>;

  if (parentPageTitle == '#')
    return (
      <>
        <IconHolder>
          <ChevronDoubleRightIcon />
        </IconHolder>
        <Link href={currentPage}>
          <CurrentPageText>{currentPageTitle}</CurrentPageText>
        </Link>
      </>
    );

  return (
    <>
      <IconHolder>
        <ChevronDoubleRightIcon />
      </IconHolder>
      <Link href={parentPage}>
        <ParentPageText>{parentPageTitle}</ParentPageText>
      </Link>
      <IconHolder>
        <ChevronDoubleRightIcon />
      </IconHolder>
      <Link href={currentPage}>
        <CurrentPageText>{currentPageTitle}</CurrentPageText>
      </Link>
    </>
  );
};

export default LinkHolder;
