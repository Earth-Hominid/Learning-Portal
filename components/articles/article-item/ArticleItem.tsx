import Link from 'next/link';
import Image from 'next/image';
import DefaultReportImage from '@/public/images/report-default.jpg';
import ReactMarkdown from 'react-markdown';

import {
  ImageContainer,
  MainSection,
  ArticleContainer,
  TextContainer,
  ArticleCategoryText,
  ArticleTitle,
  MobileAuthorContainer,
  MobileAuthorHeading,
  MobileAuthorDescription,
  DesktopAuthorHeading,
  DesktopAuthorDescription,
  InlineRow,
  DesktopAuthorContainer,
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

const ArticleItem = ({ article }: { article: ArticleInterface }) => {
  const art = article.attributes;

  if (!article)
    return (
      <div className="flex w-full items-center text-center">Loading...</div>
    );

  return (
    <>
      <MainSection>
        <ArticleContainer>
          <ImageContainer>
            <Image
              src={
                art.image
                  ? art.image.data.attributes.formats.medium.url
                  : DefaultReportImage
              }
              className="absolute rounded-md"
              alt="imagem do artigo"
              priority
              fill
              object-fit
            />
          </ImageContainer>
          <Link href={`/articles/${art.slug}`}>
            <TextContainer>
              <ArticleCategoryText>{art.category}</ArticleCategoryText>
              <ArticleTitle>{art.title}</ArticleTitle>
              <DesktopAuthorContainer>
                <InlineRow>
                  <i className="text-xs text-gray-700"></i>
                  <DesktopAuthorHeading></DesktopAuthorHeading>
                </InlineRow>
                <DesktopAuthorDescription>
                  <ReactMarkdown>{art.description}</ReactMarkdown>
                </DesktopAuthorDescription>
              </DesktopAuthorContainer>
            </TextContainer>
          </Link>
        </ArticleContainer>
        <MobileAuthorContainer>
          <InlineRow>
            <i className="text-xs text-gray-700"></i>
            <MobileAuthorHeading></MobileAuthorHeading>
          </InlineRow>
          <MobileAuthorDescription>
            <ReactMarkdown>{art.description}</ReactMarkdown>
          </MobileAuthorDescription>
        </MobileAuthorContainer>
      </MainSection>
    </>
  );
};

export default ArticleItem;
