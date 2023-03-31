import Card from './Card';

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

import { MainContainer, CardContainer } from './Styles';

const FeatureSection: React.FC<Props> = ({ articles }) => {
  return (
    <MainContainer>
      <CardContainer>
        {articles.length === 0 && (
          <h3 className="text-xl text-center dark:text-white">
            Nenhum artigo disponível
          </h3>
        )}

        {articles.map((article) => (
          <Card key={article.id} article={article} />
        ))}
      </CardContainer>
    </MainContainer>
  );
};

export default FeatureSection;
