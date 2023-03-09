import { Inter, Montserrat } from 'next/font/google';
import Layout from '@/components/Layout';

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
