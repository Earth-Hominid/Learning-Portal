import Link from 'next/link';
import Layout from '../../Layout';
import MainColumns from '@/components/main-columns/MainColumns';

import MainContent from './MainContent';

const Hortifruti = () => {
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
        <MainColumns>
          <MainContent />
        </MainColumns>
      </Layout>
    </>
  );
};

export default Hortifruti;
