import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { DarkContext } from '@/context/dark-context';
import { LanguageContext } from '@/context/language-context';

import Header from './Header';
import Showcase from './showcase/Showcase';
import ToolBar from './navigation/toolbar/ToolBar';

interface Props {
  title: string;
  keywords: string;
  description: string;
  background?: string;
  children?: React.ReactNode;
  mainPage: string;
  currentPage: string;
  mainPageTitle: string;
  currentPageTitle: string;
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
  mainPageTitle,
  currentPageTitle,
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
        <Header
          darkMode={darkMode}
          handleToggleThemeClick={handleToggleThemeClick}
          englishMode={englishMode}
          handleToggleLanguage={handleToggleLanguage}
        />
      </header>
      <main className="min-h-screen">
        {router.pathname === '/' && <Showcase englishMode={englishMode} />}
        {router.pathname !== '/' && (
          <ToolBar
            mainPage={mainPage}
            currentPage={currentPage}
            mainPageTitle={mainPageTitle}
            currentPageTitle={currentPageTitle}
          />
        )}
        <div className={`${background} ${styles} `}>
          <div className={`${width}`}>{children}</div>
        </div>
      </main>
      <footer id="footer"></footer>
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
