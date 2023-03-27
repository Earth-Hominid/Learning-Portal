import Link from 'next/link';
import Layout from '../Layout';
import { useContext } from 'react';
import { LanguageContext } from '@/context/language-context';

const NotFound = () => {
  const { englishMode } = useContext(LanguageContext);

  return (
    <Layout
      title={englishMode ? '🤷‍♀️ Page not found' : '🤷‍♀️ Página não encontrada'}
      description={
        englishMode
          ? 'The requested page does not exist.'
          : 'A página requisitada não existe.'
      }
      keywords={
        englishMode
          ? '404, not found'
          : '404, não encontrado, error, erro, page not found, página não encontrada, 404 error, erro 404, missing page, página ausente, dead link, link morto, broken link, link quebrado'
      }
      mainPage="/"
      mainPageTitle="Rede BS Docs"
      currentPage=""
      currentPageTitle={englishMode ? '404. Not found' : '404. Não encontrado'}
      styles=""
      width=""
      parentPage=""
      parentPageTitle=""
    >
      <div
        className="flex flex-col items-center h-screen pt-10 dark:text-white
        text-[#1b1b1b]"
      >
        <div className="flex flex-col flex-start space-y-6">
          <h1
            className="
        text-4xl 
        font-bold
        "
          >
            404 - Page Not Found
          </h1>
          <p>
            {englishMode
              ? 'Sorry, the page could not be found.'
              : 'Desculpe, a página não pôde ser encontrada.'}
          </p>
          <Link
            href="/"
            className="underline dark:text-[#8cb4ff] text-[#0069C1] dark:accent-[#5e9eff]
  hover:no-underline
  underline-offset-2
    accent-[#0085f2]"
          >
            {englishMode ? 'Go back home' : 'Voltar para a página inicial'}
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
