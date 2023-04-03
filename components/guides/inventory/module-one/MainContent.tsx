import Image from 'next/image';
import BlueBox from '@/components/info-box/BlueBox';
import DiagramOne from '@/public/images/diagram-1.png';
import DiagramTwo from '@/public/images/diagram-2.png';
import DiagamThree from '@/public/images/diagram-3.png';
import FigureOne from '@/public/images/figure-1.png';
import FigureTwo from '@/public/images/figure-2.png';

import {
  MainPageContentArticle,
  ArticleTitle,
  Content,
  ContentParagraph,
  SectionTitle,
  QuoteContainer,
  BoldText,
  FigureTitle,
  DescriptionTerm,
  DescriptionDefinition,
  OrderedList,
} from './Styles';

const MainContent = () => {
  const LearningObject = {
    datapoints: [
      {
        title: 'Ao estudar este módulo, você será capaz de:',
        id: '1',
        line_1:
          'Identificar os principais problemas que afetam a entrega do serviço de vendas;',
        line_2:
          'Avaliar o trabalho crucial das "Operações Fixas" para a lucratividade da loja;',
        line_3:
          'Examinar os impulsionadores da excelência do serviço e da satisfação do cliente.',
        line_4: '',
        line_5: '',
      },
    ],
  };

  return (
    <>
      <MainPageContentArticle lang="pt-br">
        <ArticleTitle id="introduction">
          Introdução às vendas no varejo
        </ArticleTitle>
        <Content className="section-content">
          <ContentParagraph>
            O comércio varejista em lojas de departamento ocupa uma posição
            única no mercado. Como fonte de vendas de novos produtos, essas
            lojas têm a primeira oportunidade de gerenciar o relacionamento com
            o cliente e obter a retenção de clientes a longo prazo. Neste
            módulo, serão identificados os fatores críticos de sucesso
            essenciais para a construção de um negócio de loja de departamentos
            rentável e sustentável.
          </ContentParagraph>
          <BlueBox props={LearningObject} />
          <SectionTitle id="service">
            Introdução ao Serviço de Vendas
          </SectionTitle>
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
            {`"satisfação do cliente paga".`} Sua disposição e determinação para
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
            src={DiagramOne}
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
            negócio.{' '}
            <BoldText>
              O inventário é capital de giro e, portanto, deve ser utilizado de
              forma eficiente para otimizar o retorno sobre o investimento.
            </BoldText>
          </ContentParagraph>
          <ContentParagraph>
            Embora a maioria das lojas de varejo possuam muitos departamentos, a
            maioria das vendas e lucros é gerada por apenas alguns
            departamentos. É importante que esses departamentos tenham excelente
            disponibilidade de produtos para atender efetivamente seus clientes
            e cumprir o requisito de satisfação do cliente de{' '}
            {`"fazer certo da
            primeira vez"`}
            . Cada {''}
            <BoldText>departamento</BoldText> é um{' '}
            <BoldText>negócio complexo</BoldText> que deve se sobressair nas
            variáveis {`"rígidas"`} e {`"brandas"`} da administração para
            atender às expectativas cada vez maiores, obter um retorno razoável
            do investimento e ganhar dinheiro.
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
          <SectionTitle id="customer-satisfaction">
            Qualidade do Serviço de Pós-Venda e Satisfação do Cliente
          </SectionTitle>
          <ContentParagraph>
            Existem quatro elementos fundamentais que moldam a experiência do
            serviço de um cliente:
          </ContentParagraph>
          <OrderedList>
            <li>o produto ou serviço básico oferecido pela empresa;</li>
            <li>o sistema básico de suporte ao cliente;</li>
            <li>
              o processo de recuperação para lidar com más experiências; e
            </li>
            <li>
              serviços aprimorados e extraordinários criados para responder
              exclusivamente às preferências, necessidades ou valores pessoais
              de cada cliente.
            </li>
          </OrderedList>
          <ContentParagraph>
            Essa inter-relação pode ser representada pelo modelo a seguir, onde
            o tamanho relativo de cada retângulo representa a necessidade de
            implantar progressivamente mais recursos organizacionais, se o
            respectivo elemento tiver a intenção de melhorar a experiência do
            cliente:
          </ContentParagraph>
          <FigureTitle>
            Fatores que dão forma à experiência de propriedade
          </FigureTitle>
          <Image
            src={DiagramTwo}
            alt="Gráfico mostrando os fatores que moldam a experiência de propriedade."
            className="rounded-md my-8"
          />
          <ContentParagraph>
            No negócio de varejo, o produto básico consiste em: função,
            recursos, estilo, tecnologia, qualidade, durabilidade e
            confiabilidade. Este é basicamente o domínio do fabricante. O
            Sistema de Suporte Básico envolve: a rede de lojas, seus recursos de
            manutenção e processos, como fornecimento de peças, cobertura de
            garantia, assistência técnica, linhas diretas de atendimento ao
            cliente e afins.
          </ContentParagraph>
          <ContentParagraph>
            Serviços extraordinários hoje são cada vez mais difíceis de definir
            explicitamente. O que pode ser considerado{' '}
            {`"extraordinário" é
            moldado tanto pela preferência do consumidor quanto pela disposição
            dos provedores de serviço de visar a exceder as expectativas do
            cliente. Uma definição popular de Serviços Extraordinários é: "Essas
            coisas especiais que o provedor de serviços fará para elevar a
            experiência de serviço do cliente, ‘Elas atendem consistentemente às
            minhas expectativas’, para, ‘Uau, elas realmente cuidam de seus
            clientes!’". Eles são, por definição, extras inesperados que movem a
            experiência do cliente de "mera" satisfação para "Estou recebendo um
            serviço verdadeiramente notável". Especialistas em atendimento ao
            cliente tendem a chamá-los de "experiências positivamente
            memoráveis".`}
          </ContentParagraph>
          <ContentParagraph>
            O rótulo{' '}
            {`"Processo de Recuperação" deriva de seu papel em
            "recuperar"`}{' '}
            a boa vontade do cliente sempre que algo dá errado. Como os Serviços
            Extraordinários têm como objetivo superar as expectativas do
            cliente, a Recuperação visa reverter a insatisfação criada por uma
            falha em atender às principais expectativas do cliente no Básico.
          </ContentParagraph>
          <ContentParagraph>
            Existe um amplo consenso de que fornecer um desempenho competente no
            {`"Básico"`} é imperativo.{' '}
            <BoldText>Os clientes esperam isso!</BoldText> Há, portanto, apenas
            uma desvantagem potencial para um desempenho inconsistente. As
            expectativas evoluíram para um desempenho sólido no Básico que
            oferece ao cliente, na melhor das hipóteses, uma experiência neutra.
            Ele não cria um compromisso com o cliente, mas raramente é mais do
            que uma reação não comprometedora, {`"E daí, não é todo mundo?".`}{' '}
            Mais criticamente, o cliente exigente de hoje aparentemente tem
            pouca paciência com qualquer tipo de falha em atender às principais
            expectativas.
          </ContentParagraph>
          <ContentParagraph>
            Isso deixa {`"Serviços Extraordinários"`} e o{' '}
            {`"Processo de
            Recuperação"`}{' '}
            para diferenciar a oferta de serviços e fortalecer a fidelidade do
            cliente. Hoje, o primeiro é frequentemente comparado a{' '}
            {`"lidar com
            clientes em seus termos".`}{' '}
            Obviamente, isso pode significar uma variedade de coisas. Não há
            dois clientes exatamente iguais.
          </ContentParagraph>
          <ContentParagraph>
            Com relação ao desenvolvimento de serviços, especialmente a
            recuperação de clientes, está recebendo atenção generalizada. O
            gráfico de barras rotulado Figura 1 abaixo mostra por que. Este
            estudo chamado “Dano de Mercado”, conduzido pelo TARP (Programas de
            Pesquisa de Assistência Técnica), ajuda a entender como o
            investimento em excelente serviço e qualidade se traduz em maiores
            vendas e lucratividade. Observe que o cliente varejista mostra uma
            deterioração particularmente forte na lealdade depois de
            experimentar um problema. É preciso pouca imaginação para traduzir
            essa perda de lealdade em uma perda de receita significativa
            resultante de negócios repetidos perdidos.
          </ContentParagraph>
          <ContentParagraph>
            Isso significa que os clientes esperam nada menos do que a
            satisfação total ao registrar uma reclamação? Geralmente, sim, como
            será enfatizado mais tarde. No entanto, dados TARP subdivididos
            tornam um ponto ainda mais revelador. Reportando sobre quatro dos
            seis setores no estudo original, os gráficos da Figura 2 repetem as
            intenções de compra em termos do efeito de lealdade da eficácia da
            recuperação do serviço:
          </ContentParagraph>
          <FigureTitle>Figura 1:</FigureTitle>
          <Image src={FigureOne} alt="figura one" className="rounded-md my-8" />
          <ContentParagraph>
            Uma empresa pode, de fato, reconquistar virtualmente toda a lealdade
            de um cliente, se conseguir que o cliente ligue com um problema e
            fornecer uma solução que satisfaça esse cliente.
          </ContentParagraph>
          <FigureTitle>Figura 2:</FigureTitle>
          <Image src={FigureTwo} alt="figura two" className="rounded-md my-8" />
          <ContentParagraph>
            A Figura 2 ilustra que os clientes que se queixam e que, em seguida,
            estão satisfeitos, têm lealdades que se aproximam das dos clientes
            que não tiveram problemas. Isso também mostra que, se eles estão
            pelo menos “amolecidos” (isto é, apaziguados ou “acalmados”), você
            tem uma boa chance de manter sua lealdade.{' '}
          </ContentParagraph>
          <ContentParagraph>
            Mas - e <BoldText>isso é importante</BoldText> - se os clientes
            ficarem insatisfeitos, sua lealdade é reduzida a um nível abaixo do
            que era antes que a empresa tentasse lidar com o problema. Em outras
            palavras,{' '}
            <BoldText>
              se você pretende oferecer atendimento ao cliente para ajudar a
              manter a lealdade do cliente, é melhor resolver o problema. Caso
              contrário, você terá um cliente que está insatisfeito, não uma,
              mas duas vezes!
            </BoldText>
          </ContentParagraph>
          <ContentParagraph>
            A qualidade do atendimento prestado por uma organização é
            diretamente proporcional à capacidade desta de atender às
            necessidades, desejos e expectativas dos clientes. Para garantir a
            satisfação dos clientes em todas as transações, é imprescindível que
            cada colaborador da loja se dedique integralmente a esse propósito.
            Tal empenho implica não só em atentar aos detalhes que fazem a
            diferença para o cliente, mas também assegurar que os processos de
            atendimento da loja sejam robustos e, simultaneamente, flexíveis e
            responsivos.
          </ContentParagraph>
          <SectionTitle id="link-de-fidelidade">
            A Satisfação do Cliente e o Link de Fidelidade do Cliente
          </SectionTitle>
          <ContentParagraph>
            O gráfico apresentado abaixo é resultado de uma pesquisa inovadora e
            continua a transmitir uma mensagem atual e incisiva sobre a relação
            entre a satisfação do cliente e a lealdade do cliente.
          </ContentParagraph>
          <ContentParagraph>
            Tradicionalmente, acreditava-se que havia uma relação direta e quase
            linear entre o índice de satisfação do cliente (ISC) e a retenção de
            clientes (lealdade), como mostrado pela linha tracejada de 45 graus.
            Embora a inclinação pudesse variar, essa visão sugeria que uma
            empresa de serviços deveria simplesmente se concentrar em aumentar a
            média de satisfação do cliente para aumentar a lealdade do cliente
            de maneira correspondente.
          </ContentParagraph>
          <ContentParagraph>
            No entanto, uma pesquisa reportada na edição de novembro/dezembro de
            1995 da Harvard Business Review contestou essa visão. Utilizando a
            escala de classificação JD Power ISC de 1 a 5, onde 4 representa
            {`"Excelente" e 5 "Verdadeiramente Excepcional"`}, os autores
            descobriram que, para o setor de varejo, mesmo uma ligeira queda do
            nível {`"Verdadeiramente Excepcional"`} resultou em uma enorme queda
            na lealdade do cliente.
          </ContentParagraph>
          <Image
            src={DiagamThree}
            alt="Lealdade vs Índice de serviço ao cliente"
            className="rounded-md my-8 md:max-w-[500px]"
          />
          <ContentParagraph>
            Consequentemente, a relação entre a satisfação do cliente e a
            lealdade do cliente parece seguir mais a curva sólida mostrada no
            gráfico. Na margem externa extrema, ao elevar o nível de satisfação
            de {`"Excelente"`} (4) para {`"Verdadeiramente Excepcional"`} (5),
            ocorre um aumento dramático e desproporcional na retenção de
            clientes. Em outras palavras, esses dados mostram que é necessária
            uma perfeição consistente em todos os processos para ter alguma
            chance de assegurar a lealdade duradoura do {`"consumidor médio".`}
          </ContentParagraph>
          <ContentParagraph>
            Estamos presenciando o resultado de três décadas de{' '}
            {`"revolução no
            aumento das expectativas"`}{' '}
            dos clientes. Hoje em dia, eles esperam mais do que simplesmente
            ficarem satisfeitos. Para garantir sua fidelidade, é necessário
            entregar um desempenho verdadeiramente notável, de forma
            consistente. Em outras palavras, a excelência tornou-se um requisito
            indispensável para estabelecer um relacionamento duradouro com o
            cliente.
          </ContentParagraph>
          <ContentParagraph>
            Leitores atentos terão notado as aspas em torno do termo{' '}
            {`"consumidor
            médio".`}{' '}
            Isso se deve ao fato de que este termo genérico não consegue
            descrever a ampla diversidade de indivíduos, com experiências,
            estilos e expectativas distintas, que compõem o público consumidor.
            Profissionais de vendas em setores competitivos aprendem que as
            abordagens abrangentes de {`"tamanho único"`} para o atendimento ao
            cliente possuem suas limitações. É necessário, portanto, adotar uma
            estratégia de serviço que leve em consideração essa diversidade de
            necessidades, interesses e expectativas, a fim de oferecer um
            serviço verdadeiramente notável.
          </ContentParagraph>
          <ContentParagraph>
            As implicações para o serviço são profundas. Elevar a experiência de
            atendimento ao cliente de{' '}
            {`'excelente' para 'verdadeiramente
            excepcional'`}{' '}
            exige processos rigorosos e consistentes, mas, ao mesmo tempo,
            flexíveis. Isso requer processos capazes de acompanhar com precisão
            as diversas expectativas dos clientes e um mecanismo correspondente
            para traduzir novas descobertas em ações responsivas. É necessário
            ter uma equipe de atendimento ao cliente habilidosa, autorizada e,
            acima de tudo, com atitude, que é a marca registrada de
            profissionais comprometidos, dispostos e capazes de responder
            decisivamente - se necessário, {`"além do cumprimento do dever"`} -
            quando a situação exige.”
          </ContentParagraph>
          <ContentParagraph>
            A J.D. Power, em seus estudos anuais de satisfação do cliente,
            continua a enfatizar certas expectativas do {`"novo comprador".`}{' '}
            Quatro expectativas específicas são particularmente proeminentes:
          </ContentParagraph>
          <ContentParagraph>
            <span className="font-bold text-center dark:text-[#5e9eff] text-[#0085f2]">
              Simplicidade, transparência, velocidade e conveniência.
            </span>
          </ContentParagraph>
          <ContentParagraph>
            De fato, os clientes estão nos dizendo:{' '}
            {`"Simplifique minha vida".`}{' '}
            {`"Quero um serviço rápido, conveniente e ágil quando preciso e quero
            isso acompanhado de explicações e clareza suficientes para que eu
            possa julgar por mim mesmo se estou obtendo bom valor!"`}{' '}
            É nesse ambiente de consumo que o atual fornecedor de vendas no
            varejo precisa aprender a prosperar.
          </ContentParagraph>
        </Content>
      </MainPageContentArticle>
    </>
  );
};

export default MainContent;
