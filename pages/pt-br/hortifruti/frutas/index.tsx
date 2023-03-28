import Layout from '@/components/Layout';
import FeaturePage from '@/components/subcategory-page/FeaturePage';
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
  if (!articles) return <div>Loading...</div>;

  return (
    <>
      <Layout
        title="Rede BS Docs | Frutas"
        description="Bem-vindo à Rede BS Docs | Frutas, o melhor recurso de treinamento para funcionários de frutaria! Nosso site é dedicado a fornecer treinamento abrangente sobre como manusear, armazenar e cuidar adequadamente de uma ampla variedade de frutas encontradas em um departamento de frutaria de supermercado."
        keywords="frutas, frutaria, treinamento, treinamento de frutas, treinamento de frutaria, treinamen, funcionário de frutaria, manuseio de frutas, cuidado com as frutas,departamento de frutaria do supermercado, recurso de treinamento, funcionário de frutaria habilidoso, knowledgeable produce clerk, frutas frescas educação empresarial, educação em vendas no varejo, gestão de inventário, treinamento de atendimento ao cliente"
        mainPage="/"
        mainPageTitle="Rede BS Docs"
        currentPage="#"
        currentPageTitle="Frutas"
        parentPage="/pt-br/hortifruti"
        parentPageTitle="Hortifruti"
        background="dark:bg-[#303136]"
        styles="flex flex-col items-center overflow-x-clip overflow-y-visible relative w-full gap-8"
        width=""
      >
        <section>
          <FeaturePage articles={articles} />
        </section>
      </Layout>
    </>
  );
};

export default FrutasPage;

export const getServerSideProps = async ({ query: { page = 1 } }) => {
  const res = await fetch(
    `${API_URL}/api/portugueses?populate=*&filters[subcategory][$eq]=Frutas`
  );
  const articleJSON = await res.json();
  const articles = articleJSON.data;

  return {
    props: { articles },
  };
};
