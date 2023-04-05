import { StyledThemeButton, ThemeButtonText } from './Styles';

const LogInButton = ({
  englishMode,
  handleAccountClick,
}: {
  englishMode: boolean | null;
  handleAccountClick: () => void;
}) => {
  return (
    <StyledThemeButton onClick={handleAccountClick}>
      <ThemeButtonText>{englishMode ? 'Log in' : 'Conecte-se'}</ThemeButtonText>
    </StyledThemeButton>
  );
};

export default LogInButton;
