import { StyledLogInButton } from './Styles';

const LogoutButton = ({
  englishMode,
  logOut,
}: {
  englishMode: boolean | null;
  logOut: () => void;
}) => {
  return (
    <StyledLogInButton onClick={() => logOut()}>
      {englishMode ? 'Log out' : 'Sair'}
    </StyledLogInButton>
  );
};

export default LogoutButton;
