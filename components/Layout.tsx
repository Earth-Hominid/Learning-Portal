import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { DarkContext } from '@/context/dark-context';
import { LanguageContext } from '@/context/language-context';

import Header from './Header';
import Showcase from './showcase/Showcase';
import ToolBar from './navigation/toolbar/ToolBar';
import Logo from '@/components/navigation/logo/Logo';
import Footer from './footer/Footer';

interface Props {
  title: string;
  keywords: string;
  description: string;
  background?: string;
  children?: React.ReactNode;
  mainPage: string;
  currentPage: string;
  parentPage: string;
  mainPageTitle: string;
  currentPageTitle: string;
  parentPageTitle: string;
  styles?: string;
  width?: string;
}

const Layout: React.FC<Props> = ({
  description,
  children,
  title,
  keywords,
  background,
  mainPage,
  currentPage,
  parentPage,
  mainPageTitle,
  currentPageTitle,
  parentPageTitle,
  styles,
  width,
}) => {
  const router = useRouter();
  const { darkMode, handleToggleThemeClick } = useContext(DarkContext);
  const { englishMode, handleToggleLanguage } = useContext(LanguageContext);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header id="header">
        {router.pathname === '/account/login' && (
          <div className="flex flex-row flex-start items-center w-full border-b border-b-gray-200">
            <Logo />
            <div className="border-l border-l-gray-200 pl-4 md:text-lg tracking-wide font-montserrat">
              {englishMode ? 'Employee Program' : 'Programa Funcionário'}
            </div>
          </div>
        )}
        {router.pathname !== '/account/login' && (
          <Header
            darkMode={darkMode}
            handleToggleThemeClick={handleToggleThemeClick}
            englishMode={englishMode}
            handleToggleLanguage={handleToggleLanguage}
          />
        )}
      </header>

      <main className="min-h-screen dark:bg-[#1b1b1b]">
        {router.pathname === '/' && <Showcase englishMode={englishMode} />}
        {router.pathname !== '/' ||
          ('/account/login' && (
            <ToolBar
              mainPage={mainPage}
              currentPage={currentPage}
              parentPage={parentPage}
              mainPageTitle={mainPageTitle}
              currentPageTitle={currentPageTitle}
              parentPageTitle={parentPageTitle}
            />
          ))}
        <div className={`${background} ${styles} `}>
          <div className={`${width}`}>{children}</div>
        </div>
      </main>
      <footer id="nav-footer">
        <Footer englishMode={englishMode} />
      </footer>
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  title: 'Rede BS docs | Plataforma de aprendizagem Rede BS',
  description:
    'A plataforma de aprendizado Rede BS foi criada para ajudá-lo a ter sucesso em sua função na Rede BS',
  keywords: `aprendendo,administrar, supermercado, eletromóveis
  `,
};
