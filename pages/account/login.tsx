import { useContext } from 'react';
import Head from 'next/head';
import { LanguageContext } from '@/context/language-context';
import Footer from '@/components/footer/Footer';
import Login from '@/components/account/Login';

const LoginPage = () => {
  const { englishMode } = useContext(LanguageContext);
  return (
    <>
      <Head>
        <title>{englishMode ? 'Log In' : 'Conecte-se'}</title>
        <meta
          name="description"
          content="Log in to your account. Faça login na sua conta."
        />
        <meta name="keywords" content="log in, account, conta, conecte-se" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
      <Footer englishMode={englishMode} />
    </>
  );
};

export default LoginPage;
