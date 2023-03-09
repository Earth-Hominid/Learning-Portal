import Logo from '../logo/Logo';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import {
  MainContainer,
  InsideContainer,
  LinkText,
  IconContainer,
  HeaderLinkContainer,
  RelativeContainer,
  AbsoluteContainer,
  StyledButton,
  ActionButtonHolder,
} from './Styles';

const TopNav = ({
  handleNavigationMenuClick,
  navigationMenuToggle,
}: {
  handleNavigationMenuClick: Function;
  navigationMenuToggle: boolean;
}) => {
  return (
    <MainContainer>
      <InsideContainer>
        <Logo />
        <HeaderLinkContainer>
          <a href="#">
            <ActionButtonHolder>
              <LinkText>Guias</LinkText>
            </ActionButtonHolder>
          </a>
          <a href="#">
            <ActionButtonHolder>
              <LinkText>Recursos</LinkText>
            </ActionButtonHolder>
          </a>
        </HeaderLinkContainer>
        <IconContainer>
          <RelativeContainer>
            <AbsoluteContainer></AbsoluteContainer>
            <StyledButton
              onClick={handleNavigationMenuClick}
              className="md:hidden"
            >
              {navigationMenuToggle ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </StyledButton>
          </RelativeContainer>
        </IconContainer>
      </InsideContainer>
    </MainContainer>
  );
};

export default TopNav;
