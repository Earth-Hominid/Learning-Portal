import { useContext } from 'react';
import { DarkContext } from '@/context/dark-context';
import { LanguageContext } from '@/context/language-context';
import Layout from '../Layout';
import Showcase from '../showcase/Showcase';

const AboutPage = () => {
  const { darkMode, handleToggleThemeClick } = useContext(DarkContext);
  const { englishMode, handleToggleLanguage } = useContext(LanguageContext);

  return (
    <Layout
      title={englishMode ? 'Rede BS | About us' : 'Rede BS | Sobre nós'}
      description={
        englishMode
          ? 'Rede BS docs is commited to an in-depth business vision that caters to our employees growth.'
          : 'A Rede BS docs está comprometida com uma visão de negócios aprofundada que atende ao crescimento de nossos funcionários.'
      }
      keywords="about, sobre nós "
      mainPageTitle="Rede BS"
      mainPage="/"
      currentPage="/about"
      currentPageTitle={englishMode ? 'About us' : 'Sobre nós'}
      background={darkMode ? 'bg-[#1c1c1c]' : 'bg-white'}
      styles="pb-10 flex justify-center"
      width="max-w-5xl"
    >
      <Showcase englishMode={englishMode} />
      <div className="flex flex-col m-5 p-5 min-h-screen"></div>
    </Layout>
  );
};

export default AboutPage;
