import Card from './Card';

interface ArticleInterface {
  id: number;
  attributes: {
    content: string;
    main: string;
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
    image?: {
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

const Search: React.FC<Props> = ({ articles }) => {
  if (!articles)
    return (
      <div className="flex w-full h-full items-center text-center justify-center dark:text-white mt-10">
        Loading...
      </div>
    );

  return (
    <MainContainer>
      <CardContainer>
        {articles.length === 0 && (
          <h3 className="text-xl text-center dark:text-white mt-10">
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

export default Search;
