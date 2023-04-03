import Layout from '@/components/Layout';
import Search from '@/components/search/Search';

const index = () => {
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
        styles=""
        width=""
        parentPage=""
        parentPageTitle=""
      >
        <Search />
      </Layout>
    </>
  );
};

export default index;
