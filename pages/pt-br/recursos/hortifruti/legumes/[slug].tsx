import Layout from '@/components/Layout';
import ArticleTemplate from '@/components/articles/article-template/ArticleTemplate';
import { GetServerSideProps } from 'next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from '@/config/index';

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

const LegumesPage = ({ article }: { article: ArticleInterface }) => {
  const art = article.attributes;

  if (!article) return <div>Loading...</div>;

  return (
    <Layout
      title={`${art.title}`}
      description={`${art.description}`}
      keywords={`${art.title}`}
      background="dark:bg-[#1b1b1b]"
      mainPage="/pt-br/recursos/hortifruti"
      mainPageTitle="Hortifruti"
      currentPage={`#`}
      currentPageTitle={`${art.title}`}
      styles="pb-10 lg:flex lg:justify-center"
      width="max-w-5xl"
      parentPage={`${art.categoryLink}`}
      parentPageTitle="Frutas"
    >
      <section className="min-h-screen">
        <ToastContainer />
        <ArticleTemplate article={article} />
      </section>
    </Layout>
  );
};

export default LegumesPage;

export const getServerSideProps: GetServerSideProps = async ({
  query: { slug },
}) => {
  // fetch articles
  const articleResponse =
    await fetch(`${API_URL}/api/portugueses?filters[slug][$eq]=${slug}&populate=*
  `);

  const JSONresponse = await articleResponse.json();
  const articles = JSONresponse.data;

  return {
    props: {
      article: articles[0],
    },
  };
};
