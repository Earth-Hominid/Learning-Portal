import { UserIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { StyledThemeButton, ThemeButtonText } from './Styles';

const DemoButton = ({
  englishMode,
  handleDashboardClick,
}: {
  englishMode: boolean | null;
  handleDashboardClick: () => void;
}) => {
  return (
    <StyledThemeButton onClick={handleDashboardClick}>
      <UserIcon className="h-4 w-4" />
      <ThemeButtonText>{englishMode ? 'Dashboard' : 'Painel'}</ThemeButtonText>
    </StyledThemeButton>
  );
};

export default DemoButton;
