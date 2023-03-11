import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { StyledThemeButton, ThemeButtonText } from './Styles';

const ThemeButton = ({
  darkMode,
  handleToggleThemeClick,
  englishMode,
}: {
  handleToggleThemeClick: () => void;
  darkMode: boolean | null;
  englishMode: boolean | null;
}) => {
  return (
    <StyledThemeButton onClick={handleToggleThemeClick}>
      {darkMode ? (
        <MoonIcon className="h-4 w-4" />
      ) : (
        <SunIcon className="h-4 w-4" />
      )}
      <ThemeButtonText>{englishMode ? 'Theme' : 'Tema'}</ThemeButtonText>
    </StyledThemeButton>
  );
};

export default ThemeButton;
