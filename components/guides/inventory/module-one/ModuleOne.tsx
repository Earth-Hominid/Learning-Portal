import Image from 'next/image';
import Layout from '@/components/Layout';
import FigureOne from '@/public/images/figure-1.png';
import FigureTwo from '@/public/images/figure-2.png';
import FigureThree from '@/public/images/figure-3.png';

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
        <MainPageContentArticle lang="pt-br">
          <ArticleTitle>Introdução às vendas no varejo</ArticleTitle>
          <Content className="section-content">
            <ContentParagraph>
              O comércio varejista em lojas de departamento ocupa uma posição
              única no mercado. Como fonte de vendas de novos produtos, essas
              lojas têm a primeira oportunidade de gerenciar o relacionamento
              com o cliente e obter a retenção de clientes a longo prazo. Neste
              módulo, serão identificados os fatores críticos de sucesso
              essenciais para a construção de um negócio de loja de
              departamentos rentável e sustentável.
            </ContentParagraph>
            <ContentParagraph>
              <ul>
                <p>Ao estudar este módulo, você será capaz de:</p>
                <li>
                  Identificar os principais problemas que afetam a entrega do
                  serviço de vendas;
                </li>
                <li>
                  Avaliar o trabalho crucial das {`"Operações Fixas"`} para a
                  lucratividade da loja;
                </li>
                <li>
                  Examinar os impulsionadores da excelência do serviço e da
                  satisfação do cliente.
                </li>
              </ul>
            </ContentParagraph>
          </Content>
          <SectionTitle>Introdução ao Serviço de Vendas</SectionTitle>
          <ContentParagraph>
            Embora a Gestão de Vendas de Varejo tenha seu foco na demanda do
            negócio, os principais players do canal atualmente estão ativos em
            cada etapa da cadeia de valor, incluindo aquisição de produtos,
            distribuição em depósitos, varejo e instalação.
          </ContentParagraph>
          <ContentParagraph>
            Hoje em dia, o marketing de retenção tem sido dominado por programas
            de fidelidade alternativos e descontos para clientes. No entanto,
            pesquisas mostram que o que realmente impulsiona a fidelidade do
            cliente é o atendimento ao cliente de alta qualidade e comunicações
            formais e informais bem gerenciadas, altamente focadas, que
            respondem às necessidades e expectativas individuais dos clientes.
          </ContentParagraph>
          <ContentParagraph>
            A fidelidade do cliente e a retenção de clientes, no entanto,
            baseiam-se em um comprometimento muitas vezes frágil. Para manter
            esse compromisso, é necessário compreender suas causas, monitorar
            constantemente seus principais indicadores e nutrir as relações que
            o fomentam de maneira infalível.
          </ContentParagraph>
          <ContentParagraph>
            Os veteranos experientes no setor de vendas de varejo vão lhe dizer
            rapidamente:
          </ContentParagraph>
          <QuoteContainer>
            <p>
              <em>
                {`“Não há muita novidade no setor de atendimento ao cliente. É verdade que as expectativas dos clientes aumentaram
                drasticamente, os tempos de resposta foram reduzidos e a
                tecnologia avançou radicalmente. No entanto, as coisas que
                mantinham os clientes voltando há trinta anos ainda são as
                mesmas hoje: ter um bom produto; ter a capacidade de cuidar de
                seus clientes; dar aos clientes um bom valor; e manter contato
                com eles para demonstrar que você se preocupa sinceramente com
                os negócios deles.”`}
              </em>
            </p>
          </QuoteContainer>
          <ContentParagraph>
            Este comentário, sem dúvida, reflete a sabedoria acumulada ao longo
            dos anos {`"nas trincheiras".`} No entanto, o desafio permanece:
            como adaptar a sabedoria consagrada pelo tempo à nova realidade do
            consumidor exigente e implacável de hoje? Um bom ponto de partida é
            dar uma olhada nas três principais tendências.
          </ContentParagraph>
          <ContentParagraph>
            As expectativas de fato aumentaram dramaticamente. As empresas em
            todo o mundo hoje de todo o coração subscrevem a máxima que
            "satisfação do cliente paga". Sua disposição e determinação para
            tornar a satisfação do cliente o ponto focal da estratégia
            competitiva continua, portanto, a elevar o nível das expectativas.
          </ContentParagraph>
          <ContentParagraph>
            <BoldText>
              As expectativas dos clientes aumentaram significativamente nos
              últimos anos.
            </BoldText>{' '}
            As empresas em todo o mundo têm adotado cada vez mais a ideia de que{' '}
            {`"a satisfação do cliente é essencial para o sucesso
            do negócio".`}{' '}
            Isso tem levado a um aumento constante no nível das expectativas dos
            clientes. O setor de varejo é um exemplo particularmente notável
            dessa tendência, onde a concorrência acirrada faz com que as
            empresas se esforcem cada vez mais para garantir a satisfação do
            cliente como ponto focal de suas estratégias competitivas.
          </ContentParagraph>
          <ContentParagraph>
            <BoldText>Os tempos de resposta foram reduzidos. </BoldText>
            Isso se deve tanto ao aumento das expectativas quanto às ferramentas
            disponíveis hoje para ajudar pessoas ocupadas a lidar com as
            pressões de um ritmo de vida implacável. A velocidade com que os
            eventos se desdobram acelerou tremendamente. Os clientes procuram as
            lojas para ajudá-los a fazer compras sem complicações. Aqueles que
            se destacam em oferecer um serviço rápido, ágil e sem problemas
            terão a melhor oportunidade de conquistar o sucesso dos clientes.
          </ContentParagraph>
          <ContentParagraph>
            <BoldText>A tecnologia avançou radicalmente. </BoldText>
            {`"Tecnologia", neste contexto, inclui tanto a automação de processos quanto a tecnologia da informação. Ambos permitem uma experiência de compra e um nível de serviço apenas imaginados há uma década. E a tecnologia da informação é o principal fator que impulsiona a expectativa atual de comunicação instantânea e acesso 24/7. É também o principal responsável por transferir o poder de compra das empresas para o consumidor.`}
          </ContentParagraph>
          <ContentParagraph>
            A {`"nova realidade"`} moldada por essas tendências requer
            abordagens flexíveis, criativas e em constante evolução para a
            construção de um negócio de varejo sustentável. Esse desafio pode
            ser apoiado por sistemas eficazes que monitoram rigorosamente as
            mudanças nas prioridades e expectativas dos clientes.
          </ContentParagraph>
          <ContentParagraph>
            Além da gestão das expectativas dos clientes, a operação de vendas
            desempenha um papel igualmente vital no atendimento profissional ao
            cliente. A gestão da disponibilidade do produto envolve uma série de
            etapas essenciais, conhecidas como {`"ciclo de pedido do produto".`}{' '}
            A sequência usual é mostrada abaixo:
          </ContentParagraph>
          <Image
            src={FigureOne}
            alt="gráfico de demanda"
            className="rounded-md my-8"
          />
          <ContentParagraph>
            Na perspectiva do gerenciamento de estoques, cada etapa leva tempo.
            O investimento em estoques deve, portanto, considerar o
            {`"fornecimento de dias"`} necessário para cobrir atrasos
            administrativos, prazos de pedidos e padrões de demanda de grupos
            individuais ou departamentos de produtos. Também devem ser
            considerados os tipos de pedidos, descontos em pedidos,
            oportunidades especiais de compra e a condição financeira do
            negócio. O inventário é capital de giro e, portanto, deve ser
            utilizado de forma eficiente para otimizar o retorno sobre o
            investimento.
          </ContentParagraph>
          <ContentParagraph>
            Embora a maioria das lojas de varejo possuam muitos departamentos, a
            maioria das vendas e lucros é gerada por apenas alguns
            departamentos. É importante que esses departamentos tenham excelente
            disponibilidade de produtos para atender efetivamente seus clientes
            e cumprir o requisito de satisfação do cliente de{' '}
            {`"fazer certo da
            primeira vez". Cada departamento é um negócio complexo que deve se
            sobressair nas variáveis "rígidas" e "brandas"`}{' '}
            da administração para atender às expectativas cada vez maiores,
            obter um retorno razoável do investimento e ganhar dinheiro.
          </ContentParagraph>
          <ContentParagraph>
            O negócio de varejo opera em um mercado implacavelmente competitivo,
            onde as oportunidades de negócios são frequentemente passageiras e
            as decisões para explorá-las devem ser tomadas espontaneamente. Este
            é particularmente o caso no que diz respeito às vendas de
            eletrônicos, móveis e produtos de mercearia, onde os consumidores
            estão condicionados a esperar os modelos mais novos e os produtos
            mais recentes. Nesse tipo de ambiente, as lojas que oferecem
            excelente seleção, os modelos mais novos disponíveis em seus
            departamentos e os produtos alimentícios mais recentes destacam-se
            como principais contribuintes para a lucratividade geral da loja - e
            como uma fonte importante de fluxo de caixa estável.
          </ContentParagraph>
          <ContentParagraph>
            O objetivo da loja de varejo hoje deve ser manter a lucratividade
            ideal. Isso requer decisões sólidas sobre os trade-offs entre
            lucratividade, capacidade de resposta do cliente e competitividade.
            A {`"rentabilidade ótima"`} também exige excelência na gestão
            financeira e operacional, abrangendo toda a gama de ações, desde o
            gerenciamento da margem bruta e despesas, equilibrando o mix de
            receitas de maior rendimento, gerenciando capital de giro, até o uso
            produtivo e eficiente de recursos físicos e humanos.
          </ContentParagraph>
          <SectionTitle>
            Qualidade do Serviço de Pós-Venda e Satisfação do Cliente
          </SectionTitle>
        </MainPageContentArticle>
      </Layout>
    </>
  );
};

export default ModuleOne;
