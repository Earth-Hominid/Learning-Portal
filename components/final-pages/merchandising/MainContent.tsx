import Link from 'next/link';

import {
  MainPageContentArticle,
  ArticleTitle,
  Content,
  ContentParagraph,
  SectionTitle,
  DescriptionTerm,
  DescriptionDefinition,
  BoldText,
} from '../Styles';

const MainContent = () => {
  return (
    <>
      <MainPageContentArticle>
        <ArticleTitle>Merchandising</ArticleTitle>
        <Content className="section-content">
          <ContentParagraph>
            A localização dos produtos em uma loja desempenha um papel essencial
            na motivação dos consumidores para comprá-los. Exposições sensatas e
            estratégicas de mercadorias podem impactar significativamente as
            decisões de compra individuais. O{' '}
            {<BoldText>visual merchandising</BoldText>} visa exibir
            esteticamente a mercadoria, atraindo compradores em potencial,
            levando-os a fazer compras e, por fim, aumentando as vendas da loja.
            Essa estratégia permite que os clientes encontrem facilmente o que
            procuram, conheçam as últimas tendências da moda e tomem decisões de
            compra sem assistência, resultando em níveis crescentes de
            satisfação do cliente. O visual merchandising eficaz cria uma imagem
            de loja única e a distingue das demais, proporcionando uma
            experiência de compra agradável que promove o crescimento das
            vendas.
          </ContentParagraph>
          <ContentParagraph>
            O visual merchandising visa exibir esteticamente a mercadoria,
            atraindo compradores em potencial, levando-os a fazer compras e, por
            fim, aumentando as vendas da loja. Essa estratégia permite que os
            clientes encontrem facilmente o que procuram, conheçam as últimas
            tendências da moda e tomem decisões de compra sem assistência,
            resultando em níveis crescentes de satisfação do cliente.
          </ContentParagraph>
          <ContentParagraph>
            O visual merchandising eficaz cria uma imagem de loja única e a
            distingue das demais, proporcionando uma experiência de compra
            agradável que promove o crescimento das vendas.
          </ContentParagraph>
        </Content>
      </MainPageContentArticle>
    </>
  );
};

export default MainContent;
