import Link from 'next/link';

import {
  MainPageContentArticle,
  ArticleTitle,
  Content,
  ContentParagraph,
  SectionTitle,
  DescriptionTerm,
  DescriptionDefinition,
} from '../Styles';

const MainContent = () => {
  return (
    <>
      <MainPageContentArticle lang="pt-br">
        <ArticleTitle id="relevance">Hortifruti</ArticleTitle>
        <Content className="section-content">
          <ContentParagraph>
            O departmento de{' '}
            <strong>
              <em>hortifruti</em>
            </strong>{' '}
            é um componente essencial de um supermercado, fornecendo aos
            clientes acesso a uma variedade diversificada de frutas e legumes
            frescos, ao mesmo tempo em que contribui para a fidelidade do
            cliente. Um hortifrúti bem abastecido pode desempenhar um papel
            vital na promoção de hábitos alimentares saudáveis, pois o consumo
            de frutas e legumes está associado a um menor risco de doenças
            crônicas, como doenças cardíacas, derrames e câncer.{' '}
          </ContentParagraph>
          <ContentParagraph>
            No mercado varejista lotado de hoje, é crucial diferenciar-se de
            seus concorrentes. O hortifrúti pode servir como um diferenciador
            chave, oferecendo uma seleção mais ampla de produtos frescos e de
            alta qualidade em comparação com seus concorrentes. Ao fornecer
            itens de produtos frescos únicos e difíceis de encontrar, como
            tomates antigos, nozes ou frutas exóticas, os supermercados podem
            atrair e reter clientes que procuram opções alimentares frescas e
            emocionantes.
          </ContentParagraph>
          <ContentParagraph>
            Além disso, o hortifrúti também pode desempenhar um papel crucial na
            promoção da sustentabilidade e na redução do desperdício de
            alimentos. Ao obter produtos frescos cultivados localmente, os
            supermercados podem reduzir sua pegada de carbono, apoiar
            agricultores locais e minimizar o desperdício de alimentos por meio
            de armazenamento e manuseio adequados.
          </ContentParagraph>
        </Content>
        <section aria-labelledby="referência">
          <SectionTitle id="reference">
            <a href="#referências">Referências</a>
          </SectionTitle>
          <Content className="section-content">
            <ContentParagraph>
              Navegue por uma documentação detalhada de referências sobre
              produtos de hortifrúti.
            </ContentParagraph>
            <dl>
              <DescriptionTerm id="frutas">
                <Link href="/pt-br/recursos/hortifruti/frutas">Frutas</Link>
              </DescriptionTerm>
              <DescriptionDefinition>
                <p>
                  As frutas são um item básico para nossos clientes e um
                  componente crucial de uma dieta saudável e equilibrada.
                  Oferecer uma ampla variedade de frutas frescas é essencial
                  para demonstrar nosso compromisso em promover um estilo de
                  vida saudável e atrair e reter clientes.
                </p>
              </DescriptionDefinition>
              <DescriptionTerm id="legumes">
                <Link href="/pt-br/recursos/hortifruti/legumes">Legumes</Link>
              </DescriptionTerm>
              <DescriptionDefinition>
                <p>
                  Oferecer uma seleção diversa de legumes frescos e de alta
                  qualidade é crucial para atrair clientes preocupados com a
                  saúde e atender às suas necessidades. Os legumes representam
                  mais de 40% das vendas totais na seção de produtos de
                  hortifruti, tornando essencial priorizar a oferta de uma ampla
                  variedade de opções para satisfazer a demanda dos clientes e
                  aumentar a lucratividade.
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
