import { useContext } from 'react';
import { DarkContext } from '@/context/dark-context';
import { LanguageContext } from '@/context/language-context';
import AuthContext from '@/context/auth-context';
import Layout from '@/components/Layout';
import ReportSection from './ReportSection';
import {
  Container,
  UserContainer,
  WelcomeContainer,
  ReportContainer,
} from './Styles';

const DashboardPage = () => {
  const { darkMode } = useContext(DarkContext);
  const { englishMode } = useContext(LanguageContext);
  const { user } = useContext(AuthContext);

  return (
    <Layout
      title={englishMode ? 'Rede BS | Dashboard' : 'Rede BS | Painel'}
      description={
        englishMode
          ? 'Rede BS docs is commited to an in-depth business vision that caters to our employees growth.'
          : 'A Rede BS docs está comprometida com uma visão de negócios aprofundada que atende ao crescimento de nossos funcionários.'
      }
      keywords="about, sobre nós "
      background=""
      mainPage="/"
      currentPage="#"
      parentPage="#"
      mainPageTitle="Rede BS"
      currentPageTitle={englishMode ? 'My Dashboard' : 'Meu Painel'}
      parentPageTitle="#"
    >
      <Container>
        <WelcomeContainer>
          <UserContainer>
            <h2 className="text-4xl font-semibold text-left tracking-wide">
              {englishMode ? 'Hello,' : 'Olá,'} {user?.username}
            </h2>
            <p className="text-xl font-light text-left mt-1">
              {englishMode
                ? 'Welcome to Rede BS docs!'
                : 'Bem-vindo à Rede BS docs!'}
            </p>
          </UserContainer>
        </WelcomeContainer>
        <ReportContainer>
          <ReportSection />
        </ReportContainer>
      </Container>
    </Layout>
  );
};

export default DashboardPage;
