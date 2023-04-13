import { StyledLogInButton } from './Styles';

const LoginButton = ({
  englishMode,
  handleAccountClick,
}: {
  englishMode: boolean | null;
  handleAccountClick: () => void;
}) => {
  return (
    <StyledLogInButton onClick={handleAccountClick}>
      {englishMode ? 'Log in' : 'Conecte-se'}
    </StyledLogInButton>
  );
};

export default LoginButton;
