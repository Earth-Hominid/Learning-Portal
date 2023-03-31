import Layout from '@/components/Layout';
import MainColumns from '@/components/main-columns/MainColumns';
import MainContent from './MainContent';

import {
  MainPageContentArticle,
  ArticleTitle,
  Content,
  ContentParagraph,
  SectionTitle,
  QuoteContainer,
  BoldText,
  DescriptionTerm,
  DescriptionDefinition,
} from './Styles';

const ModuleOne = () => {
  const ListObject = {
    datapoints: [
      { title: 'Introdução', id: '1', url: '#introduction' },
      {
        title: 'Introdução ao Serviço de Vendas',
        id: '2',
        url: '#service',
      },
      {
        title: 'Qualidade do Serviço de Pós-Venda e Satisfação do Cliente',
        id: '3',
        url: '#customer-satisfaction',
      },
      { title: 'Conclusão', id: '4', url: '#' },
    ],
  };
  return (
    <>
      <Layout
        title="Gestão de Vendas e Estoque no Varejo: Fatores Críticos de Sucesso para Lojas de Departamento"
        description="Descubra como gerenciar as vendas e estoque no varejo de lojas de departamento. Aprenda os fatores críticos de sucesso para construir um negócio rentável e sustentável, desde a identificação de problemas que afetam as vendas até a excelência no serviço e na satisfação do cliente."
        keywords="gestão de vendas, estoque, varejo, lojas de departamento, relacionamento com o cliente, retenção de clientes, lucratividade, excelência do serviço, satisfação do cliente, marketing de retenção, fidelidade do cliente, atendimento ao cliente, comunicações gerenciadas, monitoramento de indicadores, valor do cliente, adaptação às tendências, expectativas do cliente, estratégia competitiva, investimento em estoques, padrões de demanda, capital de giro, gestão financeira e operacional, qualidade do serviço de pós-venda, elementos fundamentais da experiência do serviço, sistema básico de suporte ao cliente, processo de recuperação, serviços aprimorados e extraordinários, experiência do cliente"
        background=""
        mainPage="/"
        mainPageTitle="Rede BS Docs"
        currentPage="#"
        currentPageTitle="Gestão de vendas e estoque"
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

export default ModuleOne;
