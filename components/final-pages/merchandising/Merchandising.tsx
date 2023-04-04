import Layout from '../../Layout';
import MainColumns from '@/components/main-columns/MainColumns';
import MainContent from './MainContent';

const Merchandising = () => {
  const ListObject = {
    datapoints: [
      {
        title: 'Relevância Merchandising',
        id: '1',
        url: '#relevance',
      },
      {
        title: 'Referências',
        id: '2',
        url: '#reference',
      },
    ],
  };

  return (
    <>
      <Layout
        title="Merchandising"
        description="A Rede BS publica regularmente artigos para melhorar ainda mais a formação de seus funcionários."
        keywords="supermercado, hortifruti, frutas, legumes, artigos, educação empresarial, educação em vendas no varejo, gestão de inventário, treinamento de atendimento ao cliente"
        background=""
        mainPage="/"
        mainPageTitle="Rede BS Docs"
        currentPage="#"
        currentPageTitle="Merchandising"
        parentPage="#"
        parentPageTitle="#"
        styles=""
        width=""
      >
        <MainColumns props={ListObject}>
          <MainContent />
        </MainColumns>
      </Layout>
    </>
  );
};

export default Merchandising;
