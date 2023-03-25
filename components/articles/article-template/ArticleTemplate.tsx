import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import DefaultReportImage from '@/public/images/report-default.jpg';

import {
  MainSection,
  TopContainer,
  PageTitle,
  DescriptionText,
  CategoryText,
  ImageContainer,
  ArticleTextContainer,
  ArticleText,
  ArticleHolder,
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
            thumbnail: { url: string };
            large: { url: string };
            medium: { url: string };
          };
        };
      };
    };
  };
}

const ArticleTemplate = ({ article }: { article: ArticleInterface }) => {
  const attribute = article.attributes;

  const loaderProp = ({ src }: { src: any }) => {
    return src;
  };

  return (
    <MainSection>
      <TopContainer>
        <CategoryText>{attribute.category}</CategoryText>
        <PageTitle>{attribute.title}</PageTitle>
        <DescriptionText>{attribute.description}</DescriptionText>
      </TopContainer>
      <ArticleHolder>
        <Image
          className=" w-full lg:w-[1100px] lg:rounded-md"
          src={
            attribute.image
              ? attribute.image.data.attributes.formats.large.url
              : `${DefaultReportImage}`
          }
          alt="imagem do artigo"
          priority={true}
          height="100"
          width="200"
          loader={loaderProp}
        />

        <ArticleTextContainer>
          <ArticleText>
            <ReactMarkdown>{attribute.content}</ReactMarkdown>
          </ArticleText>
        </ArticleTextContainer>
      </ArticleHolder>
    </MainSection>
  );
};

export default ArticleTemplate;
