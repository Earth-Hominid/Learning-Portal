import { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
// import AuthContext from '@/context/AuthContext';
import { LanguageContext } from '@/context/language-context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Logo from '@/components/navigation/logo/Logo';
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

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { englishMode } = useContext(LanguageContext);

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
  return (
    <>
      <MainContainer>
        <nav
          id="header"
          className="flex flex-row flex-start items-center w-full border-b border-b-gray-200 "
        >
          <Logo />

          <div className="border-l border-l-gray-200 pl-4 md:text-lg tracking-wide font-montserrat">
            {englishMode ? 'Employee Program' : 'Programa Funcionário'}
          </div>
        </nav>
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
                placeholder=""
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
                placeholder="Senha"
                id="password"
                type="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                className="px-5 py-3 bg-blue-100 max-w-xs rounded-sm"
              />
              <div>
                <StyledButton type="submit">Entrar</StyledButton>
              </div>
            </form>
            <div className="flex flex-row space-x-2 items-center mt-6 text-sm mx-4 px-4">
              {englishMode ? 'New to Rede BS?' : ' Novo na Rede BS?'}

              <Link href="/account/register">
                <p className="ml-2 underline underline-offset-2">
                  {englishMode ? 'Create an account!' : 'Criar uma conta!'}
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
    </>
  );
};

export default Login;
