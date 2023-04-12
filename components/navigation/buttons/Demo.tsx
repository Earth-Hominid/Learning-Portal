import { StyledThemeButton, ThemeButtonText } from './Styles';

const DemoButton = ({
  handleDemoAccountClick,
}: {
  handleDemoAccountClick: () => void;
}) => {
  return (
    <StyledThemeButton onClick={handleDemoAccountClick}>
      <ThemeButtonText>Demo</ThemeButtonText>
    </StyledThemeButton>
  );
};

export default DemoButton;
