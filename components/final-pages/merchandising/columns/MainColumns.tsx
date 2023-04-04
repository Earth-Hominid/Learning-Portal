import Link from 'next/link';

interface Props {
  children?: React.ReactNode;
}

import {
  MainWrapper,
  InnerContainer,
  SideBarContainer,
  MainContentContainer,
  SideBarTopNav,
  TopList,
  TopListItem,
  SideBarTitle,
} from './Styles';

const MainColumns: React.FC<Props> = ({ children }) => {
  return (
    <MainWrapper>
      <InnerContainer>
        <SideBarContainer id="sidebar">
          <SideBarTopNav aria-label="Merchandising">
            Merchandising
          </SideBarTopNav>
        </SideBarContainer>
        <div id="main-content-container" className="flex flex-1 flex-col">
          <MainContentContainer id="main-content-container">
            {children}
          </MainContentContainer>
        </div>
      </InnerContainer>
    </MainWrapper>
  );
};

export default MainColumns;
