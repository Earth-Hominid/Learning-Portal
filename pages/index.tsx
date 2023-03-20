import { Inter, Montserrat } from 'next/font/google';
import Layout from '@/components/Layout';
import { API_URL } from '@/config';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Layout
        title="Rede BS docs | Plataforma de aprendizagem Rede BS"
        description="Plataforma de aprendizado da Rede BS"
        keywords="aprendendo,administrar, supermercado, eletromóveis"
        mainPage="/"
        mainPageTitle="Rede BS Docs"
        currentPage=""
        currentPageTitle="Rede BS Docs"
        background=""
        styles=""
        width=""
      />
    </>
  );
}

export async function getStaticProps() {
  // fetch data from an API
  const res = await fetch(`${API_URL}/api/articles`);
  let articles = await res.json();
  let articlesData = articles.data;

  return {
    props: { articlesData },
  };
}
