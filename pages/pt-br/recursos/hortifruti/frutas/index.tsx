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

const FrutasPage: React.FC<Props> = ({ articles }) => {
  if (!articles)
    return (
      <div className="flex items-center justify-center text-center mt-10">
        Loading...
      </div>
    );

  return (
    <>
      <Layout
        title="Frutas"
        description="Bem-vindo à Rede BS Docs | Frutas, o melhor recurso de treinamento para funcionários de frutaria! Nosso site é dedicado a fornecer treinamento abrangente sobre como manusear, armazenar e cuidar adequadamente de uma ampla variedade de frutas encontradas em um departamento de frutaria de supermercado."
        keywords="frutas, frutaria, treinamento, treinamento de frutas, treinamento de frutaria, treinamen, funcionário de frutaria, manuseio de frutas, cuidado com as frutas,departamento de frutaria do supermercado, recurso de treinamento, funcionário de frutaria habilidoso, knowledgeable produce clerk, frutas frescas educação empresarial, educação em vendas no varejo, gestão de inventário, treinamento de atendimento ao cliente"
        mainPage="/"
        mainPageTitle="Rede BS Docs"
        currentPage="#"
        currentPageTitle="Frutas"
        parentPage="/pt-br/recursos/hortifruti"
        parentPageTitle="Hortifruti"
        background=""
        styles="flex flex-col items-center overflow-x-clip overflow-y-visible w-full gap-8"
        width=""
      >
        <FeatureSection articles={articles} />
      </Layout>
    </>
  );
};

export default FrutasPage;

export const getServerSideProps = async ({ query: { page = 1 } }) => {
  const res = await fetch(
    `${API_URL}/api/portugueses?populate=*&filters[subcategory][$eq]=frutas`
  );
  const articleJSON = await res.json();
  const articles = articleJSON.data;

  return {
    props: { articles },
  };
};
