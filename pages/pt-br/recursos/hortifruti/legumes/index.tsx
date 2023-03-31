import Layout from '@/components/Layout';
import FeatureSection from '@/components/subcategory-page/feature-section/FeatureSection';
import { API_URL, PER_PAGE } from '@/config/index';

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
  page: number;
  total: number;
  articles: Array<ArticleInterface>;
}

const LegumesPage: React.FC<Props> = ({ articles }) => {
  return (
    <>
      <Layout
        title="Rede BS Docs | Legumes"
        description=""
        keywords=""
        mainPage=""
        mainPageTitle="Rede BS Docs"
        currentPage="#"
        currentPageTitle="Legumes"
        parentPage="/pt-br/recursos/legumes"
        parentPageTitle="Legumes"
        background=""
        styles=""
        width=""
      >
        <FeatureSection articles={articles} />
      </Layout>
    </>
  );
};

export default LegumesPage;

export const getServerSideProps = async ({ query: { page = 1 } }) => {
  const res = await fetch(
    `${API_URL}/api/portugueses?filters[subcategory][$eq]=Legumes&populate=*&sort=title:asc`
  );

  const articleJSON = await res.json();
  const articles = articleJSON.data;

  return {
    props: { articles },
  };
};
