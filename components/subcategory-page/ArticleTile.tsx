import Link from 'next/link';
import Image from 'next/image';

import {
  ImageContainer,
  Subheading,
  Heading,
  Description,
  CardContainer,
  TopContainer,
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

const ArticleTile = ({ article }: { article: ArticleInterface }) => {
  const art = article.attributes;
  const capitalize = (s: string) => {
    if (typeof s !== 'string') return '';
    return s.toUpperCase();
  };

  const capitalizeCategory = capitalize(art.category);

  return (
    <CardContainer>
      <TopContainer>
        <ImageContainer>
          <Image
            src={art.image.data.attributes.formats.medium.url}
            alt={`Imagem de ${art.title}`}
            width="750"
            height="500"
            priority
            className="rounded-sm"
          />
        </ImageContainer>
        <div className="dark:text-white">
          <Subheading>{capitalizeCategory}</Subheading>
          <Heading>{art.title}</Heading>
        </div>
      </TopContainer>
      <Description>{art.description}</Description>
    </CardContainer>
  );
};

export default ArticleTile;
