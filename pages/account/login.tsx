import { useContext } from 'react';
import { LanguageContext } from '@/context/language-context';
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
