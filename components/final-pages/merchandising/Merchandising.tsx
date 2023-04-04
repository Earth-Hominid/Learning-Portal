import Layout from '../../Layout';
import MainColumns from '@/components/main-columns/MainColumns';
import MainContent from './MainContent';

const Merchandising = () => {
  const ListObject = {
    datapoints: [],
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
        currentPageTitle="Hortifruti"
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
