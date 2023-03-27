import { useContext } from 'react';
import { LanguageContext } from '@/context/language-context';
import ArticleTile from './ArticleTile';

interface ArticleInterface {
  id: string;
  attributes: {
    content: string;
    subcategory: string;
    categoryLink: string;
    headingLink: string;
    title: string;
    slug: string;
    category: string;
    description: string;
    published_at: string;
    created_at: string;
    updated_at: string;
  };
}

interface MerchandiseInterface {
  id: string;
  attributes: {
    content: string;
    subcategory: string;
    categoryLink: string;
    headingLink: string;
    title: string;
    slug: string;
    category: string;
    description: string;
    published_at: string;
    created_at: string;
    updated_at: string;
  };
}

import {
  FeaturedArticlesContainer,
  TileContainer,
  FeaturedHeading,
} from './Styles';

const FeaturedArticles = ({
  article,
  merchandise,
}: {
  article: ArticleInterface;
  merchandise: MerchandiseInterface;
}) => {
  const { englishMode } = useContext(LanguageContext);

  const art = article.attributes;
  const merch = merchandise.attributes;

  return (
    <FeaturedArticlesContainer className="featured-articles">
      <FeaturedHeading>
        {englishMode ? 'Featured Articles' : 'Artigos em destaque'}
      </FeaturedHeading>
      <TileContainer className="tile-container">
        <ArticleTile
          heading={art.title}
          subheading={art.category}
          description={art.description}
          headingLink={`/pt-br/hortifruti/frutas/${art.slug}`}
          subheadingLink={art.categoryLink}
        />
        <ArticleTile
          heading={merch.title}
          subheading={merch.category}
          description={merch.description}
          headingLink={`/pt-br/merchandising/${merch.slug}`}
          subheadingLink={merch.categoryLink}
        />
      </TileContainer>
    </FeaturedArticlesContainer>
  );
};

export default FeaturedArticles;
