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
        <ArticleTitle id="relevance">Merchandising</ArticleTitle>
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
        <section aria-labelledby="referência">
          <SectionTitle id="reference">
            <a href="#referências">Referências</a>
          </SectionTitle>
          <Content className="section-content">
            <ContentParagraph>
              Navegue por uma documentação detalhada de referências sobre visual
              merchandising.
            </ContentParagraph>
            <dl>
              <DescriptionTerm id="prateleiras">
                <Link href="/pt-br/recursos/merchandising/prateleiras">
                  Maximizando Vendas: A Ciência da Exposição nas Prateleiras
                </Link>
              </DescriptionTerm>
              <DescriptionDefinition>
                <p>
                  Leia sobre as pesquisas mais recentes sobre merchandising e
                  exibição em prateleiras de supermercados. A análise de dados
                  sobre comportamento do consumidor, posicionamento do produto e
                  outros fatores permitiu que especialistas determinassem a
                  maneira ideal de organizar e expor os produtos nas prateleiras
                  dos supermercados. Esta informação é essencial para os
                  varejistas que desejam maximizar as vendas e aumentar os
                  lucros.
                </p>
              </DescriptionDefinition>
            </dl>
          </Content>
        </section>
      </MainPageContentArticle>
    </>
  );
};

export default MainContent;
