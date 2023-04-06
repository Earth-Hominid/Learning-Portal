import { useContext } from 'react';
import Head from 'next/head';
import { LanguageContext } from '@/context/language-context';
import Footer from '@/components/footer/Footer';
import Login from '@/components/account/Login';

const LoginPage = () => {
  const { englishMode } = useContext(LanguageContext);
  return (
    <>
      <Login englishMode={englishMode} />
    </>
  );
};

export default LoginPage;
