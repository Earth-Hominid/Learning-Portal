import FeatureSection from '@/components/subcategory-page/feature-section/FeatureSection';
import Layout from '@/components/Layout';
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

const PrateleirasPage: React.FC<Props> = ({ articles }) => {
  if (!articles)
    return (
      <div className="flex items-center justify-center text-center mt-10">
        Loading...
      </div>
    );

  return (
    <>
      <Layout
        title="Maximizando Vendas: A Ciência da Exposição nas Prateleiras"
        description="Esta página da web é dedicada a discutir as últimas pesquisas sobre merchandising e exposição de prateleiras em supermercados. Ao analisar dados sobre o comportamento do consumidor, posicionamento de produtos e outros fatores, especialistas podem determinar a maneira ideal de organizar e exibir produtos nas prateleiras dos supermercados. Essas informações são valiosas para os varejistas que desejam aumentar as vendas e maximizar os lucros. Nesta página, você encontrará artigos informativos sobre a ciência da exposição de prateleiras, incluindo estudos de caso, melhores práticas e dicas práticas para os varejistas."
        keywords="pesquisa de merchandising, exposição de prateleiras, otimização de supermercados, omportamento do consumidor, posicionamento de produto, maximização de vendas, estratégia de varejo, layout da loja"
        mainPage="/"
        mainPageTitle="Rede BS Docs"
        currentPage="#"
        currentPageTitle="Prateleiras"
        parentPage="/pt-br/recursos/merchandising"
        parentPageTitle="Merchandising"
        background=""
        styles="flex flex-col items-center overflow-x-clip overflow-y-visible w-full gap-8"
        width=""
      >
        <FeatureSection articles={articles} />
      </Layout>
    </>
  );
};

export default PrateleirasPage;

export const getServerSideProps = async ({ query: { page = 1 } }) => {
  const res = await fetch(
    `${API_URL}/api/portugueses?populate=*&filters[subcategory][$eq]=prateleiras&sort=title:asc`
  );
  const JSONresponse = await res.json();
  const articles = JSONresponse.data;

  return {
    props: { articles },
  };
};
