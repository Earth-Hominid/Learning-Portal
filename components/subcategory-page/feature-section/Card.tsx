import Link from 'next/link';
import Image from 'next/image';

import {
  ArticleTileContainer,
  TileTitle,
  ContentParagraph,
  Subheading,
} from './Styles';

interface ArticleInterface {
  id: number;
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
    image: {
      data: {
        attributes: {
          formats: {
            thumbnail: {
              url: string;
            };
            large: {
              url: string;
            };
            medium: {
              url: string;
            };
          };
        };
      };
    };
  };
}

const Card = ({ article }: { article: ArticleInterface }) => {
  const art = article.attributes;
  const capitalize = (s: string) => {
    if (typeof s !== 'string') return '';
    return s.toUpperCase();
  };

  const capitalizeCategory = capitalize(art.category);

  return (
    <ArticleTileContainer>
      <Link href={`frutas/${art.slug}`}>
        <div className="items-center flex ">
          <Image
            src={art.image.data.attributes.formats.thumbnail.url}
            alt={`Imagem de ${art.title}`}
            width="750"
            height="500"
            className="h-10 w-10 rounded-full object-cover"
          />
          <Subheading>{art.category}</Subheading>
        </div>
        <div className="flex-grow flex-shrink my-5 max-w-full">
          <TileTitle>{art.title}</TileTitle>
          <ContentParagraph>{art.description}</ContentParagraph>
        </div>
      </Link>
    </ArticleTileContainer>
  );
};

export default Card;
