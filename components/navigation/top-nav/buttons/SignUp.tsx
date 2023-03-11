import { StyledSignUpButton } from './Styles';

const SignUpButton = ({ englishMode }: { englishMode: boolean | null }) => {
  return (
    <StyledSignUpButton>
      {englishMode ? 'Sign up' : 'Inscrever-se'}
    </StyledSignUpButton>
  );
};

export default SignUpButton;
