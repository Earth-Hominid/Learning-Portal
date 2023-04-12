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
    <ArticleTileContainer className={styles}>
      <TileTitle>{heading}</TileTitle>
      <ContentDescription>{description}</ContentDescription>
      <TileFooter>{englishMode ? `0 Reports` : `0 Relatórios`}</TileFooter>
    </ArticleTileContainer>
  );
};

export default CollectionCard;
