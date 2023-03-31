import Layout from '../../Layout';
import MainColumns from '@/components/main-columns/MainColumns';
import MainContent from './MainContent';

interface DatapointInterface {
  id: string;
  url: string;
  title: string;
}

interface Props {
  children?: React.ReactNode;
  datapoints: Array<DatapointInterface>;
}

const Hortifruti = () => {
  const ListObject = {
    datapoints: [
      {
        title: 'Relevância Hortifrúti',
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
        title="Artigos da Rede BS"
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

export default Hortifruti;
