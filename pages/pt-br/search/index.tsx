import { API_URL, PER_PAGE } from '@/config/index';
import qs from 'qs';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '@/components/Layout';
import FeatureSection from '@/components/subcategory-page/feature-section/FeatureSection';
import Search from '@/components/search/Search';

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
  page: number;
  total: number;
  articles: Array<ArticleInterface>;
}

type queryTerm = { queryTerm: string };

export const getServerSideProps = async ({
  query: { term },
}: {
  query: { term: string };
}) => {
  const query = qs.stringify({
    filters: {
      $or: [
        { title: { $containsi: term } },
        { description: { $containsi: term } },
        { category: { $containsi: term } },
        { content: { $containsi: term } },
        { subcategory: { $containsi: term } },
        { keywords: { $containsi: term } },
      ],
    },
  });

  // Fetch all relevant articles
  const res = await fetch(`${API_URL}/api/portugueses?${query}&populate=*`);

  const JSONresponse = await res.json();
  const articles = JSONresponse.data;

  return {
    props: { articles },
  };
};

const SearchPage: React.FC<Props> = ({ articles }) => {
  const router = useRouter();
  const queryTerm = `Procurar resultados: ${router.query.term}`;

  return (
    <>
      <Layout
        title={`Procurar Resultados: ${queryTerm}`}
        description="Encontre fontes relevantes de informação relacionadas às suas habilidades. A Rede BS Docs oferece uma vasta coleção de recursos para ajudar na operação de lojas de varejo. Aproveite todo o conhecimento disponível em um só lugar para aprimorar suas habilidades.."
        keywords="fontes de informação, pesquisa, palavras-chave, busca avançada, termos de pesquisa, aprendizado, desenvolvimento profissional, capacitação, treinamento  "
        background=""
        mainPage="/"
        mainPageTitle="Rede BS Docs"
        currentPage="#"
        currentPageTitle={`${queryTerm}`}
        parentPage="#"
        parentPageTitle="#"
        styles="flex flex-col items-center overflow-x-clip overflow-y-visible w-full gap-8"
        width=""
      >
        <Search articles={articles} />
      </Layout>
    </>
  );
};

export default SearchPage;
