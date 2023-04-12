import { useContext } from 'react';
import AuthContext from '@/context/auth-context';
import { StyledLogInButton } from './Styles';

const LogoutButton = ({ englishMode }: { englishMode: boolean | null }) => {
  const { logout } = useContext(AuthContext);

  return (
    <StyledLogInButton onClick={() => logout()}>
      {englishMode ? 'Log out' : 'Sair'}
    </StyledLogInButton>
  );
};

export default LogoutButton;
