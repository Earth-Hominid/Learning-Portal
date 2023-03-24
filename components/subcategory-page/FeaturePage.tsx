import ArticleTile from './ArticleTile';
import {
  ArticlesContainer,
  TileContainer,
  FeaturedHeading,
  Heading,
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

interface Props {
  articles: Array<ArticleInterface>;
}

const FeaturePage: React.FC<Props> = ({ articles }) => {
  return (
    <>
      <ArticlesContainer>
        <TileContainer>
          {articles.length === 0 && <h3>Nenhum artigo disponível</h3>}

          {articles.map((article) => (
            <ArticleTile key={article.id} article={article} />
          ))}
        </TileContainer>
      </ArticlesContainer>
    </>
  );
};

export default FeaturePage;
