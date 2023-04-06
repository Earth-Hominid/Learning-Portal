import { useState, useEffect, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Image from 'next/image';
import Link from 'next/link';
// import AuthContext from '@/context/AuthContext';
import { LanguageContext } from '@/context/language-context';
import Layout from '../Layout';
import 'react-toastify/dist/ReactToastify.css';
import HeroImage from '@/public/images/comp-desk.png';

import {
  MainContainer,
  StyledLabel,
  StyledButton,
  HeadingContainer,
  InsideContainer,
  SmallScreenContainer,
  LargeScreenContainer,
} from './Styles';

const Login = ({ englishMode }: { englishMode: boolean | null }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const { login, error, clearError } = useContext(AuthContext);

  // useEffect(() => {
  //   if (error) {
  //     toast.error(error);
  //   }
  //   clearError();
  // });

  // const handleSubmit = (e: React.SyntheticEvent) => {
  //   e.preventDefault();
  //   login({ email, password });
  // };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <>
      <Layout
        title={englishMode ? 'Log In' : 'Conecte-se'}
        description="Log in to your account. Faça login na sua conta."
        keywords="log in, account, conta, conecte-se"
        background=""
        mainPage=""
        currentPage=""
        parentPage=""
        mainPageTitle=""
        currentPageTitle=""
        parentPageTitle=""
      >
        <MainContainer>
          <InsideContainer>
            <SmallScreenContainer>
              <HeadingContainer>
                <h2 className="font-bold text-lg font-montserrat lg:text-xl">
                  {englishMode
                    ? 'Sign in with your Rede BS docs ID'
                    : 'Entre com seu ID da Rede BS docs'}
                </h2>
                <p className="font-light mt-2 lg:text-lg">
                  {englishMode
                    ? 'Access our business resources and guides'
                    : 'Obtenha acesso às ferramentas mais recentes e conteúdo exclusivo.'}
                </p>
              </HeadingContainer>
              <ToastContainer />

              <form className="container mx-4 px-4 flex flex-col">
                <StyledLabel>Email *</StyledLabel>

                <input
                  placeholder={
                    englishMode ? 'Enter your email' : 'Digite seu email'
                  }
                  className="px-5 py-3 bg-blue-100 max-w-xs rounded-sm"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                />
                <StyledLabel>Password *</StyledLabel>
                <input
                  placeholder={
                    englishMode ? 'Enter your password' : 'Digite sua senha'
                  }
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                  className="px-5 py-3 bg-blue-100 max-w-xs rounded-sm"
                />
                <div>
                  <StyledButton type="submit" onSubmit={handleSubmit}>
                    Entrar
                  </StyledButton>
                </div>
              </form>
              <div className="flex flex-row space-x-2 items-center mt-6 text-sm mx-4 px-4">
                {englishMode
                  ? 'Not a Rede BS member??'
                  : 'Não é associado da Rede BS?'}
                <Link href="/">
                  <p className="ml-2 underline underline-offset-2">
                    {englishMode
                      ? 'Back to hompage.'
                      : 'Voltar à página inicial.'}
                  </p>
                </Link>
              </div>
            </SmallScreenContainer>
            <LargeScreenContainer>
              <Image
                src={HeroImage}
                alt="hero"
                className="px-5 lg:px-10 pt-4 lg:pt-12"
              />
            </LargeScreenContainer>
          </InsideContainer>
        </MainContainer>
      </Layout>
    </>
  );
};

export default Login;
