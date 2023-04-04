import Link from 'next/link';

import {
  ArticleTileContainer,
  SubHeadingLinkText,
  TileTitle,
  ContentParagraph,
} from './Styles';

interface ArticleProps {
  subheadingLink: string;
  subheading?: string;
  heading?: string;
  headingLink: string;
  description?: string;
}

const ArticleCard: React.FC<ArticleProps> = ({
  heading,
  headingLink,
  subheadingLink,
  subheading,
  description,
}) => {
  const capitalizeSubheading = subheading?.toUpperCase();
  return (
    <ArticleTileContainer>
      <Link href={subheadingLink}>
        <SubHeadingLinkText>{capitalizeSubheading}</SubHeadingLinkText>
      </Link>
      <TileTitle>
        <Link href={headingLink}>{heading}</Link>
      </TileTitle>
      <ContentParagraph>{description}</ContentParagraph>
    </ArticleTileContainer>
  );
};

export default ArticleCard;
