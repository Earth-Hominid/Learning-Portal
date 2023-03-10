import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { StyledButton, ButtonText } from './Styles';

const ThemeButton = ({
  darkMode,
  handleToggleThemeClick,
  englishMode,
}: {
  handleToggleThemeClick: Function;
  darkMode: boolean | null;
  englishMode: boolean | null;
}) => {
  return (
    <StyledButton>
      {darkMode ? (
        <SunIcon className="h-4 w-4" />
      ) : (
        <MoonIcon className="h-4 w-4" />
      )}
      <ButtonText>{englishMode ? 'Theme' : 'Tema'}</ButtonText>
    </StyledButton>
  );
};

export default ThemeButton;
