import Logo from '@/components/navigation/logo/Logo';

import { MainContainer, InsideContainer } from './Styles';

type Props = {
  englishMode: boolean | null;
};

const LoginNav: React.FC<Props> = ({ englishMode }) => {
  return (
    <>
      <MainContainer>
        <Logo />
        <InsideContainer>
          {englishMode ? 'Employee Program' : 'Programa Funcionário'}
        </InsideContainer>
      </MainContainer>
    </>
  );
};

export default LoginNav;
