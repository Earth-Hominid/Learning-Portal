import { Inter, Montserrat } from 'next/font/google';
import Layout from '@/components/Layout';
import FeaturedArticles from '@/components/homepage/FeaturedArticles';
import { API_URL } from '@/config';

interface ArticleInterface {
  id: string;
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
  };
}

interface MerchandiseInterface {
  id: string;
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
  };
}

interface Props {
  article: ArticleInterface;
  merchandise: MerchandiseInterface;
}

const Home: React.FC<Props> = ({ article, merchandise }) => {
  return (
    <>
      <Layout
        title="Rede BS docs | Plataforma de aprendizagem Rede BS"
        description="Plataforma de aprendizado da Rede BS"
        keywords="aprendendo,administrar, supermercado, eletromóveis"
        mainPage="/"
        mainPageTitle="Rede BS Docs"
        currentPage=""
        currentPageTitle="Rede BS Docs"
        background="dark:bg-[#1b1b1b]"
        styles="flex flex-col items-center overflow-x-clip overflow-y-visible relative w-full gap-8"
        width=""
        parentPage=""
        parentPageTitle=""
      >
        <FeaturedArticles article={article} merchandise={merchandise} />
      </Layout>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const articleResponse = await fetch(
    `${API_URL}/api/portugueses?populate=*&filters[category][$eq]=Hortifruti&pagination[start]=0&pagination[limit]=1`
  );

  const articleJSON = await articleResponse.json();
  const article = articleJSON.data[0];

  const merchandisingResponse = await fetch(
    `${API_URL}/api/portugueses?populate=*&filters[category][$eq]=Merchandising&pagination[start]=0&pagination[limit]=1`
  );

  const merchandiseJSON = await merchandisingResponse.json();

  const merchandise = merchandiseJSON.data[0];
  console.log(merchandise.attributes.slug);

  return {
    props: { article, merchandise },
    revalidate: 1,
  };
};
