import Link from 'next/link';
import Layout from '../Layout';

import {
  MainPageContentArticle,
  ArticleTitle,
  Content,
  ContentParagraph,
  SectionTitle,
  DescriptionTerm,
  DescriptionDefinition,
} from './Styles';

const Vendas = () => {
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
        currentPageTitle="Compras"
        parentPage="#"
        parentPageTitle="#"
        styles=""
        width=""
      >
        <MainPageContentArticle lang="pt-br">
          <ArticleTitle>Compras</ArticleTitle>
          <Content className="section-content">
            <ContentParagraph>
              A área de compras é responsável por adquirir os produtos que serão
            </ContentParagraph>
          </Content>
        </MainPageContentArticle>
      </Layout>
    </>
  );
};

export default Vendas;
