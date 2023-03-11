import { GlobeAltIcon, SunIcon, MoonIcon } from '@heroicons/react/24/solid';

import { StyledThemeButton, ThemeButtonText } from './Styles';

const LanguageButton = ({
  handleToggleLanguage,
  englishMode,
}: {
  handleToggleLanguage: () => void;

  englishMode: boolean | null;
}) => {
  return (
    <StyledThemeButton onClick={handleToggleLanguage}>
      <GlobeAltIcon className="h-4 w-4" />

      <ThemeButtonText>{englishMode ? 'en-us' : 'pt-br'}</ThemeButtonText>
    </StyledThemeButton>
  );
};

export default LanguageButton;
