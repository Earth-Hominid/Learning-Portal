import Hortifruti from '@/components/final-pages/hortifruti/Hortifruti';
import { API_URL, PER_PAGE } from '@/config/index';

interface Article {
  id: string;
  attributes: {
    content: string;
    title: string;
    slug: string;
    category: string;
    description: string;
    date: string;
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
  page: number;
  total: number;
  articles: Array<Article>;
}

export const getServerSideProps = async ({ query: { page = 1 } }) => {
  const res = await fetch(
    `${API_URL}/api/articles?filters[category][$startsWith]=hortifruti&populate=*&sort=title:asc`
  );

  const JSONresponse = await res.json();
  const articles = JSONresponse.data;

  return {
    props: { articles },
  };
};

const HortifrutiPage: React.FC<Props> = ({ articles }) => {
  const background = 'bg-white';

  if (!articles) return <div>Loading...</div>;

  return (
    <>
      <Hortifruti />
    </>
  );
};

export default HortifrutiPage;
