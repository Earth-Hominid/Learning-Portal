import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { StyledThemeButton, ThemeButtonText } from './Styles';

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
    <StyledThemeButton>
      {darkMode ? (
        <SunIcon className="h-4 w-4" />
      ) : (
        <MoonIcon className="h-4 w-4" />
      )}
      <ThemeButtonText>{englishMode ? 'Theme' : 'Tema'}</ThemeButtonText>
    </StyledThemeButton>
  );
};

export default ThemeButton;
