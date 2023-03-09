import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';
import Showcase from './homepage/showcase/Showcase';

interface Props {
  title: string;
  keywords: string;
  description: string;
  background: string;
  children?: React.ReactNode;
  mainPage: string;
  currentPage: string;
  mainPageTitle: string;
  currentPageTitle: string;
  styles: string;
  width: string;
}

const Layout: React.FC<Props> = ({ title, description, keywords }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <header id="header">
          <Header />
        </header>
        <main></main>
        <footer id="footer"></footer>
      </body>
    </>
  );
};

export default Layout;
