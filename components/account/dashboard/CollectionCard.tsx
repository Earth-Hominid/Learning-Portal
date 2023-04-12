import Link from 'next/link';

import {
  ArticleTileContainer,
  TileTitle,
  ContentDescription,
  TileFooter,
} from './Styles';

interface ArticleProps {
  heading?: string;
  description?: string;
  styles?: string;
  englishMode?: boolean;
}

const CollectionCard: React.FC<ArticleProps> = ({
  heading,
  styles,
  description,
  englishMode,
}) => {
  return (
    <Link href={'/account/reports'}>
      <ArticleTileContainer className={styles}>
        <TileTitle>{heading}</TileTitle>
        <ContentDescription>{description}</ContentDescription>
        <TileFooter>{englishMode ? `Reports` : `Relatórios`}</TileFooter>
      </ArticleTileContainer>
    </Link>
  );
};

export default CollectionCard;
