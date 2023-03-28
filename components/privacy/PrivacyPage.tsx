import { useContext } from 'react';
import Layout from '../Layout';
import { LanguageContext } from '@/context/language-context';

import {
  MainContainer,
  InsideContainer,
  HeadingContainer,
  MainHeading,
  BodyContainer,
  BodySubtitle,
  BodyText,
  DiscList,
  NoStyleList,
  UpdatedText,
} from './Styles';

const PrivacyPage = () => {
  const { englishMode } = useContext(LanguageContext);

  return (
    <>
      <Layout
        title="Política de Privacidade do Bazar Souza"
        description=""
        keywords=""
        background=""
        mainPage="/"
        mainPageTitle="Rede BS Docs"
        currentPage="#"
        currentPageTitle="Política de Privacidade"
        parentPage="#"
        parentPageTitle="#"
        styles=""
        width=""
      >
        <MainContainer>
          <InsideContainer>
            <HeadingContainer>
              <MainHeading>Política de Privacidade do Bazar Souza</MainHeading>
            </HeadingContainer>
            <BodyContainer>
              <UpdatedText>Data de vigência: 25 de julho de 2022</UpdatedText>
              <BodySubtitle>Protegendo suas informações pessoais</BodySubtitle>
              <BodyText>
                Obrigado por visitar a bazarsouza.com. Valorizamos você como
                nosso cliente e estamos comprometidos em honrar a confiança que
                você depositou em nós. Esta é a Política de Privacidade da Rede
                Bazar Souza. Ele descreve como suas informações pessoais são
                coletadas, usadas e compartilhadas quando você visita ou faz uma
                compra on-line em nossas lojas. Ao usar ou acessar nossos
                serviços de qualquer maneira, você reconhece que aceita as
                práticas e políticas descritas nesta Política de Privacidade, e
                consente que coletaremos, usaremos e compartilharemos suas
                informações das seguintes maneiras.
              </BodyText>
              <BodySubtitle>Informações pessoais que coletamos</BodySubtitle>
              <BodyText>
                Na Rede Bazar Souza, coletamos, usamos e divulgamos informações
                pessoais para lhe fornecer os produtos e serviços que você
                solicitou ou para oferecer produtos e serviços adicionais nos
                quais acreditamos que você possa ter interesse. A Rede Bazar
                Souza também coleta, usa e divulga suas informações pessoais
                para cumprir os requisitos legais e regulamentares e, de outra
                forma, podem ser permitidas ou exigidas pelas leis aplicáveis. A
                maioria das informações que coletamos vem diretamente de você e
                somente com o seu consentimento. Para que estes dados permaneçam
                intactos, nós desaconselhamos expressamente a divulgação da sua
                senha a terceiros, mesmo a amigos e parentes.
              </BodyText>
              <BodySubtitle>
                COMO USAMOS SUAS INFORMAÇÕES PESSOAIS?
              </BodySubtitle>
              <BodyText>
                Usamos as Informações do Pedido que coletamos geralmente para
                atender quaisquer pedidos feitos através de nossa loja on-line
                (incluindo o processamento de suas informações de pagamento, a
                organização do envio e o fornecimento de faturas e / ou
                confirmações de pedidos). Além disso, usamos essas informações
                de pedido para:
              </BodyText>
              <DiscList>
                <li>Comunicar com você;</li>
                <li>
                  Selecionar nossos pedidos de risco potencial ou fraude e;
                </li>
                <li>
                  Quando estiver de acordo com as preferências que você
                  compartilhou conosco, fornecer informações ou publicidade
                  relacionadas aos nossos produtos ou serviços.
                </li>
              </DiscList>
              <BodyText>
                Usamos as Informações do dispositivo que coletamos para nos
                ajudar a identificar possíveis riscos e fraudes (em particular,
                seu endereço IP) e, em geral, melhorar e otimizar nossa loja
                on-line (por exemplo, gerando análises sobre como nossos
                clientes navegam e interagem com redebazarsouza.com.br, e
                avaliar o sucesso de nossas campanhas de marketing e
                publicidade).
              </BodyText>
              <BodySubtitle>
                COMPARTILHANDO SUAS INFORMAÇÕES PESSOAIS
              </BodySubtitle>
              <BodyText>
                Podemos compartilhar suas Informações pessoais para cumprir as
                leis e regulamentos aplicáveis, para responder a uma intimação,
                mandado de busca ou outra solicitação legal de informações que
                recebemos, ou para proteger nossos direitos.
              </BodyText>
              <BodySubtitle>ALTERAR</BodySubtitle>
              <BodyText>
                Podemos atualizar esta política de privacidade de tempos em
                tempos para refletir, por exemplo, mudanças em nossas práticas
                ou por outras razões operacionais, legais ou regulamentares.
                Nosso site conterá a versão mais atualizada desta Política de
                Privacidade; Por favor, revise-o periodicamente para mudanças.
                Data da última atualização: 25 de julho de 2022
              </BodyText>
              <BodySubtitle>MENORES</BodySubtitle>
              <BodyText>
                O site não é destinado a pessoas com menos de 18 anos.
              </BodyText>
              <BodySubtitle>CONTATE-NOS</BodySubtitle>
              <BodyText>
                Para obter mais informações sobre nossas práticas de
                privacidade, se você tiver dúvidas ou se quiser fazer uma
                reclamação, entre em contato com o Escritório de Privacidade d
                Rede Bazar Souza em:
              </BodyText>
              <NoStyleList>
                <li>Escritório de privacidade</li>
                <li>Rede Bazar Souza Legal</li>
                <li>Oficial de Conformidade de Privacidade</li>
                <li>Avenida David Vieira Ney # 40</li>
                <li>São José de Ubá, RJ, 28455-000</li>
              </NoStyleList>
            </BodyContainer>
          </InsideContainer>
        </MainContainer>
      </Layout>
    </>
  );
};

export default PrivacyPage;
