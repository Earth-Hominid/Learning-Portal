import { StyledThemeButton, ThemeButtonText } from './Styles';

const LogInButton = ({ englishMode }: { englishMode: boolean | null }) => {
  return (
    <StyledThemeButton>
      <ThemeButtonText>{englishMode ? 'Log in' : 'Conecte-se'}</ThemeButtonText>
    </StyledThemeButton>
  );
};

export default LogInButton;
