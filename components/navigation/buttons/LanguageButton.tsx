import { GlobeAmericasIcon } from '@heroicons/react/24/solid';

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
      <GlobeAmericasIcon className="h-4 w-4" />
      <ThemeButtonText>
        {englishMode ? 'English' : 'Português-BR'}
      </ThemeButtonText>
    </StyledThemeButton>
  );
};

export default LanguageButton;
